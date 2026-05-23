import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function CDN() {
  const interviewQuestions = [
    {
      question: "What is a CDN and how does it work?",
      answer: "A Content Delivery Network (CDN) is a distributed network of servers that delivers content based on user location. When you request content, the CDN routes you to the nearest edge server, reducing latency and improving performance through geographic distribution."
    },
    {
      question: "What are the benefits of using a CDN?",
      answer: "Reduced latency through geographic distribution, decreased bandwidth costs, improved reliability and availability, better security with DDoS protection, and enhanced user experience with faster content delivery."
    },
    {
      question: "How does CDN caching work?",
      answer: "CDNs cache content at edge locations based on cache headers (Cache-Control, ETag). When content is requested, the CDN serves from cache if valid, otherwise fetches from origin and caches the response. Cache invalidation can be time-based or manual."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Content Delivery Network (CDN)</h1>
          <p className="text-sm mt-2 opacity-90">Distributing content globally for optimal performance</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          A CDN is like having warehouses (edge servers) in different cities instead of one central factory. When customers order products (request content), they get them from the nearest warehouse instead of waiting for shipment from the main factory. This dramatically reduces delivery time and shipping costs while handling more customers efficiently.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          A Content Delivery Network (CDN) is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing content spatially relative to end-users. CDNs serve a large portion of internet content today, including web objects, applications, streaming media, and downloadable files.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Edge Servers:</strong> Distributed servers close to users</li>
          <li><strong>Origin Server:</strong> Main server where content is stored</li>
          <li><strong>Caching:</strong> Storing content at edge locations</li>
          <li><strong>Geo-routing:</strong> Directing users to nearest edge server</li>
          <li><strong>DDoS Protection:</strong> Distributed traffic absorption</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> CDNs can reduce latency by 50-80% and handle traffic spikes that would overwhelm origin servers.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">CDN Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`[User in US] --> [US Edge Server] --> [Content Cached]
[User in EU] --> [EU Edge Server] --> [Content Cached]
[User in AS] --> [AS Edge Server] --> [Content Cached]
       |                |                |
       v                v                v
[DNS Resolution] [DNS Resolution] [DNS Resolution]
       |                |                |
       v                v                v
[Origin Server] <-- Cache Miss -- [All Edge Servers]
       |
       v
[Content Distribution Network]`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Netflix:</strong> Uses its own CDN (Open Connect) with servers inside ISP networks. When you stream a movie, it comes from a server within your ISP's network, not from Netflix's central servers, enabling smooth 4K streaming globally.
        </p>
        <p className="mt-2">
          <strong>YouTube:</strong> Delivers billions of videos daily through CDN. Popular videos are pre-cached at edge locations, while new content is cached on first access and served to subsequent viewers from the edge.
        </p>
        <p className="mt-2">
          <strong>Amazon CloudFront:</strong> Provides CDN services for AWS customers. When you shop on Amazon, product images and static content come from edge servers near you, while dynamic data comes from application servers.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// HTTP Headers for CDN Caching
app.use(express.static('public', {
  maxAge: '1y', // Cache for 1 year
  etag: true,   // Enable ETag
  lastModified: true,
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  }
}));

// CDN Configuration (CloudFront example)
const cloudFront = new CloudFront({
  distributionId: 'E1234567890ABC',
  origins: [{
    domainName: 'example.com',
    originPath: '/api',
    customHeaders: {
      'X-Custom-Header': 'value'
    }
  }],
  defaultCacheBehavior: {
    targetOriginId: 'example.com',
    viewerProtocolPolicy: 'redirect-to-https',
    minTTL: 0,
    maxTTL: 31536000,
    defaultTTL: 86400
  }
});

// Cache Invalidation
const invalidateCache = async (paths) => {
  await cloudFront.createInvalidation({
    DistributionId: 'E1234567890ABC',
    InvalidationBatch: {
      Paths: {
        Quantity: paths.length,
        Items: paths
      },
      CallerReference: Date.now().toString()
    }
  });
};`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Cache Optimization:</strong> Proper cache headers, versioning, purging strategies</li>
          <li><strong>Compression:</strong> Gzip/Brotli compression to reduce bandwidth</li>
          <li><strong>Image Optimization:</strong> WebP format, responsive images, lazy loading</li>
          <li><strong>HTTP/2 and HTTP/3:</strong> Multiplexing and improved performance</li>
          <li><strong>Edge Computing:</strong> Run code at edge locations for dynamic content</li>
          <li><strong>Security Features:</strong> WAF, DDoS protection, SSL termination</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Cost vs Performance:</strong> CDN services add cost but significantly improve performance. The ROI depends on traffic volume and geographic distribution of users.
        </p>
        <p className="mt-2">
          <strong>Control vs Simplicity:</strong> Managed CDNs are easy to use but offer less control. Self-hosted CDNs provide more control but require more expertise and maintenance.
        </p>
        <p className="mt-2">
          <strong>Cache Freshness vs Performance:</strong> Longer cache times improve performance but may serve stale content. Short cache times ensure freshness but reduce CDN benefits.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="cdn" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not setting proper cache headers for static content</li>
          <li>Forgetting to invalidate cache when content updates</li>
          <li>Using CDN for dynamic content that shouldn't be cached</li>
          <li>Not monitoring CDN performance and hit rates</li>
          <li>Ignoring CDN costs and optimizing cache usage</li>
          <li>Not planning CDN failover and origin protection</li>
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
