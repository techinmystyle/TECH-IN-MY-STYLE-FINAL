import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function MessageQueue() {
  const interviewQuestions = [
    {
      question: "What is a message queue and when would you use it?",
      answer: "A message queue is an asynchronous communication system that allows different services to communicate without being directly connected. Use it for decoupling services, handling asynchronous tasks, load balancing, and improving system resilience."
    },
    {
      question: "What's the difference between queues and topics?",
      answer: "Queues deliver messages to one consumer (point-to-point), while topics deliver to multiple subscribers (publish-subscribe). Queues are for task distribution, topics are for event broadcasting."
    },
    {
      question: "How do message queues handle failures?",
      answer: "Through dead letter queues (DLQ) for failed messages, retry mechanisms with exponential backoff, acknowledgments to ensure message processing, and persistence to survive broker failures."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Message Queue</h1>
          <p className="text-sm mt-2 opacity-90">Asynchronous communication for resilient systems</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          A message queue is like a postal service for applications. Instead of calling someone directly (synchronous), you send a letter (message) that gets delivered eventually. The recipient can process it when ready, and if they're unavailable, the postal service holds the letter until they return. This allows both parties to work at their own pace without waiting for each other.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Message queues enable asynchronous communication between different components of a distributed system. They act as intermediaries that store messages until they can be processed, allowing systems to decouple, scale independently, and handle failures gracefully. This pattern is essential for building resilient, scalable microservices architectures.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Producer:</strong> Application that sends messages</li>
          <li><strong>Consumer:</strong> Application that processes messages</li>
          <li><strong>Queue:</strong> Storage that holds messages until processed</li>
          <li><strong>Broker:</strong> Message queue server that manages queues</li>
          <li><strong>Message:</strong> Data unit being transmitted</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Message queues transform synchronous bottlenecks into asynchronous workflows, enabling systems to handle traffic spikes gracefully.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Message Queue Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`[Producer 1] --> [Message Broker] --> [Queue 1] --> [Consumer 1]
[Producer 2] --> [Message Broker] --> [Queue 2] --> [Consumer 2]
[Producer 3] --> [Message Broker] --> [Topic] --> [Consumer 3]
                                                  |
                                                  v
                                             [Consumer 4]

Message Flow:
1. Producer sends message to broker
2. Broker stores message in queue/topic
3. Consumer pulls or broker pushes message
4. Consumer acknowledges processing
5. Broker removes acknowledged message

Failure Handling:
[Processing Failed] --> [Retry Queue] --> [Dead Letter Queue]`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Example</h2>
        <p>
          <strong>Amazon:</strong> Uses message queues extensively. When you place an order, the order service publishes an event that triggers inventory, shipping, payment, and notification services to process asynchronously. This prevents the checkout process from failing if downstream services are slow.
        </p>
        <p className="mt-2">
          <strong>Netflix:</strong> Uses message queues for video processing. When you upload a video, it goes through encoding, transcoding, quality analysis, and thumbnail generation - all handled asynchronously by different workers processing from queues.
        </p>
        <p className="mt-2">
          <strong>Uber:</strong> Uses message queues for ride matching, payment processing, and driver notifications. When you request a ride, multiple services coordinate through queues to find drivers, calculate pricing, and handle payments.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// RabbitMQ Example
const amqp = require('amqplib');

// Producer
async function sendMessage(queueName, message) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  
  await channel.assertQueue(queueName, { durable: true });
  channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
    persistent: true
  });
  
  console.log('Message sent:', message);
}

// Consumer
async function consumeMessages(queueName) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  
  await channel.assertQueue(queueName, { durable: true });
  channel.consume(queueName, (msg) => {
    const message = JSON.parse(msg.content.toString());
    
    // Process message
    processMessage(message)
      .then(() => channel.ack(msg))    // Acknowledge success
      .catch(() => channel.nack(msg)); // Reject for retry
  });
}

// AWS SQS Example
const AWS = require('aws-sdk');
const sqs = new AWS.SQS();

// Producer
const params = {
  QueueUrl: 'QUEUE_URL',
  MessageBody: JSON.stringify({ userId: 123, action: 'send_email' }),
  DelaySeconds: 0,
  MessageAttributes: {
    'action': {
      DataType: 'String',
      StringValue: 'email_notification'
    }
  }
};

await sqs.sendMessage(params).promise();`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Horizontal Scaling:</strong> Add more consumers to process messages in parallel</li>
          <li><strong>Partitioning:</strong> Split queues by message type or user ID</li>
          <li><strong>Batch Processing:</strong> Process multiple messages together for efficiency</li>
          <li><strong>Consumer Scaling:</strong> Auto-scale consumers based on queue depth</li>
          <li><strong>Message Size:</strong> Keep messages small, store large data elsewhere</li>
          <li><strong>Monitoring:</strong> Track queue depth, processing rates, and failures</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Synchronous vs Asynchronous:</strong> Synchronous communication provides immediate feedback but creates tight coupling. Asynchronous messaging decouples services but adds complexity in tracking and error handling.
        </p>
        <p className="mt-2">
          <strong>At-Least-Once vs Exactly-Once:</strong> At-least-once delivery ensures messages arrive but may duplicate. Exactly-once is ideal but complex and expensive to implement.
        </p>
        <p className="mt-2">
          <strong>Pull vs Push:</strong> Pull gives consumers control over processing rate but requires polling. Push provides immediate delivery but can overwhelm consumers.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="message-queue" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not handling message processing failures properly</li>
          <li>Creating overly large messages that impact performance</li>
          <li>Not implementing proper monitoring and alerting</li>
          <li>Ignoring message ordering requirements</li>
          <li>Not planning for queue capacity limits</li>
          <li>Forgetting to implement dead letter queues</li>
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
