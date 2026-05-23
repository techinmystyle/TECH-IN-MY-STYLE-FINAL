import OsCodeBlock from '../components/OsCodeBlock';
import OsResources from '../components/OsResources';
import OsQuiz from '../components/OsQuiz';
import OsInterviewQuestion from '../components/OsInterviewQuestion';

export default function OsSecurity() {
    return (
        <div className="module-page animate-fade-in">
            <div className="module-header">
                <span className="module-badge">MODULE 07</span>
                <h1>OS Security & <span className="glow-text">Protection</span></h1>
                <p className="module-subtitle">Access control, authentication, security models, common threats, and defense mechanisms.</p>
            </div>

            {/* 7.1 */}
            <section className="module-section">
                <h2>7.1  -  Security vs Protection</h2>
                <p>
                    <strong>Protection</strong> is an internal mechanism  -  controlling access of processes and users to
                    resources defined by the OS. It deals with <em>who can access what</em>.
                </p>
                <p>
                    <strong>Security</strong> is a broader concern  -  defending the system against external and internal
                    attacks: unauthorized access, malicious destruction, data theft, and disruption of service.
                </p>
                <h3>Security Goals (CIA Triad)</h3>
                <ul>
                    <li><strong>Confidentiality</strong>  -  Only authorized users can access sensitive data. Enforced by encryption, access control.</li>
                    <li><strong>Integrity</strong>  -  Data cannot be modified by unauthorized entities. Enforced by checksums, hashing, digital signatures.</li>
                    <li><strong>Availability</strong>  -  System and data must be available when needed. Threatened by DoS attacks, hardware failures.</li>
                </ul>
            </section>

            {/* 7.2 */}
            <section className="module-section">
                <h2>7.2  -  Authentication</h2>
                <p>
                    Verifying the identity of a user or process before granting access. Three factors:
                </p>
                <ul>
                    <li><strong>Something you know</strong>  -  Passwords, PINs, security questions</li>
                    <li><strong>Something you have</strong>  -  Smart cards, hardware tokens, mobile phone (OTP)</li>
                    <li><strong>Something you are</strong>  -  Biometrics: fingerprint, face, iris, voice</li>
                </ul>
                <h3>Password Security</h3>
                <ul>
                    <li><strong>Hashing</strong>  -  Passwords stored as hashes (SHA-256, bcrypt, scrypt, Argon2). Even if the password file is stolen, original passwords are not revealed.</li>
                    <li><strong>Salting</strong>  -  Random salt prepended to password before hashing. Prevents rainbow table attacks and ensures identical passwords produce different hashes.</li>
                    <li><strong>Account lockout</strong>  -  Lock account after N failed attempts. Prevents brute-force attacks.</li>
                    <li><strong>Multi-factor authentication (MFA)</strong>  -  Combines two or more authentication factors. Significantly reduces risk.</li>
                </ul>
                <h3>Unix Password System</h3>
                <p>
                    <code>/etc/passwd</code>  -  Readable by all, stores user info (username, UID, GID, home, shell).
                    <code>/etc/shadow</code>  -  Readable only by root, stores hashed passwords with salt and aging info.
                    Separation ensures normal users cannot access even hashed passwords.
                </p>
            </section>

            {/* 7.3 */}
            <section className="module-section">
                <h2>7.3  -  Access Control Mechanisms</h2>
                <h3>Unix File Permissions</h3>
                <p>
                    Each file has permissions for three categories: <strong>Owner (u)</strong>, <strong>Group (g)</strong>,
                    <strong>Others (o)</strong>. Three permission types: <strong>Read (r=4)</strong>,
                    <strong> Write (w=2)</strong>, <strong>Execute (x=1)</strong>. Encoded as 9 bits + 3 special bits.
                </p>
                <ul>
                    <li><code>chmod 755 file</code>  -  Owner: rwx, Group: r-x, Others: r-x</li>
                    <li><code>chmod 644 file</code>  -  Owner: rw-, Group: r--, Others: r--</li>
                    <li><strong>SUID bit</strong>  -  Execute file with owner's privileges (e.g., <code>passwd</code> runs as root)</li>
                    <li><strong>SGID bit</strong>  -  Execute with group's privileges; on directories, new files inherit the group</li>
                    <li><strong>Sticky bit</strong>  -  On directories, only the file owner can delete files (used on <code>/tmp</code>)</li>
                </ul>
                <h3>Access Control Lists (ACLs)</h3>
                <p>
                    Unix permissions are limited to three categories. ACLs provide fine-grained control: specify
                    permissions for individual users and groups. Commands: <code>getfacl</code>, <code>setfacl</code>.
                    Windows NTFS uses ACLs extensively  -  each file has a Discretionary Access Control List (DACL)
                    specifying which Security IDs (SIDs) can perform which operations.
                </p>
                <h3>Access Control Matrix</h3>
                <p>
                    A theoretical model: rows = subjects (users/processes), columns = objects (files/devices), cells =
                    permissions. Impractical to store directly (sparse, huge). Implemented as: <strong>ACLs</strong>
                    (column-oriented  -  each object stores its access list) or <strong>Capability Lists</strong>
                    (row-oriented  -  each subject stores its capabilities).
                </p>
                <h3>Capability-Based Security</h3>
                <p>
                    A capability is an unforgeable token granting specific access rights to a specific object. The subject
                    presents the capability to access the object  -  no access matrix lookup needed. Used in: some microkernels
                    (seL4, CapROS), WebAssembly, some programming languages (Rust's borrow checker is conceptually similar).
                </p>
            </section>

            {/* 7.4 */}
            <section className="module-section">
                <h2>7.4  -  Security Models</h2>
                <h3>Bell-LaPadula Model (Confidentiality)</h3>
                <p>
                    Designed for military classification systems. Two rules: <strong>No Read Up</strong> (a subject
                    cannot read data at a higher security level) and <strong>No Write Down</strong> (cannot write data
                    to a lower security level). Prevents information leakage from higher to lower levels.
                    Focuses only on confidentiality, not integrity.
                </p>
                <h3>Biba Model (Integrity)</h3>
                <p>
                    Dual of Bell-LaPadula. <strong>No Read Down</strong> (don't read less trustworthy data) and
                    <strong>No Write Up</strong> (don't write above your integrity level). Prevents
                    corruption from unreliable sources propagating to higher-integrity data.
                </p>
                <h3>Mandatory Access Control (MAC)</h3>
                <p>
                    The OS enforces access policies  -  users cannot override them. Used in military/government systems.
                    Examples: <strong>SELinux</strong> (Security-Enhanced Linux), <strong>AppArmor</strong> (application
                    profiles), macOS sandboxing. Contrast with DAC (Discretionary Access Control) where object owners
                    set permissions.
                </p>
                <h3>Role-Based Access Control (RBAC)</h3>
                <p>
                    Access decisions based on roles (admin, operator, user) rather than individual users. Users are
                    assigned roles; roles have permissions. Simplifies administration in large organizations.
                    Principle of least privilege: assign the minimum necessary roles.
                </p>
            </section>

            {/* 7.5 */}
            <section className="module-section">
                <h2>7.5  -  Common Security Threats</h2>
                <h3>Malware Types</h3>
                <ul>
                    <li><strong>Virus</strong>  -  Infects executable files; needs user action to spread (opening a file)</li>
                    <li><strong>Worm</strong>  -  Self-replicating; spreads independently over networks (no user action needed)</li>
                    <li><strong>Trojan Horse</strong>  -  Disguised as legitimate software; performs malicious actions covertly</li>
                    <li><strong>Ransomware</strong>  -  Encrypts user data and demands payment for decryption</li>
                    <li><strong>Rootkit</strong>  -  Hides deep in the OS (kernel level), conceals malicious activity from detection</li>
                    <li><strong>Spyware</strong>  -  Monitors user activity, captures keystrokes, screenshots</li>
                    <li><strong>Logic Bomb</strong>  -  Dormant code triggered by specific conditions (date, event)</li>
                </ul>
                <h3>Attack Vectors</h3>
                <ul>
                    <li><strong>Buffer Overflow</strong>  -  Write beyond array bounds to overwrite return addresses and execute arbitrary code. Defense: stack canaries, ASLR, DEP/NX bit, bounds checking.</li>
                    <li><strong>Privilege Escalation</strong>  -  Exploiting vulnerabilities to gain higher privileges (user to root). Horizontal: gaining same-level access to another user's resources.</li>
                    <li><strong>Side-Channel Attacks</strong>  -  Exploiting timing, power consumption, or electromagnetic emissions to extract information. Spectre/Meltdown exploited CPU speculative execution.</li>
                    <li><strong>Social Engineering</strong>  -  Manipulating humans: phishing emails, pretexting, baiting</li>
                    <li><strong>Denial of Service (DoS)</strong>  -  Overwhelming system resources to make services unavailable. DDoS uses many compromised machines (botnet).</li>
                </ul>
            </section>

            {/* 7.6 */}
            <section className="module-section">
                <h2>7.6  -  Defense Mechanisms</h2>
                <h3>Address Space Layout Randomization (ASLR)</h3>
                <p>
                    Randomizes memory locations of stack, heap, and libraries at each execution. Makes buffer
                    overflow exploits harder  -  attacker cannot predict target addresses.
                </p>
                <h3>Data Execution Prevention (DEP / NX bit)</h3>
                <p>
                    Marks memory pages as non-executable (no-execute bit). Prevents execution of code injected
                    into the stack or heap. Hardware-supported on modern CPUs.
                </p>
                <h3>Stack Canaries</h3>
                <p>
                    Random values placed between local variables and the return address on the stack. Before
                    returning from a function, the canary is checked  -  if it's been modified, a buffer overflow
                    is detected and the program aborts.
                </p>
                <h3>Sandboxing & Isolation</h3>
                <p>
                    Running untrusted code in a restricted environment with limited access to system resources.
                    Examples: browser sandboxes, Docker containers, VMs, <code>chroot</code> jails, Windows
                    Integrity Levels, iOS app sandboxing.
                </p>
                <h3>Encryption</h3>
                <ul>
                    <li><strong>Symmetric</strong>  -  Same key for encrypt/decrypt (AES). Fast, used for data at rest.</li>
                    <li><strong>Asymmetric</strong>  -  Public/private key pair (RSA, ECC). Slower, used for key exchange and digital signatures.</li>
                    <li><strong>Full Disk Encryption</strong>  -  BitLocker (Windows), LUKS (Linux), FileVault (macOS). Protects data if device is stolen.</li>
                    <li><strong>TLS/SSL</strong>  -  Encrypts network communications (HTTPS, email, VPN).</li>
                </ul>

                <OsCodeBlock
                    title="security_demo"
                    codes={{
                        c: `#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <sys/stat.h>

// ---- Buffer overflow vulnerability ----
void vulnerable() {
    char buffer[64];
    printf("Enter input: ");
    gets(buffer);  // NEVER use gets()  -  no bounds checking!
    printf("You entered: %s\\n", buffer);
}

// ---- Safe version ----
void safe_input() {
    char buffer[64];
    printf("Enter input: ");
    fgets(buffer, sizeof(buffer), stdin);
    buffer[strcspn(buffer, "\\n")] = 0;
    printf("You entered: %s\\n", buffer);
}

int main() {
    // Check file permissions
    struct stat st;
    stat("/etc/shadow", &st);
    printf("shadow permissions: %o\\n", st.st_mode & 0777);

    // Check if we're root
    printf("UID : %d\\n", getuid());
    printf("EUID: %d\\n", geteuid());

    if (getuid() == 0)
        printf("WARNING: Running as root!\\n");
    else
        printf("Running as non-root user.\\n");

    // Demonstrate chroot (requires root)
    // chroot("/var/sandbox");
    // chdir("/");

    safe_input();
    return 0;
}`,
                        python: `import hashlib
import secrets
import os
import stat

# ---- Password Hashing ----
def hash_password(password, salt=None):
    if salt is None:
        salt = secrets.token_hex(16)
    hashed = hashlib.pbkdf2_hmac(
        'sha256', password.encode(), salt.encode(),
        iterations=100000
    )
    return salt, hashed.hex()

# Hash a password
salt, hashed = hash_password("MySecureP@ss123")
print(f"Salt  : {salt}")
print(f"Hash  : {hashed}")

# Verify
_, verify_hash = hash_password("MySecureP@ss123", salt)
print(f"Match : {verify_hash == hashed}")

# Wrong password
_, wrong_hash = hash_password("WrongPassword", salt)
print(f"Wrong : {wrong_hash == hashed}")

# ---- File Permissions ----
test_file = "secure_test.txt"
with open(test_file, "w") as f:
    f.write("Sensitive data\\n")

# Set restrictive permissions (owner read/write only)
os.chmod(test_file, stat.S_IRUSR | stat.S_IWUSR)  # 600
info = os.stat(test_file)
print(f"\\nPermissions: {oct(stat.S_IMODE(info.st_mode))}")

# ---- Secure random generation ----
token = secrets.token_urlsafe(32)
print(f"\\nSecure token: {token}")
print(f"Random int  : {secrets.randbelow(1000)}")

os.unlink(test_file)`,
                        java: `import javax.crypto.*;
import javax.crypto.spec.*;
import java.security.*;
import java.util.Base64;

public class SecurityDemo {
    // ---- Password Hashing with PBKDF2 ----
    static String hashPassword(String password, byte[] salt)
            throws Exception {
        SecretKeyFactory factory = SecretKeyFactory.getInstance(
            "PBKDF2WithHmacSHA256");
        KeySpec spec = new PBEKeySpec(
            password.toCharArray(), salt, 100000, 256);
        byte[] hash = factory.generateSecret(spec).getEncoded();
        return Base64.getEncoder().encodeToString(hash);
    }

    // ---- AES Encryption ----
    static byte[] encrypt(String plaintext, SecretKey key)
            throws Exception {
        Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
        byte[] iv = new byte[12];
        SecureRandom.getInstanceStrong().nextBytes(iv);
        cipher.init(Cipher.ENCRYPT_MODE, key,
            new GCMParameterSpec(128, iv));
        byte[] encrypted = cipher.doFinal(plaintext.getBytes());
        byte[] result = new byte[iv.length + encrypted.length];
        System.arraycopy(iv, 0, result, 0, iv.length);
        System.arraycopy(encrypted, 0, result, iv.length,
            encrypted.length);
        return result;
    }

    public static void main(String[] args) throws Exception {
        // Password hashing
        byte[] salt = new byte[16];
        SecureRandom.getInstanceStrong().nextBytes(salt);
        String hash = hashPassword("MySecureP@ss123", salt);
        System.out.println("Hash: " + hash);

        // Verify
        String verify = hashPassword("MySecureP@ss123", salt);
        System.out.println("Match: " + hash.equals(verify));

        // AES encryption
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(256);
        SecretKey key = keyGen.generateKey();
        byte[] encrypted = encrypt("Secret OS data!", key);
        System.out.println("Encrypted: " +
            Base64.getEncoder().encodeToString(encrypted));

        // Secure random
        SecureRandom sr = SecureRandom.getInstanceStrong();
        byte[] token = new byte[32];
        sr.nextBytes(token);
        System.out.println("Token: " +
            Base64.getEncoder().encodeToString(token));
    }
}`,
                    }}
                />
            </section>

            {/* 7.7 */}
            <section className="module-section">
                <h2>7.7  -  OS Hardening & Best Practices</h2>
                <ul>
                    <li><strong>Principle of Least Privilege</strong>  -  Every process and user should have the minimum permissions necessary</li>
                    <li><strong>Defense in Depth</strong>  -  Multiple layers of security (firewall + antivirus + encryption + ACLs)</li>
                    <li><strong>Regular Updates</strong>  -  Patch OS and software to fix known vulnerabilities</li>
                    <li><strong>Audit Logging</strong>  -  Log authentication attempts, file access, privilege escalation for forensics</li>
                    <li><strong>Disable Unnecessary Services</strong>  -  Reduce attack surface by removing unused daemons and ports</li>
                    <li><strong>Network Segmentation</strong>  -  Isolate critical systems from general network access</li>
                    <li><strong>Firewall Rules</strong>  -  Control incoming/outgoing traffic with iptables/nftables (Linux), Windows Firewall</li>
                </ul>
            </section>

            <OsQuiz
                title="Module 7  -  Comprehensive Check"
                questions={[
                    {
                        question: 'What does the CIA triad stand for?',
                        options: [
                            'Computer, Internet, Applications',
                            'Confidentiality, Integrity, Availability',
                            'Control, Identity, Access',
                            'Code, Implementation, Architecture',
                        ],
                        answer: 1,
                    },
                    {
                        question: 'What is the difference between MAC and DAC?',
                        options: [
                            'MAC is faster, DAC is slower',
                            'MAC is enforced by the OS and cannot be overridden; DAC lets owners set permissions',
                            'MAC uses passwords, DAC uses biometrics',
                            'They are the same thing',
                        ],
                        answer: 1,
                    },
                    {
                        question: 'What defense mechanism randomizes memory layout?',
                        options: ['DEP', 'ASLR', 'Firewall', 'Encryption'],
                        answer: 1,
                        explanation: 'ASLR randomizes stack, heap, and library addresses to prevent exploitation.',
                    },
                    {
                        question: 'What model enforces "No Read Up, No Write Down"?',
                        options: ['Biba', 'Bell-LaPadula', 'RBAC', 'Clark-Wilson'],
                        answer: 1,
                        explanation: 'Bell-LaPadula focuses on confidentiality  -  preventing information flowing to lower security levels.',
                    },
                ]}
            />

            <OsResources topicId="security" />

            <section className="module-section">
                <h2>Interview Corner</h2>
                <OsInterviewQuestion
                    question="Explain buffer overflow attacks and how modern OS defend against them."
                    answer="A buffer overflow occurs when data is written beyond the bounds of a fixed-size buffer, overwriting adjacent memory (typically the return address on the stack). An attacker crafts input that overwrites the return address with the address of injected malicious code (shellcode). Modern defenses: 1) Stack canaries  -  random values next to return addresses, checked before returning. 2) ASLR  -  randomizes memory layout so attacker can't predict addresses. 3) DEP/NX  -  marks data memory as non-executable, so injected code can't run. 4) Safe functions  -  fgets instead of gets, strncpy instead of strcpy. 5) Compiler protections  -  -fstack-protector, -D_FORTIFY_SOURCE."
                />
                <OsInterviewQuestion
                    question="What is the principle of least privilege and why is it important?"
                    answer="The principle of least privilege states that every process, user, and program should operate with the minimum set of permissions necessary to complete its task. Importance: limits damage from bugs (a process can't accidentally delete files it shouldn't access), limits damage from attacks (a compromised process can only affect resources it has access to), reduces the blast radius of security breaches. Examples: running web servers as non-root users, using sudo only when needed, Android's per-app permission model, dropping capabilities in containerized applications."
                />
                <OsInterviewQuestion
                    question="Compare symmetric and asymmetric encryption. When is each used?"
                    answer="Symmetric: Same key for encryption and decryption (AES, ChaCha20). Very fast (~GB/s). Problem: how to share the key securely? Used for: encrypting data at rest (disk encryption), encrypting bulk data in transit (after key exchange). Asymmetric: Public key encrypts, private key decrypts (RSA, ECC). Much slower (~1000× slower). Solves key distribution. Used for: key exchange (negotiate a symmetric key securely), digital signatures (prove authenticity), certificates (HTTPS/TLS). In practice, hybrid approach: asymmetric encryption negotiates a symmetric session key, then symmetric encryption handles the bulk data."
                />
            </section>
        </div>
    );
}
