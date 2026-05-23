const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'client', 'src', 'modules', 'database-course', 'data', 'topicContent.js');
const content = fs.readFileSync(filePath, 'utf8');

// Find keys
const keys = [];
const regex = /^\s*'([^']+)':\s*\{/gm;
let match;
while ((match = regex.exec(content)) !== null) {
  keys.push(match[1]);
}

console.log(`Found ${keys.length} Database topics:`);
console.log(keys);
