import React from 'react';
import SdResources from '../../components/SdResources';
import SDCard from '../../components/SDCard';
import SDAccordion from '../../components/SDAccordion';

export default function Uber() {
  const interviewQuestions = [
    {
      question: "How would you design Uber's ride-sharing system?",
      answer: "Use geospatial indexing for driver/rider matching, real-time location tracking with WebSockets, dynamic pricing based on supply/demand, and microservices for different functionalities. Implement ETA calculation, route optimization, and payment processing."
    },
    {
      question: "How does Uber match riders with drivers?",
      answer: "Use geospatial indexing (quadtree/geohash) to find nearby drivers, implement matching algorithms based on ETA, rating, and availability, use real-time location updates, and handle surge pricing dynamically."
    },
    {
      question: "How does Uber handle real-time location tracking?",
      answer: "Use GPS coordinates with WebSocket connections, implement location prediction algorithms, update driver positions frequently, use efficient geospatial databases, and handle network connectivity issues gracefully."
    }
  ];

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <SDCard>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Uber System Design</h1>
          <p className="text-sm mt-2 opacity-90">Real-time ride-sharing platform</p>
        </div>
      </SDCard>

      {/* THINKING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Thinking</h2>
        <p>
          Uber is like a smart taxi dispatch system that matches passengers with nearby drivers instantly. When you request a ride, system finds closest available drivers, calculates ETA, shows you real-time location, and handles payment automatically. It's like having a personal dispatcher who knows where all drivers are and finds the best match for your trip.
        </p>
      </SDCard>

      {/* DESCRIPTION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>
          Uber is a real-time ride-sharing platform connecting riders with drivers. The system must handle geospatial queries, real-time location tracking, dynamic pricing, route optimization, and payment processing. Key challenges include matching algorithms, ETA accuracy, surge pricing, and handling millions of concurrent location updates.
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Geospatial Matching:</strong> Find nearby drivers efficiently</li>
          <li><strong>Real-time Tracking:</strong> Live location updates for drivers/riders</li>
          <li><strong>Dynamic Pricing:</strong> Surge pricing based on supply/demand</li>
          <li><strong>Route Optimization:</strong> Efficient route calculation and navigation</li>
          <li><strong>Payment Processing:</strong> Secure and fast payment handling</li>
        </ul>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
          <span className="text-yellow-800 dark:text-yellow-200">Important Insight:</span> 
          <span className="text-yellow-700 dark:text-yellow-300"> Uber processes over 20 million trips daily with average pickup time under 5 minutes.</span>
        </div>
      </SDCard>

      {/* ARCHITECTURE */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">System Architecture</h2>
        <pre className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`[Rider App] --> [API Gateway] --> [Ride Service] --> [Matching Engine]
       |               |                   |                  |
       |               v                   v                  v
       |          [Location Service] --> [Geospatial DB] --> [Driver Service]
       |               |                   |                  |
       |               v                   v                  v
       |          [Pricing Service] --> [Surge Algorithm] --> [Payment Service]
       |               |                   |                  |
       |               v                   v                  v
       |          [Notification Service] --> [Push Notifications] --> [Analytics]

Real-time Data Flow:
1. Rider requests ride with pickup location
2. Geospatial query finds nearby drivers
3. Matching algorithm selects best driver
4. Real-time location tracking via WebSocket
5. Dynamic pricing based on demand
6. Route calculation and navigation
7. Payment processing and rating`}
        </pre>
      </SDCard>

      {/* REAL WORLD */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Real World Implementation</h2>
        <p>
          <strong>Technology Stack:</strong> Uber uses microservices architecture, Go for high-performance services, PostgreSQL for relational data, Redis for caching, and custom geospatial databases. Uses Kafka for real-time data streaming.
        </p>
        <p className="mt-2">
          <strong>Infrastructure:</strong> Global data centers with real-time processing capabilities. Uses sophisticated geospatial indexing and machine learning for matching and pricing algorithms.
        </p>
        <p className="mt-2">
          <strong>Performance:</strong> Sub-second matching, accurate ETAs, real-time location updates, and 99.9% availability. Handles millions of concurrent users and location updates.
        </p>
      </SDCard>

      {/* IMPLEMENTATION */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Implementation</h2>
        <pre className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Ride Matching Service
class RideMatchingService {
  constructor() {
    this.geospatialIndex = new GeospatialIndex();
    this.driverService = new DriverService();
    this.pricingService = new PricingService();
  }

  async findBestDriver(pickupLocation, rideType) {
    // Find nearby drivers using geospatial index
    const nearbyDrivers = await this.geospatialIndex.findNearby(
      pickupLocation, 
      5000 // 5km radius
    );

    // Filter available drivers
    const availableDrivers = nearbyDrivers.filter(driver => 
      driver.isAvailable && 
      driver.vehicleType === rideType
    );

    // Calculate ETA for each driver
    const driversWithETA = await Promise.all(
      availableDrivers.map(async driver => ({
        driver,
        eta: await this.calculateETA(driver.location, pickupLocation)
      }))
    );

    // Sort by ETA, rating, and other factors
    return this.rankDrivers(driversWithETA);
  }

  async calculateETA(driverLocation, pickupLocation) {
    // Use real-time traffic data
    const trafficData = await this.trafficService.getCurrentData();
    
    // Calculate route considering traffic
    const route = await this.routingService.calculateRoute(
      driverLocation,
      pickupLocation,
      trafficData
    );

    return route.estimatedTime;
  }
}

// Real-time Location Tracking
class LocationTrackingService {
  constructor() {
    this.websocketConnections = new Map();
    this.locationDatabase = new LocationDatabase();
  }

  async updateDriverLocation(driverId, location) {
    // Update database
    await this.locationDatabase.update(driverId, {
      location,
      timestamp: new Date(),
      accuracy: location.accuracy
    });

    // Update geospatial index
    await this.geospatialIndex.update(driverId, location);

    // Broadcast to nearby riders
    await this.broadcastToNearbyRiders(driverId, location);
  }

  async broadcastToNearbyRiders(driverId, location) {
    const nearbyRiders = await this.geospatialIndex.findNearbyRiders(location, 10000);
    
    nearbyRiders.forEach(rider => {
      const ws = this.websocketConnections.get(rider.id);
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
          type: 'driver_location_update',
          driverId,
          location
        }));
      }
    });
  }
}`}
        </pre>
      </SDCard>

      {/* SCALING */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Scaling & Optimization</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Geospatial Indexing:</strong> Quadtree/geohash for efficient location queries</li>
          <li><strong>Real-time Updates:</strong> WebSocket connections with connection pooling</li>
          <li><strong>Database Sharding:</strong> Geographic partitioning of location data</li>
          <li><strong>Caching:</strong> Redis for frequent queries and session data</li>
          <li><strong>Load Balancing:</strong> Distribute matching requests across servers</li>
          <li><strong>Predictive Caching:</strong> Pre-load data for high-demand areas</li>
        </ul>
      </SDCard>

      {/* TRADE-OFFS */}
      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Trade-offs</h2>
        <p>
          <strong>Matching Accuracy vs Speed:</strong> Complex matching algorithms find better matches but take longer. Simple algorithms are faster but may not find optimal matches.
        </p>
        <p className="mt-2">
          <strong>Location Update Frequency vs Battery:</strong> Frequent updates provide accurate tracking but drain driver battery. Balance based on speed and accuracy requirements.
        </p>
        <p className="mt-2">
          <strong>Surge Pricing vs User Experience:</strong> Dynamic pricing balances supply/demand but may frustrate users. Transparent communication helps manage expectations.
        </p>
      </SDCard>

      {/* MISTAKES */}
      <SdResources topicId="uber" />

      <SDCard>
        <h2 className="text-xl font-semibold mb-2">Common Mistakes</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Not using proper geospatial indexing for location queries</li>
          <li>Ignoring real-time requirements and using polling</li>
          <li>Not planning for network connectivity issues</li>
          <li>Poor handling of surge pricing algorithms</li>
          <li>Not implementing proper ETA calculation with traffic data</li>
          <li>Ignoring payment security and fraud prevention</li>
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
