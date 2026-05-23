const fs = require('fs');
const path = require('path');

const levelMap = {
  'Level1': {
    'SystemDesignIntro.jsx': 'system-design-intro',
    'ClientServer.jsx': 'client-server',
    'LatencyVsThroughput.jsx': 'latency-vs-throughput',
    'CAPTheorem.jsx': 'cap-theorem',
    'Scaling.jsx': 'scaling'
  },
  'Level2': {
    'LoadBalancer.jsx': 'load-balancer',
    'Databases.jsx': 'databases',
    'Caching.jsx': 'caching',
    'CDN.jsx': 'cdn',
    'MessageQueue.jsx': 'message-queue'
  },
  'Level3': {
    'Microservices.jsx': 'microservices',
    'APIGateway.jsx': 'api-gateway',
    'RateLimiting.jsx': 'rate-limiting',
    'Sharding.jsx': 'sharding',
    'ConsistentHashing.jsx': 'consistent-hashing'
  },
  'Level4': {
    'WhatsApp.jsx': 'whatsapp',
    'Instagram.jsx': 'instagram',
    'Netflix.jsx': 'netflix',
    'URLShortener.jsx': 'url-shortener',
    'Uber.jsx': 'uber'
  }
};

const pagesDir = path.join(__dirname, '..', 'client', 'src', 'modules', 'system-design-course', 'pages');

for (const [level, files] of Object.entries(levelMap)) {
  const levelDir = path.join(pagesDir, level);

  for (const [filename, topicId] of Object.entries(files)) {
    const filePath = path.join(levelDir, filename);
    if (!fs.existsSync(filePath)) {
      console.error(`File does not exist: ${filePath}`);
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Add import if not present
    if (!content.includes('SdResources')) {
      const firstImportIdx = content.indexOf('import');
      if (firstImportIdx !== -1) {
        const endOfLine = content.indexOf('\n', firstImportIdx);
        content = content.substring(0, endOfLine + 1) + `import SdResources from '../../components/SdResources';\n` + content.substring(endOfLine + 1);
      } else {
        content = `import SdResources from '../../components/SdResources';\n` + content;
      }
    }

    // 2. Add <SdResources topicId="..." /> right before the interview SDCard
    if (!content.includes('<SdResources')) {
      // Let's find: {/* INTERVIEW */}
      const interviewCommentStr = '{/* INTERVIEW */}';
      let interviewIdx = content.indexOf(interviewCommentStr);
      
      if (interviewIdx === -1) {
        // Fallback: search for h2 Interview Questions
        interviewIdx = content.indexOf('<h2>Interview Questions</h2>');
      }

      if (interviewIdx !== -1) {
        // Let's back up to find '<SDCard' that starts before the comment or header
        const sdcardStr = '<SDCard>';
        const sub = content.substring(0, interviewIdx);
        const lastCardIdx = sub.lastIndexOf(sdcardStr);

        if (lastCardIdx !== -1) {
          content = content.substring(0, lastCardIdx) + 
                    `<SdResources topicId="${topicId}" />\n\n      ` + 
                    content.substring(lastCardIdx);
        } else {
          content = content.substring(0, interviewIdx) + 
                    `<SdResources topicId="${topicId}" />\n\n      ` + 
                    content.substring(interviewIdx);
        }
      } else {
        // Fallback: insert before the last closing </div> of the main component
        const lastDivIdx = content.lastIndexOf('</div>');
        if (lastDivIdx !== -1) {
          content = content.substring(0, lastDivIdx) + 
                    `<SdResources topicId="${topicId}" />\n      ` + 
                    content.substring(lastDivIdx);
        }
      }
      console.log(`Successfully added SdResources to ${level}/${filename}`);
    } else {
      console.log(`SdResources already present in ${level}/${filename}`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
  }
}

console.log('Finished updating all System Design pages!');
