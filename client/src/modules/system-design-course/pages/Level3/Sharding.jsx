import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function Sharding() {
  const interviewQuestions = [
    {
      question: "What is database sharding and when should you use it?",
      answer: "Sharding partitions data across multiple databases to enable horizontal scaling. Use it when your database becomes a bottleneck for reads/writes, storage limits are reached, or you need to improve performance by distributing load."
    },
    {
      question: "What are different sharding strategies?",
      answer: "Range-based (data ranges per shard), hash-based (consistent hashing), directory-based (lookup table), and geography-based (location-based). Each has different trade-offs in complexity and performance."
    },
    {
      question: "What are the challenges of sharding?",
      answer: "Cross-shard queries become complex, rebalancing shards is difficult, maintaining unique IDs across shards, and operational complexity increases. Requires careful planning and specialized tooling."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Database Sharding</h1>
          <p className="text-sm mt-2 opacity-90">Horizontal partitioning for massive scale</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          Sharding is like splitting a massive library into multiple branches. Instead of one library holding all books (single database), you create specialized branches - fiction in one, non-fiction in another, science in a third. Each branch has its own catalog and staff, allowing parallel operations. When you need a book, you first check which branch has it, then go directly there. This allows the library system to handle millions more books and visitors.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Database sharding is a horizontal partitioning approach where data is distributed across multiple independent database servers. Each shard is a separate database that holds a subset of the total data. This enables horizontal scaling, improved performance, and higher availability by distributing load and storage across multiple machines.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Horizontal Partitioning:</strong> Split data across multiple servers</li>
          <li><strong>Independent Shards:</strong> Each shard operates independently</li>
          <li><strong>Shard Key:</strong> Determines which shard stores specific data</li>
          <li><strong>Scalability:</strong> Add more shards as data grows</li>
          <li><strong>Performance:</strong> Parallel processing and reduced index size</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Sharding should be a last resort - optimize with caching, read replicas, and vertical scaling first.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Sharding Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`[Application] --> [Shard Router] --> [Shard 1: Users A-F]
       |               |              |
       |               v              v
       |          [Shard Key] --> [Shard 2: Users G-M]
       |               |              |
       |               v              v
       |          [Hash Function] --> [Shard 3: Users N-Z]
       |               |
       |               v
       |          [Shard Mapping]
       |
       v
[Query Result] <-- [Selected Shard]

Sharding Strategies:
1. Range-based: user_id 1-1000 -> Shard 1
2. Hash-based: hash(user_id) % num_shards
3. Directory-based: lookup table mapping
4. Geographic: user_location -> nearest shard`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Instagram:</strong> Shards user data by user ID. Each user's photos, followers, and comments are stored on the same shard. This allows them to scale to billions of users while keeping each user's data accessible from a single shard.
        </p>
        <p className="mt-2">
          <strong>WhatsApp:</strong> Shards messages by user phone number. Each user's message history is stored on a specific shard, enabling quick message retrieval and efficient storage management across millions of users.
        </p>
        <p className="mt-2">
          <strong>Stack Overflow:</strong> Uses database sharding to handle millions of questions and answers. Data is partitioned by question ID ranges, allowing parallel processing of queries and writes.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Shard Router
class ShardRouter {
  constructor(shards) {
    this.shards = shards;
    this.shardCount = shards.length;
  }

  getShard(key) {
    const hash = this.hashFunction(key);
    const shardIndex = hash % this.shardCount;
    return this.shards[shardIndex];
  }

  hashFunction(key) {
    // Simple hash function
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  async query(key, operation, data) {
    const shard = this.getShard(key);
    return await shard[operation](key, data);
  }
}

// Shard Configuration
const shard1 = new DatabaseConnection('db1.example.com');
const shard2 = new DatabaseConnection('db2.example.com');
const shard3 = new DatabaseConnection('db3.example.com');

const router = new ShardRouter([shard1, shard2, shard3]);

// Usage
router.query('user123', 'getUser', {});
router.query('user456', 'updateUser', { name: 'John' });

// MongoDB Sharding
sh.shardCollection('mydb.users', { 'user_id': 'hashed' });
sh.enableSharding('mydb');`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Resharding:</strong> Redistribute data when adding/removing shards</li>
          <li><strong>Hotspot Detection:</strong> Monitor for uneven data distribution</li>
          <li><strong>Cross-Shard Queries:</strong> Minimize queries across multiple shards</li>
          <li><strong>Global Indexes:</strong> Implement for cross-shard lookups</li>
          <li><strong>Connection Pooling:</strong> Manage connections to multiple shards</li>
          <li><strong>Monitoring:</strong> Track shard performance and data distribution</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Complexity vs Scalability:</strong> Sharding provides unlimited horizontal scalability but adds significant operational complexity in routing, rebalancing, and cross-shard operations.
        </p>
        <p className="mt-2">
          <strong>Query Performance vs Flexibility:</strong> Single-shard queries are fast, but cross-shard queries become complex and slower. Some queries may not be feasible in a sharded environment.
        </p>
        <p className="mt-2">
          <strong>Consistency vs Availability:</strong> Maintaining consistency across shards is challenging. Eventual consistency is often accepted for better availability and performance.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="sharding" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Choosing poor shard keys leading to uneven distribution</li>
          <li>Not planning for resharding when data grows</li>
          <li>Ignoring cross-shard query requirements</li>
          <li>Not implementing proper monitoring for hotspots</li>
          <li>Underestimating operational complexity</li>
          <li>Forgetting about backup and disaster recovery for each shard</li>
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
