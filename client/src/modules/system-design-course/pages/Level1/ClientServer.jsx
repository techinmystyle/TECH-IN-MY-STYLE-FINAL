import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';
import SDMermaidDiagram from '../../components/SDMermaidDiagram';

export default function ClientServer() {
  const interviewQuestions = [
    {
      question: "What is the Client-Server architecture?",
      answer: "Client-Server is a distributed application architecture that partitions tasks between clients (requesters of resources) and servers (providers of resources). Clients initiate communication sessions, while servers wait for incoming requests."
    },
    {
      question: "What are the advantages of Client-Server architecture?",
      answer: "Centralized management, easier maintenance, data integrity, security control, resource sharing, and scalability. Servers can be optimized for specific tasks and clients can be lightweight."
    },
    {
      question: "What are different types of clients?",
      answer: "Thin clients (minimal processing, rely heavily on server), thick clients (heavy processing locally), fat clients (most processing on client), and hybrid clients (balanced processing between client and server)."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Client-Server Architecture</h1>
          <p className="text-sm mt-2 opacity-90">The fundamental model of distributed computing</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          Client-Server architecture is like a restaurant: clients are customers who place orders, and the server is the kitchen that prepares and delivers food. The kitchen (server) handles the complex work while customers (clients) simply request and receive what they want. This separation allows the kitchen to serve many customers efficiently.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Client-Server architecture is a computing model where a server provides resources or services, and multiple clients request and consume these resources over a network. This model enables centralized data management, shared resources, and distributed processing across multiple clients.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Clients: User interfaces that request services</li>
          <li>Servers: Provide services, manage resources, handle business logic</li>
          <li>Network: Communication medium between clients and servers</li>
          <li>Protocols: Rules for communication (HTTP, TCP/IP, etc.)</li>
          <li>Data storage: Centralized databases managed by servers</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> The beauty of client-server lies in separation of concerns - clients focus on presentation, servers focus on business logic and data.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Architecture</h2>
        <SDMermaidDiagram 
          chart={`
flowchart TD
    subgraph "Client Layer"
        A[Web Browser] -->|HTTP| B[Web Server]
        C[Mobile App] -->|API| D[API Server]
        E[Desktop App] -->|TCP| F[Application Server]
    end
    
    subgraph "Server Layer"
        B -->|SQL| G[Database]
        D -->|Cache| H[Redis]
        F -->|File Storage| I[S3]
    end
    
    style A fill:#e8e8e8,stroke:#333,stroke-width:2px
    style B fill:#e8e8e8,stroke:#333,stroke-width:2px
    style C fill:#e8e8e8,stroke:#333,stroke-width:2px
    style D fill:#e8e8e8,stroke:#333,stroke-width:2px
    style E fill:#e8e8e8,stroke:#333,stroke-width:2px
    style F fill:#e8e8e8,stroke:#333,stroke-width:2px
    style G fill:#e8e8e8,stroke:#333,stroke-width:2px
    style H fill:#e8e8e8,stroke:#333,stroke-width:2px
    style I fill:#e8e8e8,stroke:#333,stroke-width:2px
          `}
          id="client-server-arch"
        />
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Web Browsing:</strong> Your browser (client) requests web pages from servers like Google or Facebook. The server processes the request, fetches data from databases, and sends back HTML/CSS/JS for your browser to render.
        </p>
        <p className="mt-2">
          <strong>Mobile Banking:</strong> Your banking app (client) communicates with bank servers to check balances, transfer money, and pay bills. The server handles authentication, transaction processing, and database operations.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Client-side (React)
const fetchUserData = async () => {
  const response = await fetch('/api/user/123');
  const userData = await response.json();
  return userData;
};

// Server-side (Node.js Express)
app.get('/api/user/:id', async (req, res) => {
  const user = await database.findById(req.params.id);
  res.json(user);
});

// Database query
SELECT * FROM users WHERE id = '123';`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Load balancing across multiple servers</li>
          <li>Database connection pooling</li>
          <li>Client-side caching to reduce server load</li>
          <li>CDN for static content delivery</li>
          <li>Asynchronous processing with queues</li>
          <li>Horizontal scaling with stateless servers</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Centralization vs Distribution:</strong> Centralized servers are easier to manage but create single points of failure. Distributed systems are more resilient but add complexity in coordination and consistency.
        </p>
        <p className="mt-2">
          <strong>Stateful vs Stateless:</strong> Stateful servers maintain session information but are harder to scale. Stateless servers are easier to scale but require external session management.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="client-server" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Making clients too thin (overloading servers)</li>
          <li>Poor error handling on client side</li>
          <li>Ignoring network latency and timeouts</li>
          <li>No proper authentication/authorization</li>
          <li>Inefficient data transfer (sending too much data)</li>
          <li>Not implementing proper caching strategies</li>
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
