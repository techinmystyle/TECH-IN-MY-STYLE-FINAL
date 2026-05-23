import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function Microservices() {
  const interviewQuestions = [
    {
      question: "What are microservices and when should you use them?",
      answer: "Microservices are small, independent services that communicate via APIs. Use them for complex applications requiring independent scaling, diverse technology stacks, or team autonomy. Start with monolith and split when needed."
    },
    {
      question: "How do microservices communicate with each other?",
      answer: "Through synchronous APIs (REST/GraphQL) for immediate responses, or asynchronous messaging (queues/events) for decoupled communication. Choice depends on requirements for consistency, latency, and resilience."
    },
    {
      question: "What are the challenges of microservices?",
      answer: "Increased complexity in deployment, monitoring, and debugging; network latency; distributed data management; service discovery; and operational overhead. Requires DevOps maturity and proper tooling."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Microservices Architecture</h1>
          <p className="text-sm mt-2 opacity-90">Breaking down monoliths into independent, scalable services</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          Microservices are like a restaurant kitchen with specialized stations instead of one chef doing everything. The grill station handles meats, the salad station prepares vegetables, and the dessert station makes sweets. Each station works independently, can scale up during busy times, and if one station fails, others can continue operating. The head waiter (API Gateway) coordinates orders between stations.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Microservices architecture breaks down applications into small, independent services that communicate through well-defined APIs. Each service owns its data, can be developed and deployed independently, and focuses on a specific business capability. This approach enables teams to work autonomously, scale individual components, and choose appropriate technologies for each service.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Single Responsibility:</strong> Each service handles one business function</li>
          <li><strong>Independent Deployment:</strong> Services can be updated independently</li>
          <li><strong>Technology Diversity:</strong> Different services can use different tech stacks</li>
          <li><strong>Decentralized Data:</strong> Each service manages its own database</li>
          <li><strong>Fault Isolation:</strong> Failure in one service doesn't cascade to others</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Don't start with microservices - begin with a monolith and split when you have clear service boundaries and scaling needs.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Microservices Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`[Client] --> [API Gateway] --> [Service Discovery]
       |               |                   |
       |               v                   v
       |          [Load Balancer] --> [User Service]
       |               |                   |
       |               |                   v
       |               |              [User Database]
       |               |
       |               v
       |          [Product Service] --> [Product DB]
       |               |
       |               v
       |          [Order Service] --> [Order DB]
       |               |
       |               v
       |          [Payment Service] --> [Payment DB]

Communication:
[Service A] --> [Message Queue] --> [Service B]
[Service A] --> [REST API] --> [Service B]
[Service A] --> [Event Bus] --> [Multiple Services]`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Netflix:</strong> Pioneered microservices. Their monolithic DVD service evolved into hundreds of microservices: video encoding, recommendations, billing, user profiles, content delivery, etc. Each team owns their services end-to-end.
        </p>
        <p className="mt-2">
          <strong>Amazon:</strong> Retail platform uses microservices for product catalog, inventory, pricing, orders, payments, and shipping. This allows them to scale each service independently based on demand.
        </p>
        <p className="mt-2">
          <strong>Uber:</strong> Services include rider matching, driver management, pricing, payments, and notifications. Microservices allow them to deploy updates multiple times daily without affecting the entire system.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// User Service (Node.js)
const express = require('express');
const app = express();

app.get('/users/:id', async (req, res) => {
  const user = await userRepository.findById(req.params.id);
  res.json(user);
});

app.post('/users', async (req, res) => {
  const user = await userRepository.create(req.body);
  
  // Publish event
  await eventBus.publish('user.created', { userId: user.id });
  
  res.status(201).json(user);
});

// Service Discovery (Consul)
const consul = require('consul')();
consul.agent.service.register({
  name: 'user-service',
  id: 'user-service-1',
  address: '192.168.1.100',
  port: 3000,
  check: {
    http: 'http://192.168.1.100:3000/health',
    interval: '10s'
  }
});

// Inter-service Communication
const getOrderDetails = async (orderId) => {
  const orderService = await consul.health.service('order-service');
  const service = orderService[0];
  
  const response = await fetch(\`http://\${service.Service.Address}:\${service.Service.Port}/orders/\${orderId}\`);
  return response.json();
};`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Containerization:</strong> Docker/Kubernetes for deployment and scaling</li>
          <li><strong>Service Mesh:</strong> Istio/Linkerd for communication and observability</li>
          <li><strong>API Gateway:</strong> Central point for routing, authentication, rate limiting</li>
          <li><strong>Distributed Tracing:</strong> Jaeger/Zipkin for request tracking across services</li>
          <li><strong>Configuration Management:</strong> Centralized configuration and secrets</li>
          <li><strong>Monitoring:</strong> Prometheus/Grafana for metrics and alerting</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Complexity vs Flexibility:</strong> Microservices add operational complexity but provide flexibility in development, deployment, and scaling. The overhead is justified for large, complex applications.
        </p>
        <p className="mt-2">
          <strong>Performance vs Resilience:</strong> Network communication adds latency compared to monoliths, but microservices provide better fault isolation and resilience.
        </p>
        <p className="mt-2">
          <strong>Team Autonomy vs Consistency:</strong> Independent teams work faster but maintaining consistency across services requires strong governance and communication.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="microservices" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Starting with microservices for simple applications</li>
          <li>Creating too many fine-grained services</li>
          <li>Ignoring distributed data management challenges</li>
          <li>Not implementing proper monitoring and logging</li>
          <li>Synchronous communication creating tight coupling</li>
          <li>Not planning for service discovery and configuration</li>
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
