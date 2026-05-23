import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function Scaling() {
  const interviewQuestions = [
    {
      question: "What's the difference between vertical and horizontal scaling?",
      answer: "Vertical scaling increases resources (CPU, memory) of a single server. Horizontal scaling adds more servers to share the load. Vertical has limits and single point of failure, while horizontal offers unlimited scaling and fault tolerance."
    },
    {
      question: "When would you choose vertical vs horizontal scaling?",
      answer: "Choose vertical for simple applications, databases, or when you need strong consistency. Choose horizontal for web servers, microservices, and when you need high availability and fault tolerance."
    },
    {
      question: "What is auto-scaling?",
      answer: "Auto-scaling automatically adjusts the number of servers based on current load. It scales up during high traffic and scales down during low traffic to optimize costs while maintaining performance."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Scaling Strategies</h1>
          <p className="text-sm mt-2 opacity-90">Handling growth through vertical and horizontal scaling</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          Scaling is like expanding a restaurant. Vertical scaling is like making your kitchen bigger with more equipment and staff - one restaurant can serve more people. Horizontal scaling is like opening multiple restaurant branches - each branch serves customers in its area, and if one closes, others continue operating. Both approaches help serve more customers, but they have different costs, complexities, and failure modes.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Scaling is the ability of a system to handle increased load by adding resources. There are two primary scaling strategies: vertical scaling (scaling up) and horizontal scaling (scaling out). Understanding when and how to apply each strategy is crucial for building systems that can grow with user demand.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Vertical Scaling:</strong> Increasing capacity of individual servers</li>
          <li><strong>Horizontal Scaling:</strong> Adding more servers to distribute load</li>
          <li><strong>Load Balancing:</strong> Distributing traffic across multiple servers</li>
          <li><strong>Auto-scaling:</strong> Automatic adjustment based on demand</li>
          <li><strong>Elasticity:</strong> Ability to scale up and down dynamically</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Horizontal scaling provides fault tolerance - if one server fails, others continue serving traffic.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling Architectures</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`Vertical Scaling (Scale Up):
[Single Server] 4 cores, 8GB RAM
       |
       v
[Single Server] 16 cores, 32GB RAM
       |
       v
[Single Server] 64 cores, 128GB RAM

Horizontal Scaling (Scale Out):
[Load Balancer]
    |    |    |
    v    v    v
[Server1] [Server2] [Server3]
    |    |    |
    v    v    v
[Shared Database/Cache]`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Amazon (Horizontal):</strong> Uses thousands of servers globally. During Prime Day, they automatically add more servers to handle the shopping surge, then scale down after the event ends.
        </p>
        <p className="mt-2">
          <strong>Traditional Database (Vertical):</strong> Many companies scale databases vertically by adding more CPU, memory, and faster storage to a single powerful server because databases are hard to distribute horizontally.
        </p>
        <p className="mt-2">
          <strong>Netflix (Hybrid):</strong> Uses horizontal scaling for video streaming servers but vertical scaling for their encoding servers that need maximum CPU power per machine.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Horizontal Scaling with Load Balancer
const express = require('express');
const app = express();

// Stateless application for easy horizontal scaling
app.get('/api/user/:id', async (req, res) => {
  const user = await redis.get(\`user:\${req.params.id}\`) || 
                await db.findById(req.params.id);
  res.json(user);
});

// Auto-scaling configuration (AWS Example)
const autoScalingGroup = {
  minInstances: 2,
  maxInstances: 20,
  targetCPU: 70,
  scaleUpCooldown: 300,
  scaleDownCooldown: 300
};

// Vertical scaling monitoring
const monitorResources = () => {
  const cpuUsage = process.cpuUsage();
  const memoryUsage = process.memoryUsage();
  
  if (memoryUsage.heapUsed > 0.8 * memoryUsage.heapTotal) {
    console.log('Consider vertical scaling - memory high');
  }
};`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling Strategies</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Database Scaling:</strong> Read replicas, sharding, partitioning</li>
          <li><strong>Cache Scaling:</strong> Distributed caches, cache warming</li>
          <li><strong>Application Scaling:</strong> Stateless design, microservices</li>
          <li><strong>Network Scaling:</strong> CDN, edge computing, Anycast</li>
          <li><strong>Storage Scaling:</strong> Distributed file systems, object storage</li>
          <li><strong>Message Queue Scaling:</strong> Partitioned topics, consumer groups</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Vertical vs Horizontal:</strong> Vertical scaling is simpler but has limits and single point of failure. Horizontal scaling is complex but offers unlimited scaling and fault tolerance.
        </p>
        <p className="mt-2">
          <strong>Cost vs Performance:</strong> More servers increase costs but improve performance. Auto-scaling optimizes this balance but adds complexity.
        </p>
        <p className="mt-2">
          <strong>Consistency vs Availability:</strong> Horizontal scaling often requires sacrificing strong consistency for availability across distributed nodes.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="scaling" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Creating stateful applications that can't scale horizontally</li>
          <li>Not planning for scaling from the beginning</li>
          <li>Ignoring database bottlenecks when scaling application servers</li>
          <li>Not implementing proper monitoring for scaling decisions</li>
          <li>Over-scaling and wasting resources during low traffic</li>
          <li>Neglecting to test scaling strategies under real load</li>
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
