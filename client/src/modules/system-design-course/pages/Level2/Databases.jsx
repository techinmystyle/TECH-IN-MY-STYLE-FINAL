import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function Databases() {
  const interviewQuestions = [
    {
      question: "SQL vs NoSQL - when to use each?",
      answer: "Use SQL for structured data, ACID transactions, and complex queries. Use NoSQL for unstructured data, horizontal scaling, and flexible schemas. SQL ensures consistency, NoSQL prioritizes availability and scalability."
    },
    {
      question: "What are database indexes?",
      answer: "Indexes are data structures that improve query speed by allowing fast lookup without scanning entire tables. They trade increased storage and slower writes for significantly faster reads on indexed columns."
    },
    {
      question: "What is database sharding?",
      answer: "Sharding partitions data across multiple databases to distribute load and enable horizontal scaling. Each shard contains a subset of data, allowing parallel processing and larger total capacity."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Databases</h1>
          <p className="text-sm mt-2 opacity-90">The backbone of data storage and retrieval systems</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          A database is like a highly organized library. SQL databases are like traditional libraries with strict card catalogs and organized shelves - perfect for finding specific books quickly. NoSQL databases are like modern digital libraries with flexible tagging and search - great for diverse content types and rapid scaling. Both store information, but their organization methods suit different needs.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Databases are organized collections of structured information stored electronically. They are the foundation of most applications, providing persistent storage, data consistency, and efficient retrieval mechanisms. Understanding database types, trade-offs, and optimization techniques is crucial for system design.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>SQL Databases:</strong> Structured data, ACID compliance, relational model</li>
          <li><strong>NoSQL Databases:</strong> Flexible schemas, horizontal scaling, various models</li>
          <li><strong>In-memory Databases:</strong> Ultra-fast access, volatile storage</li>
          <li><strong>Time-series Databases:</strong> Optimized for time-stamped data</li>
          <li><strong>Graph Databases:</strong> Relationship-focused data storage</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Choose your database based on your data model and query patterns, not just popularity.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Database Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`Application Layer
       |
       v
[Connection Pool] --> [Query Cache]
       |                   |
       v                   v
[Read/Write Split] --> [Master DB] (Writes)
       |                   |
       v                   v
[Load Balancer] --> [Replica 1] [Replica 2] (Reads)
       |                   |        |
       v                   v        v
[Sharding Layer] --> [Shard 1] [Shard 2] [Shard 3]
       |                   |        |        |
       v                   v        v        v
[Storage Layer] --> [SSD/NVMe] [SSD/NVMe] [SSD/NVMe]`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Instagram:</strong> Uses PostgreSQL for user data and relationships (structured data), Redis for caching and feeds (fast access), and Cassandra for timeline storage (massive scale, high availability).
        </p>
        <p className="mt-2">
          <strong>Uber:</strong> Uses MySQL for core business data (transactions), MongoDB for flexible document storage, and Redis for real-time location tracking and surge pricing calculations.
        </p>
        <p className="mt-2">
          <strong>Netflix:</strong> Uses multiple databases: MySQL for billing, Cassandra for user viewing history, and Elasticsearch for content search and recommendations.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// SQL Example (PostgreSQL)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);

// NoSQL Example (MongoDB)
db.users.insertOne({
  _id: ObjectId(),
  email: "user@example.com",
  profile: {
    name: "John Doe",
    preferences: ["dark_mode", "notifications"]
  },
  created_at: new Date()
});

db.users.createIndex({ "email": 1 });

// Database Connection Pool
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'myapp',
  max: 20, // Maximum connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Read Replicas:</strong> Distribute read queries across multiple copies</li>
          <li><strong>Database Sharding:</strong> Partition data horizontally across servers</li>
          <li><strong>Indexing Strategy:</strong> Optimize query performance with proper indexes</li>
          <li><strong>Connection Pooling:</strong> Reuse connections to reduce overhead</li>
          <li><strong>Query Optimization:</strong> Analyze and optimize slow queries</li>
          <li><strong>Caching Layer:</strong> Reduce database load with Redis/Memcached</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>SQL vs NoSQL:</strong> SQL provides strong consistency and complex queries but scales vertically. NoSQL offers horizontal scaling and flexibility but may sacrifice consistency and query capabilities.
        </p>
        <p className="mt-2">
          <strong>Normalization vs Denormalization:</strong> Normalization reduces redundancy but requires more joins. Denormalization improves read performance but increases storage and update complexity.
        </p>
        <p className="mt-2">
          <strong>Strong vs Eventual Consistency:</strong> Strong consistency ensures immediate data accuracy but reduces availability. Eventual consistency provides high availability with temporary inconsistencies.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="databases" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not using indexes properly on frequently queried columns</li>
          <li>N+1 query problem in ORM frameworks</li>
          <li>Ignoring database connection limits and leaks</li>
          <li>Not planning for database backups and disaster recovery</li>
          <li>Choosing the wrong database type for the use case</li>
          <li>Not monitoring database performance and slow queries</li>
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
