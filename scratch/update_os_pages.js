const fs = require('fs');
const path = require('path');

const filesMap = {
  'OsIntroduction.jsx': 'introduction',
  'OsProcessManagement.jsx': 'process-management',
  'OsThreadConcurrency.jsx': 'threads',
  'OsMemoryManagement.jsx': 'memory',
  'OsFileSystems.jsx': 'file-systems',
  'OsIOSystems.jsx': 'io-systems',
  'OsSecurity.jsx': 'security',
  'OsRealWorldApps.jsx': 'real-world',
  'OsInterviewPrep.jsx': 'interview-prep',
  'OsProjects.jsx': 'projects'
};

const pagesDir = path.join(__dirname, '..', 'client', 'src', 'modules', 'os-course', 'pages');

for (const [filename, topicId] of Object.entries(filesMap)) {
  const filePath = path.join(pagesDir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File does not exist: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add import if not present
  if (!content.includes('OsResources')) {
    // Insert after the first import line
    const firstImportIdx = content.indexOf('import');
    if (firstImportIdx !== -1) {
      const endOfLine = content.indexOf('\n', firstImportIdx);
      content = content.substring(0, endOfLine + 1) + `import OsResources from '../components/OsResources';\n` + content.substring(endOfLine + 1);
    } else {
      content = `import OsResources from '../components/OsResources';\n` + content;
    }
  }

  // 2. Add <OsResources topicId="..." />
  if (!content.includes('<OsResources')) {
    const interviewCornerStr = '<h2>Interview Corner</h2>';
    const interviewCornerIdx = content.indexOf(interviewCornerStr);

    if (interviewCornerIdx !== -1) {
      // Find the start of the section containing the interview corner
      // We can search backwards from interviewCornerIdx to find the nearest '<section' or similar,
      // or we can just replace '<section className="module-section">\n                <h2>Interview Corner</h2>'
      // Let's find '<section className="module-section">' that occurs before interviewCornerIdx
      const sectionStr = '<section className="module-section">';
      const sub = content.substring(0, interviewCornerIdx);
      const lastSectionIdx = sub.lastIndexOf(sectionStr);

      if (lastSectionIdx !== -1) {
        content = content.substring(0, lastSectionIdx) + 
                  `<OsResources topicId="${topicId}" />\n\n            ` + 
                  content.substring(lastSectionIdx);
      } else {
        // Fallback: insert right before interviewCornerIdx
        content = content.substring(0, interviewCornerIdx) + 
                  `<OsResources topicId="${topicId}" />\n\n                ` + 
                  content.substring(interviewCornerIdx);
      }
    } else {
      // For files without Interview Corner, insert before the last closing </div> of the main component
      const lastDivIdx = content.lastIndexOf('</div>');
      if (lastDivIdx !== -1) {
        content = content.substring(0, lastDivIdx) + 
                  `<OsResources topicId="${topicId}" />\n        ` + 
                  content.substring(lastDivIdx);
      } else {
        console.error(`Could not find closing div for ${filename}`);
      }
    }
    console.log(`Successfully added OsResources to ${filename}`);
  } else {
    console.log(`OsResources already present in ${filename}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Finished updating all OS pages!');
