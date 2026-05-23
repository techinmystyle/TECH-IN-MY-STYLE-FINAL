import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function LatencyVsThroughput() {
  const interviewQuestions = [
    {
      question: "What's the difference between latency and throughput?",
      answer: "Latency is the time taken to complete a single operation (delay), while throughput is the number of operations completed per unit time (rate). Low latency means fast response, high throughput means many responses per second."
    },
    {
      question: "How do you measure latency and throughput?",
      answer: "Latency is measured in time units (ms, seconds) using response time metrics. Throughput is measured in operations per second (RPS, QPS, TPS) by counting successful operations over time."
    },
    {
      question: "Can you optimize both latency and throughput simultaneously?",
      answer: "Often there's a trade-off. Optimizing for latency (e.g., adding caching) might reduce throughput due to memory overhead. Optimizing for throughput (batching) might increase latency for individual requests."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Latency vs Throughput</h1>
          <p className="text-sm mt-2 opacity-90">Understanding the two fundamental performance metrics</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          Think of a coffee shop: Latency is how long one customer waits for their coffee (response time), while throughput is how many customers the shop serves per hour (capacity). A fast barista reduces latency, but adding more baristas increases throughput. Sometimes improving one affects the other - batching orders increases throughput but individual customers wait longer.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Latency and throughput are critical performance metrics that measure different aspects of system performance. Understanding their relationship and trade-offs is essential for designing efficient systems that meet user expectations and business requirements.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Latency:</strong> Time delay between request and response (milliseconds)</li>
          <li><strong>Throughput:</strong> Number of requests processed per time unit (RPS)</li>
          <li><strong>Bandwidth:</strong> Maximum data transfer rate (bits per second)</li>
          <li><strong>Response Time:</strong> Total time including network + processing</li>
          <li><strong>Queue Time:</strong> Time spent waiting in processing queues</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Little's Law: L = λ×W (Average number in system = Arrival rate × Average time in system)</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Performance Metrics</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`Request Flow:
Client --(network)--> Load Balancer --(processing)--> Server --(query)--> Database
 |         |                |                |              |
Latency    Network          Processing        Query         Storage
Time       Latency           Time             Time          Time
 |         |                |                |              |
 v         v                v                v              v
Total Response Time = Network + Processing + Query + Storage

Throughput = 1 / (Average Response Time + Queue Time)}`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Google Search:</strong> Focuses on low latency (under 200ms) because users expect instant results. Even a 100ms delay can significantly impact user satisfaction and search volume.
        </p>
        <p className="mt-2">
          <strong>Netflix Streaming:</strong> Optimizes for throughput (serving millions of concurrent streams) while maintaining acceptable latency. Uses CDN and adaptive streaming to balance both metrics.
        </p>
        <p className="mt-2">
          <strong>Payment Processing:</strong> Low latency is critical for user experience, but high throughput is needed for peak shopping seasons like Black Friday.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Measuring Latency
const startTime = performance.now();
const response = await fetch('/api/data');
const endTime = performance.now();
const latency = endTime - startTime;

// Measuring Throughput
let requestCount = 0;
const startTime = Date.now();
setInterval(() => {
  const throughput = requestCount / ((Date.now() - startTime) / 1000);
  console.log(\`Throughput: \${throughput} RPS\`);
  requestCount = 0;
}, 1000);

// Optimization techniques
const cache = new Map(); // Reduce latency
const workerPool = []; // Increase throughput
const batchSize = 100; // Balance both metrics`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Reduce Latency:</strong> Caching, CDN, database indexing, connection pooling</li>
          <li><strong>Increase Throughput:</strong> Horizontal scaling, load balancing, async processing</li>
          <li><strong>Network Optimization:</strong> Compression, HTTP/2, keep-alive connections</li>
          <li><strong>Database Optimization:</strong> Read replicas, sharding, query optimization</li>
          <li><strong>Application Optimization:</strong> Code profiling, algorithm optimization</li>
          <li><strong>Infrastructure:</strong> Faster hardware, SSD storage, more memory</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Batching vs Individual Processing:</strong> Batching increases throughput by processing multiple items together but increases latency for individual items as they wait for the batch to fill.
        </p>
        <p className="mt-2">
          <strong>Caching vs Consistency:</strong> Caching reduces latency and increases throughput but may serve stale data, reducing consistency.
        </p>
        <p className="mt-2">
          <strong>Compression vs CPU:</strong> Data compression reduces network latency but increases CPU usage and processing time.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="latency-vs-throughput" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Focusing only on one metric and ignoring the other</li>
          <li>Not measuring actual performance before optimization</li>
          <li>Ignoring the impact of network latency in distributed systems</li>
          <li>Over-optimizing for low traffic scenarios</li>
          <li>Neglecting queue management and backpressure</li>
          <li>Not considering tail latency (99th percentile)</li>
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
