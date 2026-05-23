import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function RateLimiting() {
  const interviewQuestions = [
    {
      question: "What is rate limiting and why is it important?",
      answer: "Rate limiting controls the number of requests a client can make in a time period. It protects servers from overload, prevents abuse, ensures fair resource distribution, and helps manage costs by controlling API usage."
    },
    {
      question: "What are different rate limiting algorithms?",
      answer: "Token Bucket (burst capability), Leaky Bucket (smooth output), Fixed Window Counter (simple but has edge issues), Sliding Window Log (accurate but memory intensive), and Sliding Window Counter (balanced approach)."
    },{
      question: "How do you implement distributed rate limiting?",
      answer: "Use Redis with atomic operations for distributed systems, implement client-side rate limiting for efficiency, or use centralized rate limiting services. Each approach has different trade-offs in accuracy, performance, and complexity."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Rate Limiting</h1>
          <p className="text-sm mt-2 opacity-90">Protecting services from overload and abuse</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          Rate limiting is like a bouncer at a club controlling entry. Instead of letting everyone rush in at once (overwhelming the club), the bouncer allows a steady flow of people (requests). If someone tries to enter too frequently (exceeds limits), they're asked to wait. This ensures the club doesn't get overcrowded and everyone has a good experience.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Rate limiting is a technique to control the rate of incoming or outgoing traffic to prevent service overload, abuse, and ensure fair resource allocation. It's essential for protecting APIs, managing costs, maintaining service quality, and preventing malicious attacks like DDoS. Rate limiting can be implemented at various levels - from network infrastructure to application logic.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Request Control:</strong> Limit requests per time window</li>
          <li><strong>Fair Usage:</strong> Ensure equitable resource distribution</li>
          <li><strong>Protection:</strong> Prevent abuse and DoS attacks</li>
          <li><strong>Cost Management:</strong> Control API usage and billing</li>
          <li><strong>Performance:</strong> Maintain service quality under load</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Rate limiting should be implemented at multiple levels - network, application, and business logic - for comprehensive protection.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Rate Limiting Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`[Client Request] --> [Rate Limiter] --> [Application]
       |                   |
       v                   v
[IP/User ID] --> [Redis Store] --> [Check Limit]
       |                   |
       v                   v
[Request Count] --> [Time Window] --> [Allow/Deny]
       |                   |
       v                   v
[Response] <-- [Headers] <-- [Rate Limit Info]

Rate Limiting Strategies:
- Global: All requests share same limit
- Per User: Individual limits per user
- Per IP: Limits based on client IP
- Per Endpoint: Different limits per API endpoint
- Tiered: Different limits for different user tiers`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Twitter API:</strong> Implements tiered rate limiting - free users get 100 requests/hour, premium users get 1000 requests/hour. Different endpoints have different limits (search vs posting). This prevents abuse while allowing legitimate use.
        </p>
        <p className="mt-2">
          <strong>GitHub API:</strong> Uses rate limiting to ensure fair usage. Unauthenticated requests: 60/hour, authenticated: 5000/hour. Rate limit headers inform clients about remaining requests and reset time.
        </p>
        <p className="mt-2">
          <strong>Cloudflare:</strong> Provides DDoS protection through sophisticated rate limiting at the edge. They analyze traffic patterns and automatically adjust limits to block attacks while allowing legitimate traffic.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Token Bucket Algorithm
class TokenBucket {
  constructor(capacity, refillRate) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRate;
    this.lastRefill = Date.now();
  }

  consume(tokens = 1) {
    this.refill();
    
    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return true;
    }
    return false;
  }

  refill() {
    const now = Date.now();
    const elapsed = (now - this.lastRefill) / 1000;
    const tokensToAdd = elapsed * this.refillRate;
    
    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefill = now;
  }
}

// Redis-based Rate Limiting
const rateLimit = async (key, limit, window) => {
  const redis = require('redis').createClient();
  
  const current = await redis.incr(key);
  if (current === 1) {
    await redis.expire(key, window);
  }
  
  const ttl = await redis.ttl(key);
  
  return {
    allowed: current <= limit,
    remaining: Math.max(0, limit - current),
    resetTime: Date.now() + (ttl * 1000)
  };
};

// Express.js Rate Limiting Middleware
const rateLimitMiddleware = async (req, res, next) => {
  const key = \`rate_limit:\${req.ip}:\${req.path}\`;
  const result = await rateLimit(key, 100, 3600); // 100 requests per hour
  
  res.set({
    'X-RateLimit-Limit': 100,
    'X-RateLimit-Remaining': result.remaining,
    'X-RateLimit-Reset': result.resetTime
  });
  
  if (!result.allowed) {
    return res.status(429).json({ error: 'Too many requests' });
  }
  
  next();
};`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Distributed Rate Limiting:</strong> Redis cluster for horizontal scaling</li>
          <li><strong>Client-Side Limiting:</strong> Reduce server load with client-side throttling</li>
          <li><strong>Edge Computing:</strong> Implement at CDN/edge locations</li>
          <li><strong>Adaptive Limiting:</strong> Adjust limits based on system load</li>
          <li><strong>Sliding Windows:</strong> More accurate than fixed windows</li>
          <li><strong>Hierarchical Limiting:</strong> Multiple limits at different levels</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Accuracy vs Performance:</strong> Precise rate limiting requires more computation and storage. Simpler algorithms perform better but may be less accurate at edge cases.
        </p>
        <p className="mt-2">
          <strong>Centralized vs Distributed:</strong> Centralized limiting is simpler but creates bottlenecks. Distributed limiting scales better but requires coordination and may have consistency issues.
        </p>
        <p className="mt-2">
          <strong>Strict vs Lenient:</strong> Strict limits protect better but may block legitimate users. Lenient limits are user-friendly but provide less protection against abuse.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="rate-limiting" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not communicating rate limits to clients</li>
          <li>Using fixed windows causing burst issues at boundaries</li>
          <li>Ignoring rate limiting in distributed systems</li>
          <li>Not implementing different limits for different user types</li>
          <li>Forgetting to rate limit expensive operations</li>
          <li>Not monitoring rate limiting effectiveness</li>
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
