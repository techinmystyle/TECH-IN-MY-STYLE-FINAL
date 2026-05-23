import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';
import SDMermaidDiagram from '../../components/SDMermaidDiagram';

export default function WhatsApp() {
  const interviewQuestions = [
    {
      question: "How would you design WhatsApp's messaging system?",
      answer: "Use WebSocket for real-time messaging, message queues for offline delivery, database sharding by user ID, and push notifications for alerts. Store messages in NoSQL for scalability, use Redis for online status, and implement end-to-end encryption."
    },
    {
      question: "How does WhatsApp handle billions of messages daily?",
      answer: "Through horizontal scaling with Erlang/BEAM VM, message routing through Mnesia database, connection pooling, and geographic distribution. Uses custom protocols for efficiency and implements load balancing at multiple levels."
    },
    {
      question: "How does WhatsApp ensure message delivery?",
      answer: "Through acknowledgments (single/double ticks), offline message queuing, retry mechanisms with exponential backoff, and push notifications. Messages persist until delivery is confirmed, with fallback to SMS for critical notifications."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">WhatsApp System Design</h1>
          <p className="text-sm mt-2 opacity-90">Real-time messaging for billions of users</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          WhatsApp is like a global postal service that delivers messages instantly. When you send a message, it's like dropping a letter in a mailbox that instantly teleports to your friend's mailbox. The system needs to handle billions of letters daily, ensure they arrive in order, protect privacy with sealed envelopes (encryption), and notify recipients when they have mail.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          WhatsApp is a real-time messaging application serving over 2 billion users worldwide. The system must handle massive scale with low latency, ensure message reliability, provide end-to-end encryption, and support various media types. Key challenges include real-time delivery, offline message handling, group messaging, and media sharing.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Real-time Messaging:</strong> WebSocket connections for instant delivery</li>
          <li><strong>Offline Storage:</strong> Queue messages for offline users</li>
          <li><strong>Group Chat:</strong> Efficient broadcasting to multiple recipients</li>
          <li><strong>Media Sharing:</strong> Handle images, videos, documents</li>
          <li><strong>End-to-End Encryption:</strong> Privacy and security</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> WhatsApp processes over 100 billion messages daily with 99.9% uptime and sub-second delivery times.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">System Architecture</h2>
        <SDMermaidDiagram 
          chart={`
flowchart TD
    subgraph "Client Layer"
        A[Client App] -->|WebSocket| B[Connection Server]
    end
    
    subgraph "Service Layer"
        B --> C[Message Router]
        B --> D[Session Store]
        B --> E[Presence Service]
        C --> F[User Database]
        C --> G[Message Queue]
        C --> H[Group Service]
        G --> I[Delivery Service]
    end
    
    subgraph "Storage Layer"
        G --> J[Media Storage]
        I --> K[Push Notification Service]
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
    style J fill:#e8e8e8,stroke:#333,stroke-width:2px
    style K fill:#e8e8e8,stroke:#333,stroke-width:2px
          `}
          id="whatsapp-arch"
        />
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Implementation</h2>
        <p>
          <strong>Technology Stack:</strong> WhatsApp uses Erlang/OTP for its core messaging system due to its concurrency and fault tolerance. Mnesia (Erlang's database) stores user data and messages. FreeBSD servers handle the infrastructure with custom-built protocols optimized for mobile networks.
        </p>
        <p className="mt-2">
          <strong>Scale:</strong> Handles 2+ billion users with 65+ billion messages daily. Uses data centers globally with geographic distribution to minimize latency. Each data center can handle millions of concurrent connections.
        </p>
        <p className="mt-2">
          <strong>Reliability:</strong> 99.9% uptime with automatic failover. Messages persist until delivery confirmed. Implements sophisticated retry mechanisms and fallback strategies.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// WebSocket Connection Handler
class MessageHandler {
  constructor() {
    this.connections = new Map(); // userId -> WebSocket
    this.messageQueue = new MessageQueue();
    this.presenceService = new PresenceService();
  }

  async handleConnection(userId, ws) {
    this.connections.set(userId, ws);
    await this.presenceService.setOnline(userId);
    
    // Deliver queued messages
    const queuedMessages = await this.messageQueue.getQueued(userId);
    queuedMessages.forEach(msg => this.sendMessage(userId, msg));
  }

  async sendMessage(fromUserId, message) {
    const recipients = message.recipients;
    
    for (const recipientId of recipients) {
      const connection = this.connections.get(recipientId);
      
      if (connection && connection.readyState === WebSocket.OPEN) {
        // User online - deliver immediately
        connection.send(JSON.stringify(message));
        await this.updateMessageStatus(message.id, 'delivered');
      } else {
        // User offline - queue for later
        await this.messageQueue.enqueue(recipientId, message);
        await this.sendPushNotification(recipientId, message);
      }
    }
  }

  async handleGroupMessage(groupId, message) {
    const groupMembers = await this.getGroupMembers(groupId);
    message.recipients = groupMembers;
    await this.sendMessage(message.fromUserId, message);
  }
}

// Database Schema (NoSQL)
const messageSchema = {
  id: String,
  fromUserId: String,
  toUserId: String, // or groupId for group messages
  content: String,
  messageType: 'text' | 'image' | 'video' | 'document',
  timestamp: Date,
  status: 'sent' | 'delivered' | 'read',
  mediaUrl: String // for media messages
};`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Connection Pooling:</strong> Efficiently manage millions of WebSocket connections</li>
          <li><strong>Database Sharding:</strong> Partition data by user ID or geographic region</li>
          <li><strong>Message Queues:</strong> Handle offline message delivery with Kafka/RabbitMQ</li>
          <li><strong>CDN for Media:</strong> Distribute images/videos globally</li>
          <li><strong>Push Notifications:</strong> Use APNS/FCM for offline alerts</li>
          <li><strong>Load Balancing:</strong> Distribute connections across multiple servers</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Real-time vs Battery Life:</strong> Constant WebSocket connections provide instant messaging but drain battery. Implement smart connection management and heartbeat optimization.
        </p>
        <p className="mt-2">
          <strong>Storage vs Privacy:</strong> Message history provides better user experience but raises privacy concerns. WhatsApp balances this with end-to-end encryption and optional backup features.
        </p>
        <p className="mt-2">
          <strong>Complexity vs Features:</strong> Rich features (status, stories, payments) add complexity but improve user engagement. WhatsApp maintains simplicity in core messaging while adding features gradually.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="whatsapp" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not implementing proper message ordering guarantees</li>
          <li>Ignoring offline message delivery and retry mechanisms</li>
          <li>Not planning for group message broadcasting efficiency</li>
          <li>Underestimating media storage and bandwidth requirements</li>
          <li>Not implementing proper encryption and security measures</li>
          <li>Ignoring push notification delivery and fallback strategies</li>
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
