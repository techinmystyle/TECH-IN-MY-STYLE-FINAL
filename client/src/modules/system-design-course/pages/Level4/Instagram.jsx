import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function Instagram() {
  const interviewQuestions = [
    {
      question: "How would you design Instagram's feed system?",
      answer: "Use a feed generation service that pre-computes user feeds based on following relationships, engagement signals, and ranking algorithms. Store feeds in Redis for fast access, update asynchronously, and use machine learning for personalized ranking."
    },
    {
      question: "How does Instagram handle media storage and delivery?",
      answer: "Store original media in object storage (S3), generate multiple resolutions, use CDN for delivery, implement lazy loading, and cache frequently accessed content. Use background processing for image/video optimization and compression."
    },
    {
      question: "How does Instagram scale to billions of users?",
      answer: "Through microservices architecture, database sharding by user ID, caching at multiple levels, CDN for content delivery, and geographic distribution. Uses graph databases for social connections and time-series databases for analytics."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Instagram System Design</h1>
          <p className="text-sm mt-2 opacity-90">Social media platform for photos and stories</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          Instagram is like a global art gallery where everyone can display their photos. When you post a photo, it's instantly displayed in your friends' personal galleries (feeds). The system needs to organize billions of photos, show the most interesting ones first, handle likes and comments instantly, and ensure photos load quickly even on slow connections.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Instagram is a photo and video sharing social network with over 1 billion monthly active users. The system must handle massive uploads, generate personalized feeds, process stories that disappear after 24 hours, support real-time interactions, and deliver media efficiently globally.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Media Upload:</strong> Handle billions of photo/video uploads daily</li>
          <li><strong>Feed Generation:</strong> Personalized content ranking and delivery</li>
          <li><strong>Stories:</strong> Ephemeral content with 24-hour expiration</li>
          <li><strong>Social Graph:</strong> Following relationships and friend suggestions</li>
          <li><strong>Real-time Interactions:</strong> Likes, comments, notifications</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Instagram processes over 100 million photos and videos daily with 500+ million daily active users.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">System Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`[Client App] --> [API Gateway] --> [Upload Service] --> [Media Storage]
       |               |                   |
       |               v                   v
       |          [Feed Service] --> [Feed Generator]
       |               |                   |
       |               v                   v
       |          [User Service] --> [Social Graph DB]
       |               |
       |               v
       |          [Notification Service]
       |
       v
[CDN] <-- [Media Processing] <-- [Background Jobs]

Data Flow:
1. User uploads photo/video
2. Media processing generates multiple resolutions
3. Feed generator updates followers' feeds
4. Notifications sent to followers
5. Media delivered via CDN
6. Engagement tracked for ranking algorithms`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Implementation</h2>
        <p>
          <strong>Technology Stack:</strong> Instagram uses Python/Django for web services, React Native for mobile apps, Cassandra for time-series data, PostgreSQL for core data, Redis for caching, and Graph Search for social graph queries.
        </p>
        <p className="mt-2">
          <strong>Infrastructure:</strong> Runs on Facebook's infrastructure with custom data centers. Uses TAO (The Associations and Objects) for social graph storage, and Scribe for log processing. Implements sophisticated caching strategies.
        </p>
        <p className="mt-2">
          <strong>Performance:</strong> Sub-second feed loading, instant photo uploads, and real-time notifications. Uses machine learning for feed ranking and content recommendation.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Feed Generation Service
class FeedGenerator {
  constructor() {
    this.userGraph = new SocialGraphService();
    this.contentRanker = new MLRankingService();
    this.feedCache = new RedisService();
  }

  async generateFeed(userId, pagination = null) {
    const cacheKey = 'feed:' + userId;
    
    // Try cache first
    const cachedFeed = await this.feedCache.get(cacheKey);
    if (cachedFeed && !pagination) {
      return JSON.parse(cachedFeed);
    }

    // Get following list
    const following = await this.userGraph.getFollowing(userId);
    
    // Get recent content from following
    const recentContent = await this.getRecentContent(following, pagination);
    
    // Rank content using ML
    const rankedContent = await this.contentRanker.rank(
      recentContent, 
      userId,
      { engagement_history: true, user_preferences: true }
    );

    // Cache for 5 minutes
    await this.feedCache.setex(cacheKey, 300, JSON.stringify(rankedContent));
    
    return rankedContent;
  }

  async invalidateFeed(userId) {
    const cacheKey = 'feed:' + userId;
    await this.feedCache.del(cacheKey);
    
    // Pre-generate new feed asynchronously
    setTimeout(() => this.generateFeed(userId), 0);
  }
}

// Media Upload Handler
class MediaUploadHandler {
  async handleUpload(userId, file, metadata) {
    // Store original in S3
    const originalKey = 'originals/' + userId + '/' + Date.now();
    await this.s3.upload(originalKey, file);

    // Generate thumbnails and different resolutions
    const processedVersions = await this.processMedia(originalKey);

    // Store metadata in database
    const mediaRecord = await this.mediaDB.create({
      userId,
      originalKey,
      versions: processedVersions,
      metadata,
      timestamp: new Date()
    });

    // Update followers' feeds
    await this.updateFollowersFeeds(userId, mediaRecord.id);

    // Send notifications
    await this.notificationService.notifyFollowers(userId, mediaRecord.id);

    return mediaRecord;
  }
}`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Feed Pre-computation:</strong> Generate feeds asynchronously for faster loading</li>
          <li><strong>Database Sharding:</strong> Partition by user ID for social graph and content</li>
          <li><strong>Multi-level Caching:</strong> Browser, CDN, application, and database caching</li>
          <li><strong>Background Processing:</strong> Async media processing and feed updates</li>
          <li><strong>CDN Optimization:</strong> Global edge caching for media delivery</li>
          <li><strong>Load Testing:</strong> Prepare for viral content and traffic spikes</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Feed Freshness vs Performance:</strong> Real-time feeds provide latest content but require more computation. Pre-computed feeds load faster but may be slightly stale.
        </p>
        <p className="mt-2">
          <strong>Storage Cost vs Quality:</strong> Higher resolution media provides better user experience but increases storage and bandwidth costs. Multiple resolutions balance quality and performance.
        </p>
        <p className="mt-2">
          <strong>Privacy vs Features:</strong> Advanced features like location tagging enhance user experience but raise privacy concerns. Instagram provides granular privacy controls.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="instagram" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not implementing proper feed ranking algorithms</li>
          <li>Ignoring media compression and optimization</li>
          <li>Not planning for viral content and traffic spikes</li>
          <li>Poor handling of stories expiration and cleanup</li>
          <li>Not implementing proper notification throttling</li>
          <li>Ignoring content moderation and safety features</li>
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
