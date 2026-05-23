const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'client', 'src', 'modules', 'dsa-course', 'data', 'dsaTopics.js');
const content = fs.readFileSync(filePath, 'utf8');

// The file has export const topicsData = { ... }
// Let's list all keys in topicsData.
// We can use a regex to match keys at the first level of topicsData.
const keys = [];
const regex = /'([^']+)':\s*\{/g;
let match;
while ((match = regex.exec(content)) !== null) {
  keys.push(match[1]);
}

console.log(`Found ${keys.length} DSA topics:`);
console.log(keys);
