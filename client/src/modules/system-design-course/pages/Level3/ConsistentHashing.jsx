import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function ConsistentHashing() {
  const interviewQuestions = [
    {
      question: "What is consistent hashing and why is it better than modulo hashing?",
      answer: "Consistent hashing maps keys to servers in a way that minimizes remapping when servers are added/removed. Unlike modulo hashing which redistributes all keys, consistent hashing only moves a small portion of keys, making it ideal for distributed systems."
    },
    {
      question: "How does consistent hashing handle server failures?",
      answer: "When a server fails, its keys are redistributed to adjacent servers on the hash ring. Only keys from the failed server need remapping, minimizing disruption. Virtual nodes help distribute load more evenly."
    },
    {
      question: "What are virtual nodes in consistent hashing?",
      answer: "Virtual nodes (vnodes) are multiple hash points for each physical server on the hash ring. They provide better load distribution and help handle hotspots by spreading keys more evenly across available servers."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Consistent Hashing</h1>
          <p className="text-sm mt-2 opacity-90">Efficient data distribution in dynamic systems</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          Consistent hashing is like arranging servers in a circle and spinning a wheel to decide where data goes. When you add a new server, you only need to move a small slice of the pie (data) to make room. If a server leaves, only its slice needs to be redistributed. This is much better than traditional hashing where adding one server would require reshuffling all data like dealing cards to a new player.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Consistent hashing is a special hashing technique that minimizes data remapping when the number of servers changes. It maps both data and servers to points on a virtual circle (hash ring), with each server responsible for the range of keys that fall between it and the next server clockwise. This approach ensures that adding or removing servers only affects a small portion of the keys.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Hash Ring:</strong> Virtual circle where keys and servers are mapped</li>
          <li><strong>Minimal Remapping:</strong> Only adjacent keys move when servers change</li>
          <li><strong>Virtual Nodes:</strong> Multiple hash points per server for balance</li>
          <li><strong>Scalability:</strong> Dynamically add/remove servers with minimal impact</li>
          <li><strong>Load Distribution:</strong> Evenly spread data across available servers</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Consistent hashing reduces data movement from O(n) to O(k/n) where k is the number of keys and n is the number of servers.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Consistent Hashing Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`Hash Ring (0 to 2^32):
    0°
     |
     v
[Server A] ---- [Key 1] ---- [Server B] ---- [Key 2] ---- [Server C]
     |                                                      |
     |                                                      |
     +------------------ [Key 3] -------------------------+

Key Assignment:
- Key 1 maps to Server A (next clockwise server)
- Key 2 maps to Server B
- Key 3 maps to Server C

Server Addition:
[Server A] ---- [Key 1] ---- [New Server] ---- [Key 2] ---- [Server B]
     |                                                        |
     +------------------ [Key 3] ----------------------------+

Only Key 2 needs to move from Server B to New Server

Virtual Nodes:
Server A: [A1] [A2] [A3]
Server B: [B1] [B2] [B3]
Server C: [C1] [C2] [C3]

Better load distribution with multiple hash points per server`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>DynamoDB:</strong> Uses consistent hashing with virtual nodes for partitioning data across storage nodes. Each partition is assigned to multiple nodes for redundancy, and the system can add/remove nodes with minimal data movement.
        </p>
        <p className="mt-2">
          <strong>Cassandra:</strong> Implements consistent hashing for data distribution across the cluster. Uses virtual nodes (vnodes) to ensure even data distribution and simplify cluster management and scaling operations.
        </p>
        <p className="mt-2">
          <strong>Akamai CDN:</strong> Uses consistent hashing to distribute content across edge servers. When new servers are added, only a portion of content needs to be redistributed, minimizing cache misses and improving performance.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Consistent Hashing Implementation
class ConsistentHash {
  constructor(nodes = [], replicas = 100) {
    this.replicas = replicas;
    this.ring = new Map();
    this.sortedKeys = [];
    
    nodes.forEach(node => this.addNode(node));
  }

  hash(key) {
    // SHA-256 hash function
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(key).digest('hex');
  }

  addNode(node) {
    for (let i = 0; i < this.replicas; i++) {
      const virtualNode = node + ':' + i;
      const hash = this.hash(virtualNode);
      this.ring.set(hash, node);
      this.sortedKeys.push(hash);
    }
    this.sortedKeys.sort();
  }

  removeNode(node) {
    for (let i = 0; i < this.replicas; i++) {
      const virtualNode = node + ':' + i;
      const hash = this.hash(virtualNode);
      this.ring.delete(hash);
      this.sortedKeys = this.sortedKeys.filter(k => k !== hash);
    }
  }

  getNode(key) {
    if (this.sortedKeys.length === 0) return null;
    
    const hash = this.hash(key);
    
    // Find the first node with hash >= key hash
    for (let i = 0; i < this.sortedKeys.length; i++) {
      const ringKey = this.sortedKeys[i];
      if (ringKey >= hash) {
        return this.ring.get(ringKey);
      }
    }
    
    // Wrap around to the first node
    return this.ring.get(this.sortedKeys[0]);
  }
}

// Usage example:
const ch = new ConsistentHash(['server1', 'server2', 'server3']);
const node = ch.getNode('user123'); // Returns responsible server
ch.addNode('server4'); // Minimal data remapping
ch.removeNode('server2'); // Only its keys move to adjacent servers`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Virtual Nodes:</strong> Use multiple vnodes per server for better balance</li>
          <li><strong>Replica Placement:</strong> Place replicas on different physical machines</li>
          <li><strong>Load Monitoring:</strong> Track key distribution and hotspots</li>
          <li><strong>Dynamic Replicas:</strong> Adjust vnode count based on server capacity</li>
          <li><strong>Hash Function:</strong> Choose good hash function to avoid clustering</li>
          <li><strong>Failure Handling:</strong> Automatic remapping when servers fail</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Memory vs Performance:</strong> Storing the hash ring in memory provides fast lookups but consumes memory. Disk-based storage saves memory but adds latency.
        </p>
        <p className="mt-2">
          <strong>Replica Count vs Balance:</strong> More virtual nodes provide better load balancing but increase memory usage and lookup time. Fewer vnodes are efficient but may create imbalances.
        </p>
        <p className="mt-2">
          <strong>Complexity vs Efficiency:</strong> Simple implementations are easier to understand but may have performance issues. Optimized versions are complex but provide better performance.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="consistent-hashing" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Using poor hash functions causing uneven distribution</li>
          <li>Not using enough virtual nodes for proper load balancing</li>
          <li>Ignoring server capacity differences in hash ring</li>
          <li>Not planning for hotspots and uneven key distribution</li>
          <li>Forgetting about data replication and fault tolerance</li>
          <li>Not monitoring ring balance and performance</li>
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
