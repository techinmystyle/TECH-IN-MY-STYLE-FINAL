import { Routes, Route, Navigate } from 'react-router-dom';
import { DarkModeProvider } from './contexts/SDDarkModeContext';
import SystemDesignHome from './pages/SystemDesignHome';
import SDNavbar from './components/SDNavbar';
import SDFooter from './components/SDFooter';
import './styles/system-design.css';

// Level 1 Components
import SystemDesignIntro from './pages/Level1/SystemDesignIntro';
import ClientServer from './pages/Level1/ClientServer';
import LatencyVsThroughput from './pages/Level1/LatencyVsThroughput';
import CAPTheorem from './pages/Level1/CAPTheorem';
import Scaling from './pages/Level1/Scaling';

// Level 2 Components
import LoadBalancer from './pages/Level2/LoadBalancer';
import Databases from './pages/Level2/Databases';
import Caching from './pages/Level2/Caching';
import CDN from './pages/Level2/CDN';
import MessageQueue from './pages/Level2/MessageQueue';

// Level 3 Components
import Microservices from './pages/Level3/Microservices';
import APIGateway from './pages/Level3/APIGateway';
import RateLimiting from './pages/Level3/RateLimiting';
import Sharding from './pages/Level3/Sharding';
import ConsistentHashing from './pages/Level3/ConsistentHashing';

// Level 4 Components
import WhatsApp from './pages/Level4/WhatsApp';
import Instagram from './pages/Level4/Instagram';
import Netflix from './pages/Level4/Netflix';
import URLShortener from './pages/Level4/URLShortener';
import Uber from './pages/Level4/Uber';

export default function SystemDesignRoutes() {
  return (
    <div className="system-design-course-root">
      <DarkModeProvider>
        <SDNavbar />
        <div className="sd-course min-h-screen transition-colors flex flex-col">
          <div className="flex-1">
            <Routes>
              <Route index element={<SystemDesignHome />} />
              
              {/* Level 1 Routes */}
              <Route path="level1/system-design-intro" element={<SystemDesignIntro />} />
              <Route path="level1/client-server" element={<ClientServer />} />
              <Route path="level1/latency-vs-throughput" element={<LatencyVsThroughput />} />
              <Route path="level1/cap-theorem" element={<CAPTheorem />} />
              <Route path="level1/scaling" element={<Scaling />} />
              
              {/* Level 2 Routes */}
              <Route path="level2/load-balancer" element={<LoadBalancer />} />
              <Route path="level2/databases" element={<Databases />} />
              <Route path="level2/caching" element={<Caching />} />
              <Route path="level2/cdn" element={<CDN />} />
              <Route path="level2/message-queue" element={<MessageQueue />} />
              
              {/* Level 3 Routes */}
              <Route path="level3/microservices" element={<Microservices />} />
              <Route path="level3/api-gateway" element={<APIGateway />} />
              <Route path="level3/rate-limiting" element={<RateLimiting />} />
              <Route path="level3/sharding" element={<Sharding />} />
              <Route path="level3/consistent-hashing" element={<ConsistentHashing />} />
              
              {/* Level 4 Routes */}
              <Route path="level4/whatsapp" element={<WhatsApp />} />
              <Route path="level4/instagram" element={<Instagram />} />
              <Route path="level4/netflix" element={<Netflix />} />
              <Route path="level4/url-shortener" element={<URLShortener />} />
              <Route path="level4/uber" element={<Uber />} />
              <Route path="*" element={<Navigate to="." replace />} />
            </Routes>
          </div>
          <SDFooter />
        </div>
      </DarkModeProvider>
    </div>
  );
}
