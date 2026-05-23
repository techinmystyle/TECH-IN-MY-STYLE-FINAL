import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function URLShortener() {
  const interviewQuestions = [
    {
      question: "How would you design a URL shortener like bit.ly?",
      answer: "Use base62 encoding for short URLs, distributed key generation to avoid collisions, database for URL mapping, CDN for redirect performance, and analytics for tracking. Implement caching for popular URLs and handle concurrent requests."
    },
    {
      question: "How do you generate unique short codes?",
      answer: "Use distributed unique ID generation (Snowflake), convert to base62 for URL-friendly characters, implement collision detection and retry, and pre-generate pools of short codes for performance."
    },
    {
      question: "How does the redirect process work?",
      answer: "User visits short URL, service looks up original URL in cache/database, performs 301 permanent redirect, logs analytics, and updates click counts. Use CDN caching for popular URLs to reduce database load."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">URL Shortener System Design</h1>
          <p className="text-sm mt-2 opacity-90">Service for creating and managing short URLs</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          A URL shortener is like a personalized phone directory for websites. Instead of remembering long phone numbers (URLs), you get short memorable ones. When someone dials the short number, the directory instantly redirects to the full number. The system must ensure no two people get the same short number and handle millions of lookups quickly.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          A URL shortener service converts long URLs into short, memorable links that redirect to the original destination. The system must generate unique short codes, handle massive redirect traffic, provide analytics on click tracking, and ensure high availability. Key challenges include avoiding collisions, handling traffic spikes, and maintaining fast redirect times.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Short Code Generation:</strong> Unique, URL-friendly character encoding</li>
          <li><strong>URL Mapping:</strong> Database storage for short-to-long URL mapping</li>
          <li><strong>Redirect Service:</strong> Fast 301 redirects to original URLs</li>
          <li><strong>Analytics:</strong> Click tracking and usage statistics</li>
          <li><strong>Caching:</strong> Popular URLs cached for performance</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Bit.ly processes over 600 million clicks monthly with average redirect time under 50ms.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">System Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`[Client] --> [API Gateway] --> [Shortening Service] --> [ID Generator]
       |               |                   |                  |
       |               v                   v                  v
       |          [URL Database] <-- [Short Code Service] <-- [Distributed Lock]
       |               |                   |
       |               v                   v
       |          [Analytics Service] --> [Click Counter]
       |
       v
[Redirect Service] --> [Cache Layer] --> [Original URL]

URL Creation Flow:
1. Client submits long URL
2. ID generator creates unique ID
3. Convert to base62 short code
4. Store mapping in database
5. Return short URL to client

Redirect Flow:
1. User visits short URL
2. Check cache first
3. Database lookup if cache miss
4. 301 redirect to original URL
5. Log analytics and update counts`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Implementation</h2>
        <p>
          <strong>Technology Stack:</strong> Bit.ly uses Redis for caching, MongoDB for URL storage, Node.js for API services, and custom analytics pipelines. Implements distributed ID generation and base62 encoding.
        </p>
        <p className="mt-2">
          <strong>Scale:</strong> Handles billions of URLs created and hundreds of millions of clicks daily. Uses database sharding by short code prefix and CDN for redirect performance.
        </p>
        <p className="mt-2">
          <strong>Performance:</strong> Sub-50ms redirect times, 99.9% uptime, and real-time analytics. Implements sophisticated caching strategies for popular URLs.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// URL Shortening Service
class URLShortener {
  constructor() {
    this.idGenerator = new DistributedIDGenerator();
    this.urlDatabase = new URLDatabase();
    this.cache = new RedisService();
    this.analyticsService = new AnalyticsService();
  }

  async createShortURL(longURL, customAlias = null) {
    // Validate URL
    if (!this.isValidURL(longURL)) {
      throw new Error('Invalid URL');
    }

    let shortCode;
    
    if (customAlias) {
      // Check if custom alias is available
      const exists = await this.urlDatabase.findByShortCode(customAlias);
      if (exists) {
        throw new Error('Custom alias already taken');
      }
      shortCode = customAlias;
    } else {
      // Generate unique short code
      const id = await this.idGenerator.nextId();
      shortCode = this.toBase62(id);
    }

    // Store mapping
    await this.urlDatabase.create({
      shortCode,
      longURL,
      createdAt: new Date(),
      clickCount: 0
    });

    return 'https://short.ly/' + shortCode;
  }

  async getOriginalURL(shortCode) {
    // Try cache first
    const cached = await this.cache.get('url:' + shortCode);
    if (cached) {
      await this.analyticsService.recordClick(shortCode);
      return cached;
    }

    // Database lookup
    const urlRecord = await this.urlDatabase.findByShortCode(shortCode);
    if (!urlRecord) {
      throw new Error('URL not found');
    }

    // Cache for future requests
    await this.cache.setex('url:' + shortCode, 3600, urlRecord.longURL);
    
    // Record analytics
    await this.analyticsService.recordClick(shortCode);
    
    return urlRecord.longURL;
  }

  toBase62(num) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    
    while (num > 0) {
      result = chars[num % 62] + result;
      num = Math.floor(num / 62);
    }
    
    return result || '0';
  }
}

// Redirect Handler (Express.js)
app.get('/:shortCode', async (req, res) => {
  try {
    const originalURL = await urlShortener.getOriginalURL(req.params.shortCode);
    res.redirect(301, originalURL);
  } catch (error) {
    res.status(404).json({ error: 'URL not found' });
  }
});`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Database Sharding:</strong> Partition by short code prefix</li>
          <li><strong>Caching Strategy:</strong> Redis for popular URLs with TTL</li>
          <li><strong>CDN Redirects:</strong> Edge caching for frequently accessed URLs</li>
          <li><strong>Distributed ID Generation:</strong> Snowflake-like unique IDs</li>
          <li><strong>Analytics Pipeline:</strong> Async processing for click tracking</li>
          <li><strong>Load Balancing:</strong> Distribute redirect requests efficiently</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Short Code Length vs Capacity:</strong> Shorter codes are more user-friendly but limit total combinations. 6-character base62 provides 56+ billion combinations.
        </p>
        <p className="mt-2">
          <strong>Custom Aliases vs Uniqueness:</strong> Custom aliases improve branding but reduce available codes and increase collision risk. Most services charge for custom aliases.
        </p>
        <p className="mt-2">
          <strong>Analytics vs Privacy:</strong> Detailed analytics provide insights but raise privacy concerns. Services must balance data collection with user privacy.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="url-shortener" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not implementing proper collision detection</li>
          <li>Using sequential IDs that are predictable</li>
          <li>Not caching popular URLs causing database overload</li>
          <li>Ignoring analytics and click tracking requirements</li>
          <li>Not planning for URL expiration and cleanup</li>
          <li>Poor choice of character encoding scheme</li>
        </ul>
      </SDCard>

      {/* INTERVIEW */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Interview Questions</h2>
        <SDAccordion items={interviewQuestions} />
      </SDCard>
    </div>
  );
}
