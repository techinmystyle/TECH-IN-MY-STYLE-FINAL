import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function APIGateway() {
  const interviewQuestions = [
    {
      question: "What is an API Gateway and why do you need it?",
      answer: "An API Gateway is a server that acts as a single entry point for all client requests. It handles routing, authentication, rate limiting, and protocol translation, simplifying client code and providing cross-cutting concerns in one place."
    },
    {
      question: "What are the key features of an API Gateway?",
      answer: "Request routing to appropriate services, authentication and authorization, rate limiting and throttling, request/response transformation, protocol translation (REST to gRPC), caching, logging, and monitoring."
    },
    {
      question: "How does an API Gateway differ from a load balancer?",
      answer: "Load balancers operate at L4/L7 and distribute traffic, while API Gateways work at L8 (application layer) with advanced routing, authentication, and protocol translation. API Gateways are more intelligent but add more overhead."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">API Gateway</h1>
          <p className="text-sm mt-2 opacity-90">The single entry point for microservices architecture</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          An API Gateway is like a building's front desk. Instead of visitors going directly to different departments (services), they check in at the front desk first. The front desk verifies their identity (authentication), directs them to the right department (routing), enforces visiting rules (rate limiting), and can translate requests (protocol conversion). This simplifies navigation for visitors and provides security for the building.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          An API Gateway is a management tool that sits between clients and backend services, acting as a single entry point for all requests. It handles cross-cutting concerns like authentication, routing, rate limiting, and monitoring, while providing a unified API interface to clients. This pattern is essential for microservices architectures where clients would otherwise need to communicate with multiple services.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Request Routing:</strong> Direct requests to appropriate microservices</li>
          <li><strong>Authentication:</strong> Centralized authentication and authorization</li>
          <li><strong>Rate Limiting:</strong> Protect services from overload</li>
          <li><strong>Protocol Translation:</strong> Convert between different protocols</li>
          <li><strong>Response Aggregation:</strong> Combine responses from multiple services</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> API Gateways can become bottlenecks - ensure they're scalable and highly available with proper monitoring.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">API Gateway Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`[Client Apps] --> [API Gateway] --> [Service Discovery]
       |               |                   |
       |               v                   v
       |          [Auth Service] --> [User Service]
       |               |                   |
       |               v                   v
       |          [Rate Limiter] --> [Product Service]
       |               |                   |
       |               v                   v
       |          [Request Router] --> [Order Service]
       |               |
       |               v
       |          [Response Aggregator]
       |               |
       |               v
       |          [Monitoring & Logging]

Gateway Features:
- Authentication & Authorization
- Rate Limiting & Quotas
- Request/Response Transformation
- Protocol Translation (REST/gRPC)
- Caching & Load Balancing
- Monitoring & Analytics`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Netflix API Gateway:</strong> Handles billions of requests daily, routing to hundreds of microservices. It authenticates users, rate limits requests, and aggregates data from multiple services to provide a unified API for client applications.
        </p>
        <p className="mt-2">
          <strong>Amazon API Gateway:</strong> Manages API calls for AWS services and customer applications. It handles authentication, throttling, caching, and integrates with Lambda for serverless functions.
        </p>
        <p className="mt-2">
          <strong>Uber:</strong> Their gateway handles rider, driver, and payment APIs. It routes requests to appropriate services, enforces rate limits, and provides protocol translation between mobile apps and backend services.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Express.js API Gateway
const express = require('express');
const httpProxy = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests
});
app.use(limiter);

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'No token' });
  
  // Verify token
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Route to user service
app.use('/api/users', authenticate, 
  httpProxy.createProxyMiddleware({
    target: 'http://user-service:3001',
    changeOrigin: true,
    pathRewrite: { '^/api/users': '' }
  })
);

// Route to product service
app.use('/api/products', authenticate,
  httpProxy.createProxyMiddleware({
    target: 'http://product-service:3002',
    changeOrigin: true,
    pathRewrite: { '^/api/products': '' }
  })
);

// AWS API Gateway Configuration
const apiGateway = new apigateway.RestApi(this, 'ApiGateway', {
  restApiName: 'MyService',
  description: 'This service serves products.',
  defaultCorsPreflightOptions: {
    allowOrigins: apigateway.Cors.ALL_ORIGINS,
    allowMethods: apigateway.Cors.ALL_METHODS
  }
});

const productsIntegration = new apigateway.Integration({
  type: apigateway.IntegrationType.HTTP_PROXY,
  integrationHttpMethod: 'ANY',
  url: 'http://product-service:3002/{proxy}',
  options: {
    connectionType: apigateway.ConnectionType.INTERNET
  }
});`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Horizontal Scaling:</strong> Deploy multiple gateway instances behind load balancer</li>
          <li><strong>Caching:</strong> Cache frequent responses and authentication results</li>
          <li><strong>Connection Pooling:</strong> Reuse connections to backend services</li>
          <li><strong>Async Processing:</strong> Handle non-blocking operations efficiently</li>
          <li><strong>Circuit Breakers:</strong> Fail fast when services are unavailable</li>
          <li><strong>Distributed Tracing:</strong> Track requests across service boundaries</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Centralization vs Decentralization:</strong> API Gateways centralize cross-cutting concerns for simplicity but create a single point of failure. Decentralized approaches are more resilient but duplicate logic across services.
        </p>
        <p className="mt-2">
          <strong>Performance vs Features:</strong> Rich features add processing overhead. Lightweight gateways perform better but provide fewer capabilities.
        </p>
        <p className="mt-2">
          <strong>Flexibility vs Control:</strong> Configurable gateways offer flexibility but require more management. Hard-coded gateways are simpler but less adaptable to changing needs.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="api-gateway" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Making the gateway a bottleneck with synchronous processing</li>
          <li>Not implementing proper monitoring and alerting</li>
          <li>Ignoring gateway scalability and high availability</li>
          <li>Putting business logic in the gateway</li>
          <li>Not planning for gateway failures and fallbacks</li>
          <li>Poor error handling and response transformation</li>
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
