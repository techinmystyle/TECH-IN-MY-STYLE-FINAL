import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function Caching() {
  const interviewQuestions = [
    {
      question: "What is caching and why is it important?",
      answer: "Caching stores frequently accessed data in fast storage to reduce latency and load on backend systems. It improves performance, reduces database load, and enhances user experience by serving data quickly from memory instead of slower storage."
    },
    {
      question: "What are different caching strategies?",
      answer: "Cache-aside (application manages cache), read-through (cache manages reads), write-through (writes to both cache and database), write-behind (writes to cache first, then database), and refresh-ahead (proactively updates cache)."
    },
    {
      question: "How do you handle cache invalidation?",
      answer: "Cache invalidation can be TTL-based (time expiration), event-driven (updates trigger invalidation), manual invalidation, or write-through patterns. The challenge is ensuring cache doesn't serve stale data while maintaining performance."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Caching</h1>
          <p className="text-sm mt-2 opacity-90">Accelerating data access through intelligent storage</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          Caching is like keeping frequently used items on your desk instead of going to the filing cabinet every time. When you need a document, you check your desk first (cache hit). If it's there, you use it immediately. If not (cache miss), you go to the filing cabinet (database), get the document, and place a copy on your desk for future use.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Caching is the process of storing copies of frequently accessed data in fast, easily accessible storage locations. By serving data from cache instead of slower primary storage, caching dramatically reduces latency, decreases database load, and improves overall system performance and scalability.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Cache Hit:</strong> Data found in cache, served quickly</li>
          <li><strong>Cache Miss:</strong> Data not in cache, fetched from source</li>
          <li><strong>TTL:</strong> Time To Live - data expiration time</li>
          <li><strong>Eviction Policy:</strong> How to remove old data when cache is full</li>
          <li><strong>Cache Warming:</strong> Pre-populating cache with expected data</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> The two hardest things in computer science are cache invalidation and naming things - cache invalidation is notoriously difficult.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Caching Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`[Client Request]
       |
       v
[Browser Cache] --miss--> [CDN Cache] --miss--> [Application Cache]
       |                     |                     |
       v                     v                     v
[TTL: 1 hour]        [TTL: 24 hours]        [TTL: 5 minutes]
       |                     |                     |
       v                     v                     v
[Response] <--hit-- [Response] <--hit-- [Response]
       |                     |                     |
       v                     v                     v
[Database] <---write--- [Cache Update] <---write--- [Cache Update]`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Reddit:</strong> Uses multi-level caching. Browser cache for static assets, CDN for images/videos, Redis for hot posts and comments, and application-level cache for user sessions. This combination handles millions of requests per second.
        </p>
        <p className="mt-2">
          <strong>Twitter:</strong> Caches user timelines, tweets, and follower relationships. When you view your timeline, most data comes from Redis cache, not the database, enabling sub-second load times even with billions of tweets.
        </p>
        <p className="mt-2">
          <strong>Amazon:</strong> Caches product information, prices, and recommendations. During Prime Day, cache hit rates exceed 95%, preventing database overload despite massive traffic spikes.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Cache-Aside Pattern
const getUser = async (userId) => {
  // Try cache first
  let user = await redis.get(\`user:\${userId}\`);
  
  if (user) {
    return JSON.parse(user); // Cache hit
  }
  
  // Cache miss - fetch from database
  user = await database.findById(userId);
  
  // Store in cache with TTL
  await redis.setex(\`user:\${userId}\`, 3600, JSON.stringify(user));
  
  return user;
};

// Write-Through Pattern
const updateUser = async (userId, data) => {
  // Update database first
  await database.update(userId, data);
  
  // Update cache
  await redis.setex(\`user:\${userId}\`, 3600, JSON.stringify(data));
};

// Cache Invalidation
const invalidateUserCache = async (userId) => {
  await redis.del(\`user:\${userId}\`);
  await redis.del(\`user:\${userId}:posts\`);
  await redis.del(\`user:\${userId}:followers\`);
};`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Multi-level Caching:</strong> Browser, CDN, application, database levels</li>
          <li><strong>Distributed Caching:</strong> Redis Cluster, Memcached clusters</li>
          <li><strong>Cache Partitioning:</strong> Distribute cache data across multiple nodes</li>
          <li><strong>Cache Warming:</strong> Pre-load frequently accessed data</li>
          <li><strong>Smart TTL:</strong> Dynamic expiration based on access patterns</li>
          <li><strong>Cache Compression:</strong> Store compressed data to save memory</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Cache Size vs Hit Rate:</strong> Larger caches have higher hit rates but cost more. Finding the optimal size requires monitoring access patterns and cost-benefit analysis.
        </p>
        <p className="mt-2">
          <strong>Consistency vs Performance:</strong> Strong consistency requires immediate cache invalidation but reduces performance. Eventually consistent caches perform better but may serve stale data.
        </p>
        <p className="mt-2">
          <strong>Complexity vs Benefit:</strong> Simple caching is easy to implement but limited. Complex multi-level caching provides better performance but adds operational complexity.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="caching" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cache stampede - multiple requests miss cache simultaneously</li>
          <li>Poor cache key design leading to conflicts or misses</li>
          <li>Not setting appropriate TTL values</li>
          <li>Ignoring cache memory limits and eviction policies</li>
          <li>Not monitoring cache hit rates and performance</li>
          <li>Forgetting to invalidate cache when data changes</li>
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
