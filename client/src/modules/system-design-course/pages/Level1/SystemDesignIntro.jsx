import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';
import SDMermaidDiagram from '../../components/SDMermaidDiagram';

export default function SystemDesignIntro() {
  const interviewQuestions = [
    {
      question: "What is System Design?",
      answer: "System Design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It's about making high-level decisions about the structure and behavior of a system."
    },
    {
      question: "Why is System Design important in interviews?",
      answer: "Companies test System Design to evaluate your ability to handle complexity, make trade-offs, and design scalable solutions. It demonstrates your practical engineering experience and problem-solving skills."
    },
    {
      question: "What are the key steps in System Design?",
      answer: "1. Understand requirements and constraints 2. Estimate scale and capacity 3. Design high-level architecture 4. Identify bottlenecks 5. Deep dive into components 6. Review and iterate"
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">System Design Introduction</h1>
          <p className="text-sm mt-2 opacity-90">The foundation of building scalable and robust systems</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          System Design is like being an architect for digital buildings. Just as architects design buildings that must handle thousands of people, remain standing during earthquakes, and be cost-effective, system designers create digital systems that serve millions of users, withstand failures, and stay within budget.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          System Design encompasses the process of designing complex software systems that meet specific requirements while being scalable, maintainable, and reliable. It involves making critical decisions about architecture, technology stack, data storage, and system interactions.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Architecture patterns and design principles</li>
          <li>Scalability and performance considerations</li>
          <li>Reliability and fault tolerance</li>
          <li>Security and data protection</li>
          <li>Cost optimization strategies</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Good system design is about making the right trade-offs, not finding the perfect solution.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Architecture</h2>
        <SDMermaidDiagram 
          chart={`flowchart TD
    A[Requirements Analysis] --> B[High-Level Design]
    B --> C[Component Design]
    C --> D[Database Design]
    D --> E[API Design]
    E --> F[Security Design]
    F --> G[Deployment Strategy]`}
          id="system-design-flow"
        />
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          When Netflix designs its streaming service, they consider: serving 200+ million users globally, handling peak evening traffic, ensuring 99.99% uptime, minimizing buffering time, and optimizing content delivery costs. Their system uses CDN for video delivery, microservices for different functionalities, and sophisticated recommendation algorithms.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// System Design Checklist
const designChecklist = {
  requirements: {
    users: "1M daily active users",
    requests: "1000 requests/sec",
    storage: "10TB data"
  },
  architecture: {
    pattern: "Microservices",
    communication: "REST APIs",
    database: "PostgreSQL + Redis"
  },
  scalability: {
    horizontal: "Load balancers",
    vertical: "Instance sizing",
    caching: "Multi-level caching"
  }
};`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Horizontal scaling with load balancers</li>
          <li>Database read replicas and sharding</li>
          <li>CDN for static content delivery</li>
          <li>Caching at multiple levels (browser, CDN, application, database)</li>
          <li>Asynchronous processing with message queues</li>
          <li>Auto-scaling based on traffic patterns</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Consistency vs Availability:</strong> Strong consistency ensures all users see the same data but may reduce availability during network partitions. High availability keeps the system running but might show stale data.
        </p>
        <p className="mt-2">
          <strong>Performance vs Cost:</strong> Faster systems often require more resources (servers, memory, CDN), increasing costs. The goal is finding the optimal balance for your specific use case.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="system-design-intro" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Over-engineering for current requirements</li>
          <li>Ignoring non-functional requirements early</li>
          <li>Single points of failure in critical components</li>
          <li>Neglecting monitoring and observability</li>
          <li>Poor database design leading to performance issues</li>
          <li>Not planning for disaster recovery</li>
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
