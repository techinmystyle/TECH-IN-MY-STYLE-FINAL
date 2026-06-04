const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');
const sendEmail = require('../utils/sendEmail');
const { getDbMode, getLocalDb } = require('../config/db');

// ─────────────────────────────────────────────
// LOCAL DB HELPERS  (used when MongoDB is down)
// ─────────────────────────────────────────────

const localFindUserByEmail = (email) => {
  const db = getLocalDb();
  if (!db) return null;
  return db.get('users').find({ email: email.toLowerCase() }).value() || null;
};

const localFindUserByUsername = (username) => {
  const db = getLocalDb();
  if (!db) return null;
  return db.get('users').find({ username }).value() || null;
};

const localFindUserById = (id) => {
  const db = getLocalDb();
  if (!db) return null;
  return db.get('users').find({ _id: id }).value() || null;
};

const localCreateUser = async ({ username, email, password }) => {
  const db = getLocalDb();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  const newUser = {
    _id: crypto.randomBytes(12).toString('hex'),
    username,
    email: email.toLowerCase(),
    password: hashedPassword,
    resetPasswordToken: undefined,
    resetPasswordExpire: undefined,
    createdAt: new Date().toISOString()
  };
  
  db.get('users').push(newUser).write();
  return newUser;
};

const localUpdateUser = (id, updates) => {
  const db = getLocalDb();
  db.get('users').find({ _id: id }).assign(updates).write();
  return db.get('users').find({ _id: id }).value();
};

const localComparePassword = async (enteredPassword, storedHash) => {
  return await bcrypt.compare(enteredPassword, storedHash);
};

const localFindUserByResetToken = (hashedToken) => {
  const db = getLocalDb();
  if (!db) return null;
  return db.get('users').find(u =>
    u.resetPasswordToken === hashedToken &&
    u.resetPasswordExpire &&
    new Date(u.resetPasswordExpire) > new Date()
  ).value() || null;
};

// ─────────────────────────────────────────────
// MONGODB HELPERS
// ─────────────────────────────────────────────

const getMongoUser = () => {
  // Lazy-require so it doesn't crash in local mode
  try { return require('../models/User'); } catch { return null; }
};

// ─────────────────────────────────────────────
// CONTROLLERS
// ─────────────────────────────────────────────

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const mode = getDbMode();

    if (mode === 'local') {
      // Local JSON mode
      const existingEmail = localFindUserByEmail(email);
      const existingUsername = localFindUserByUsername(username);

      if (existingEmail) return res.status(400).json({ message: 'Email already registered' });
      if (existingUsername) return res.status(400).json({ message: 'Username already taken' });

      const user = await localCreateUser({ username, email, password });

      return res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id)
      });
    }

    // MongoDB mode
    const User = getMongoUser();
    const userExists = await User.findOne({ $or: [{ email }, { username }] });

    if (userExists) {
      return res.status(400).json({
        message: userExists.email === email.toLowerCase() ? 'Email already registered' : 'Username already taken'
      });
    }

    const user = await User.create({ username, email, password });

    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id)
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error('Register error:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const mode = getDbMode();

    if (mode === 'local') {
      const user = localFindUserByEmail(email);
      if (!user) return res.status(401).json({ message: 'Invalid email or password' });

      const isMatch = await localComparePassword(password, user.password);
      if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

      return res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id)
      });
    }

    // MongoDB mode
    const User = getMongoUser();
    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) return res.status(401).json({ message: 'Invalid email or password' });

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id)
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getProfile = async (req, res) => {
  try {
    const mode = getDbMode();

    if (mode === 'local') {
      const user = localFindUserById(req.user._id);
      if (!user) return res.status(404).json({ message: 'User not found' });

      return res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      });
    }

    // MongoDB mode
    const User = getMongoUser();
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Forgot password
// @route   POST /api/auth/forgot-password
// @access  Public
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const mode = getDbMode();

    let user;
    if (mode === 'local') {
      user = localFindUserByEmail(email);
    } else {
      const User = getMongoUser();
      user = await User.findOne({ email });
    }

    if (!user) return res.status(404).json({ message: 'No user found with this email' });

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const expire = new Date(Date.now() + 15 * 60 * 1000).toISOString();

    if (mode === 'local') {
      localUpdateUser(user._id, {
        resetPasswordToken: hashedToken,
        resetPasswordExpire: expire
      });
    } else {
      user.resetPasswordToken = hashedToken;
      user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
      await user.save();
    }

    const clientUrl = (process.env.CLIENT_URL || 'http://localhost:3000').split(',')[0].trim();
    const resetUrl = `${clientUrl}/reset-password/${resetToken}`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Poppins', Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(45deg, #2196F3, #64B5F6); padding: 30px; text-align: center; color: white; }
          .header h1 { margin: 0; font-size: 28px; }
          .content { padding: 40px 30px; }
          .content h2 { color: #333; margin-top: 0; }
          .content p { color: #666; line-height: 1.6; font-size: 16px; }
          .button { display: inline-block; padding: 15px 40px; background: linear-gradient(45deg, #2196F3, #64B5F6); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
          .footer { background: #f8f8f8; padding: 20px; text-align: center; color: #999; font-size: 14px; }
          .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; color: #856404; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header"><h1>🔐 Password Reset Request</h1></div>
          <div class="content">
            <h2>Hello ${user.username},</h2>
            <p>We received a request to reset your password for your Tech In My Style account.</p>
            <p>Click the button below to reset your password:</p>
            <a href="${resetUrl}" class="button">Reset Password</a>
            <div class="warning">
              <strong>⚠️ Important:</strong> This link will expire in 15 minutes for security reasons.
            </div>
            <p>If you didn't request a password reset, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>© 2025 Tech In My Style. All rights reserved.</p>
            <p>If the button doesn't work, copy and paste this link:</p>
            <p style="word-break: break-all; color: #2196F3;">${resetUrl}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    try {
      await sendEmail({ email: user.email, subject: 'Password Reset - Tech In My Style', html });
      res.json({ message: 'Password reset email sent successfully' });
    } catch (emailErr) {
      // Revert token on email failure
      if (mode === 'local') {
        localUpdateUser(user._id, { resetPasswordToken: null, resetPasswordExpire: null });
      } else {
        user.resetPasswordToken = null;
        user.resetPasswordExpire = null;
        await user.save();
      }
      return res.status(500).json({ message: 'Email could not be sent. Check your EMAIL_PASSWORD in .env' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Reset password
// @route   PUT /api/auth/reset-password/:resetToken
// @access  Public
const resetPassword = async (req, res) => {
  try {
    const hashedToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex');
    const mode = getDbMode();

    let user;
    if (mode === 'local') {
      user = localFindUserByResetToken(hashedToken);
    } else {
      const User = getMongoUser();
      user = await User.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpire: { $gt: Date.now() }
      });
    }

    if (!user) return res.status(400).json({ message: 'Invalid or expired reset token' });

    if (mode === 'local') {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      localUpdateUser(user._id, {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpire: null
      });
    } else {
      user.password = req.body.password;
      user.resetPasswordToken = null;
      user.resetPasswordExpire = null;
      await user.save();
    }

    res.json({
      message: 'Password reset successful',
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login, getProfile, forgotPassword, resetPassword };
