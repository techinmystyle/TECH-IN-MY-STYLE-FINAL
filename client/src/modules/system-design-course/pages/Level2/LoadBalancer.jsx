import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';
import SDMermaidDiagram from '../../components/SDMermaidDiagram';

export default function LoadBalancer() {
  const interviewQuestions = [
    {
      question: "What is a load balancer?",
      answer: "A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed. It improves availability, reliability, and scalability by spreading load efficiently."
    },
    {
      question: "What are different load balancing algorithms?",
      answer: "Round Robin (cyclic), Least Connections (to least busy), IP Hash (based on client IP), Weighted Round Robin (server capacity), and Random. Each has different use cases and performance characteristics."
    },
    {
      question: "What's the difference between L4 and L7 load balancing?",
      answer: "L4 (Transport Layer) balances based on IP and port, faster but less intelligent. L7 (Application Layer) can inspect HTTP headers, cookies, and content, enabling advanced routing but with more overhead."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Load Balancer</h1>
          <p className="text-sm mt-2 opacity-90">Distributing traffic for scalability and reliability</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          A load balancer is like a traffic controller at a busy intersection. Instead of all cars going to one road (server), the controller directs them to multiple roads to prevent congestion. If one road is closed (server down), the controller redirects traffic to other open roads, keeping traffic flowing smoothly.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Load balancing is the process of distributing incoming network traffic across multiple backend servers. This ensures high availability and reliability by directing traffic only to healthy servers, preventing any single server from becoming a bottleneck or point of failure.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Traffic Distribution:</strong> Spreads requests across multiple servers</li>
          <li><strong>Health Monitoring:</strong> Checks server health and removes failed servers</li>
          <li><strong>SSL Termination:</strong> Handles encryption/decryption to reduce server load</li>
          <li><strong>Session Persistence:</strong> Maintains user sessions on the same server</li>
          <li><strong>High Availability:</strong> Eliminates single points of failure</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Load balancers are critical for horizontal scaling - without them, you can't effectively distribute traffic across multiple servers.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Load Balancing Architecture</h2>
        <SDMermaidDiagram 
          chart={`
flowchart TD
    A[Users] --> B[Load Balancer]
    B --> C[Health Checks]
    B --> D[Server Pool]
    
    subgraph "Server Pool"
        D --> E[Server 1]
        D --> F[Server 2]
        D --> G[Server 3]
    end
    
    C --> H[Failed Server Detection]
    H --> I[Remove Failed Server]
    
    E -->|Healthy| J[Traffic Distributed]
    F -->|Healthy| J
    G -->|Healthy| J
    
    style A fill:#e8e8e8,stroke:#333,stroke-width:2px
    style B fill:#e8e8e8,stroke:#333,stroke-width:2px
    style C fill:#e8e8e8,stroke:#333,stroke-width:2px
    style D fill:#e8e8e8,stroke:#333,stroke-width:2px
    style E fill:#90EE90,stroke:#333,stroke-width:2px
    style F fill:#90EE90,stroke:#333,stroke-width:2px
    style G fill:#FFB6C1,stroke:#333,stroke-width:2px
    style H fill:#e8e8e8,stroke:#333,stroke-width:2px
    style I fill:#e8e8e8,stroke:#333,stroke-width:2px
    style J fill:#e8e8e8,stroke:#333,stroke-width:2px
          `}
          id="load-balancer-arch"
        />
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Amazon:</strong> Uses multiple layers of load balancers. Global load balancers direct users to the nearest region, regional load balancers distribute traffic within data centers, and application load balancers route requests to specific microservices.
        </p>
        <p className="mt-2">
          <strong>Netflix:</strong> Uses load balancers to distribute streaming requests across thousands of servers. They use intelligent routing based on content availability, server load, and user location to optimize streaming quality.
        </p>
        <p className="mt-2">
          <strong>Google Search:</strong> Routes search queries to the least busy data center with the required index data, ensuring sub-second response times even during peak usage.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Nginx Load Balancer Configuration
upstream backend_servers {
    # Round Robin Algorithm
    server server1.example.com;
    server server2.example.com;
    server server3.example.com;
    
    # Weighted Round Robin
    server server1.example.com weight=3;
    server server2.example.com weight=2;
    server server3.example.com weight=1;
    
    # Health Check
    server server1.example.com max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

// AWS Application Load Balancer
const alb = new elbv2.ApplicationLoadBalancer(this, 'ALB', {
  vpc: vpc,
  internetFacing: true,
  defaultTargetGroup: targetGroup,
  healthCheck: {
    path: '/health',
    interval: Duration.seconds(30),
    timeout: Duration.seconds(5),
  }
});`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Multi-tier Load Balancing:</strong> Global, regional, and application layers</li>
          <li><strong>Auto-scaling Integration:</strong> Automatically add/remove servers based on load</li>
          <li><strong>Health Monitoring:</strong> Active and passive health checks</li>
          <li><strong>Connection Draining:</strong> Gracefully handle server shutdowns</li>
          <li><strong>SSL Offloading:</strong> Handle TLS termination at load balancer</li>
          <li><strong>Caching:</strong> Cache static content at load balancer level</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>L4 vs L7:</strong> L4 load balancers are faster but less intelligent. L7 load balancers provide advanced routing capabilities but add latency and complexity.
        </p>
        <p className="mt-2">
          <strong>Hardware vs Software:</strong> Hardware load balancers offer better performance but are expensive and inflexible. Software load balancers are flexible and cost-effective but may have lower performance.
        </p>
        <p className="mt-2">
          <strong>Active-Passive vs Active-Active:</strong> Active-passive is simpler but wastes resources. Active-active provides better utilization but adds complexity.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="load-balancer" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not configuring proper health checks</li>
          <li>Ignoring session persistence requirements</li>
          <li>Single load balancer creating new bottleneck</li>
          <li>Poor monitoring and alerting setup</li>
          <li>Not planning for load balancer failures</li>
          <li>Inadequate capacity planning for peak loads</li>
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
