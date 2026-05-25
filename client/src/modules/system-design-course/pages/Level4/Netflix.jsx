import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function Netflix() {
  const interviewQuestions = [
    {
      question: "How would you design a video streaming system?",
      answer: "Use adaptive streaming with multiple video qualities, CDN for global content delivery, recommendation engine for personalization, and microservices for different functionalities. Implement offline download, multiple device support, and real-time streaming analytics."
    },
    {
      question: "How does a streaming platform handle video encoding and storage?",
      answer: "Store original files, encode into multiple resolutions (1080p, 720p, 480p), create different bitrates for adaptive streaming, use object storage for cost efficiency, and implement CDN caching for popular content."
    },
    {
      question: "How does a streaming service scale to millions of concurrent streams?",
      answer: "Through CDN edge servers, load balancing, adaptive bitrate streaming, efficient compression algorithms, and predictive caching based on viewing patterns. Uses sophisticated traffic management and regional distribution."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Video Streaming System Design</h1>
          <p className="text-sm mt-2 opacity-90">Global video streaming platform at scale</p>
          <p className="text-xs mt-1 opacity-70 italic">
            Educational case study. Concepts are based on publicly known architectures used by streaming platforms.
          </p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          A video streaming platform is like a global movie theater that delivers any movie to any device instantly. When you click play, the system finds the closest server (CDN edge), determines your internet speed, and streams the perfect quality version. If your connection changes, it seamlessly switches to a different quality, ensuring smooth playback without buffering.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          A global video streaming platform serving hundreds of millions of subscribers worldwide. The system must handle massive video encoding, provide adaptive streaming for various network conditions, deliver personalized recommendations, support multiple devices, and ensure high availability during peak viewing hours.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Video Encoding:</strong> Multiple resolutions and bitrates for adaptive streaming</li>
          <li><strong>Content Delivery:</strong> Global CDN network for low latency</li>
          <li><strong>Recommendations:</strong> ML-powered personalized content suggestions</li>
          <li><strong>Multi-device Support:</strong> TVs, phones, tablets, web browsers</li>
          <li><strong>Offline Downloads:</strong> Content caching for offline viewing</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span>{' '}
          <span className="text-yellow-700 dark:text-yellow-300">Large streaming platforms stream hundreds of millions of hours of content daily with 99.95% uptime and sub-second start times.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">System Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`[Client App] --> [API Gateway] --> [Authentication Service]
       |               |                   |
       |               v                   v
       |          [Content Service] --> [Video Library DB]
       |               |
       |               v
       |          [Streaming Service] --> [CDN Edge Servers]
       |               |                   |
       |               v                   v
       |          [Encoding Service] --> [Video Storage]
       |
       v
[Recommendation Engine] <-- [Analytics Service] <-- [User Behavior]

Streaming Flow:
1. User browses and selects content
2. Authentication and authorization
3. Manifest file requested with available qualities
4. Adaptive streaming based on network conditions
5. Content delivered from nearest CDN edge
6. Analytics collected for recommendations`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Implementation</h2>
        <p>
          <strong>Technology Stack:</strong> Streaming platforms commonly use custom CDNs with servers inside ISP networks, microservices architecture, Python/Java for backend services, Node.js for web, and native apps for mobile. NoSQL databases handle user data while specialized systems manage video processing.
        </p>
        <p className="mt-2">
          <strong>Infrastructure:</strong> Edge CDN servers placed inside ISP networks globally. Predictive caching pre-loads popular content. Sophisticated load balancing and traffic management ensures consistent quality.
        </p>
        <p className="mt-2">
          <strong>Performance:</strong> Sub-second video start times, seamless quality switching, and 4K streaming support. Advanced compression algorithms optimize bandwidth usage across different network conditions.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Adaptive Streaming Service
class StreamingService {
  constructor() {
    this.cdnService = new CDNService();
    this.analyticsService = new AnalyticsService();
    this.encodingService = new EncodingService();
  }

  async getStreamManifest(videoId, userId) {
    // Get available encodings
    const encodings = await this.encodingService.getEncodings(videoId);
    
    // Generate manifest for adaptive streaming
    const manifest = {
      videoId,
      qualities: encodings.map(encoding => ({
        resolution: encoding.resolution,
        bitrate: encoding.bitrate,
        codec: encoding.codec,
        url: this.cdnService.getStreamUrl(videoId, encoding.id)
      }))
    };

    // Log analytics
    await this.analyticsService.logStreamStart(userId, videoId);

    return manifest;
  }

  async getOptimalStream(videoId, networkSpeed, deviceType) {
    const encodings = await this.encodingService.getEncodings(videoId);
    
    // Select optimal quality based on network
    let selectedEncoding = this.selectEncoding(encodings, networkSpeed);
    
    // Adjust for device capabilities
    selectedEncoding = this.adjustForDevice(selectedEncoding, deviceType);
    
    return {
      streamUrl: this.cdnService.getStreamUrl(videoId, selectedEncoding.id),
      encoding: selectedEncoding
    };
  }

  selectEncoding(encodings, networkSpeed) {
    // Choose highest quality that fits bandwidth
    return encodings
      .filter(e => e.bitrate <= networkSpeed)
      .sort((a, b) => b.bitrate - a.bitrate)[0] || encodings[0];
  }
}

// Recommendation Engine
class RecommendationEngine {
  async getPersonalizedFeed(userId) {
    const userProfile = await this.getUserProfile(userId);
    const viewingHistory = await this.getViewingHistory(userId);
    const similarUsers = await this.findSimilarUsers(userId);
    
    // ML-based recommendations
    const recommendations = await this.mlService.recommend(
      userProfile,
      viewingHistory,
      similarUsers
    );

    // Add diversity and freshness
    return this.diversifyRecommendations(recommendations, userProfile);
  }
}`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>CDN Optimization:</strong> Edge servers in ISP networks globally</li>
          <li><strong>Predictive Caching:</strong> Pre-load content based on viewing patterns</li>
          <li><strong>Adaptive Bitrate:</strong> Dynamic quality adjustment for network conditions</li>
          <li><strong>Load Balancing:</strong> Distribute streaming requests efficiently</li>
          <li><strong>Compression:</strong> Advanced video encoding for bandwidth efficiency</li>
          <li><strong>Analytics:</strong> Real-time monitoring and optimization</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Quality vs Bandwidth:</strong> Higher video quality provides better experience but uses more bandwidth. Adaptive streaming balances quality based on network conditions.
        </p>
        <p className="mt-2">
          <strong>Storage Cost vs Content Variety:</strong> Storing all content in multiple qualities is expensive but ensures compatibility. Optimize by encoding popular content in more formats.
        </p>
        <p className="mt-2">
          <strong>Latency vs Quality:</strong> Lower latency requires more edge servers and caching. Investing in infrastructure minimizes startup time while maintaining quality.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="netflix" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not implementing proper adaptive streaming</li>
          <li>Ignoring CDN edge server placement strategy</li>
          <li>Not planning for peak viewing hours and traffic spikes</li>
          <li>Poor video encoding and compression strategies</li>
          <li>Not implementing proper content recommendation algorithms</li>
          <li>Ignoring multi-device compatibility requirements</li>
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
