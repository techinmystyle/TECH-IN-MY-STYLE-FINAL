import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function CAPTheorem() {
  const interviewQuestions = [
    {
      question: "What is CAP Theorem?",
      answer: "CAP Theorem states that in a distributed system, you can only have at most two of three guarantees: Consistency, Availability, and Partition Tolerance. You must sacrifice one when a network partition occurs."
    },
    {
      question: "What's the difference between Consistency and Availability?",
      answer: "Consistency ensures all nodes see the same data at the same time. Availability ensures the system remains operational even when some nodes fail. In network partitions, you must choose between them."
    },
    {
      question: "What are CP, AP, and CA systems?",
      answer: "CP systems prioritize consistency over availability during partitions. AP systems prioritize availability over consistency. CA systems work in single-node environments but don't handle network partitions in distributed systems."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">CAP Theorem</h1>
          <p className="text-sm mt-2 opacity-90">The fundamental trade-off in distributed systems</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          CAP Theorem is like managing a team spread across different offices. You can either ensure everyone has the same information (Consistency), keep everyone working even when communication fails (Availability), or handle communication breakdowns (Partition Tolerance). When the internet between offices goes down, you must choose: stop work until everyone syncs (Consistency) or let people work with possibly outdated information (Availability).
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          CAP Theorem, proposed by Eric Brewer, states that it's impossible for a distributed system to simultaneously provide more than two out of the following three guarantees: Consistency (C), Availability (A), and Partition Tolerance (P). This theorem is fundamental to understanding trade-offs in distributed system design.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Consistency:</strong> All nodes see the same data simultaneously</li>
          <li><strong>Availability:</strong> System remains operational despite failures</li>
          <li><strong>Partition Tolerance:</strong> System continues despite network partitions</li>
          <li><strong>Network Partition:</strong> Communication failure between nodes</li>
          <li><strong>Trade-off:</strong> Must sacrifice one guarantee during partitions</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> In real distributed systems, partitions are inevitable, so you must choose between Consistency and Availability.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">CAP Trade-offs</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`Network Partition Occurs:
    [Node A] <--X--> [Node B]
       |               |
    Write Request   Read Request
    
CP System (Choose Consistency):
    Node B: "Cannot serve - need to sync with A"
    Result: System unavailable but consistent
    
AP System (Choose Availability):
    Node B: "Serve stale data, sync later"
    Result: System available but potentially inconsistent
    
CA System (Not possible in distributed):
    Assumes no network partitions - only works in single-node`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Banking Systems (CP):</strong> Banks prioritize consistency. If ATM networks partition, they'd rather stop transactions than risk inconsistent balances. Your account balance must be accurate everywhere.
        </p>
        <p className="mt-2">
          <strong>Social Media Likes (AP):</strong> Facebook/Instagram prioritize availability. If servers partition, they'll show slightly outdated like counts rather than break the entire feature. Consistency is eventually achieved.
        </p>
        <p className="mt-2">
          <strong>DNS Systems (AP):</strong> DNS must remain available. During partitions, some DNS servers might serve slightly outdated records rather than fail entirely, breaking internet access.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// CP System Example (Strong Consistency)
class CPDatabase {
  async write(data) {
    await this.replicateToAllNodes(data);
    return "Write successful";
  }
  
  async read(key) {
    if (!this.allNodesConnected()) {
      throw new Error("System unavailable during partition");
    }
    return this.getFromQuorum(key);
  }
}

// AP System Example (Eventual Consistency)
class APDatabase {
  async write(data) {
    this.writeToLocalNode(data);
    this.asyncReplicate(data);
    return "Write successful";
  }
  
  async read(key) {
    return this.getFromLocalNode(key); // May be stale
  }
}`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling Strategies</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>CP Systems:</strong> Use consensus algorithms (Paxos, Raft), quorum-based reads/writes</li>
          <li><strong>AP Systems:</strong> Use eventual consistency, conflict resolution, gossip protocols</li>
          <li><strong>Hybrid Approaches:</strong> Different consistency levels for different data</li>
          <li><strong>Tunable Consistency:</strong> Let applications choose consistency level per operation</li>
          <li><strong>Multi-Datacenter:</strong> Geographic considerations affect CAP choices</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>CP vs AP:</strong> CP systems guarantee data correctness but may become unavailable. AP systems stay operational but may serve inconsistent data. The choice depends on business requirements.
        </p>
        <p className="mt-2">
          <strong>Strong vs Eventual Consistency:</strong> Strong consistency ensures immediate consistency but reduces availability. Eventual consistency provides high availability with temporary inconsistencies.
        </p>
        <p className="mt-2">
          <strong>Synchronous vs Asynchronous Replication:</strong> Synchronous replication ensures consistency but adds latency. Asynchronous replication is faster but risks data loss during failures.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="cap-theorem" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Assuming you can have all three guarantees simultaneously</li>
          <li>Choosing CP when business needs AP (or vice versa)</li>
          <li>Not understanding the difference between consistency models</li>
          <li>Ignoring network partitions in system design</li>
          <li>Not testing partition scenarios in production</li>
          <li>Confusing high availability with zero downtime</li>
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
