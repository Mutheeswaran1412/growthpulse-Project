// Script to update footer colors across all service pages
const fs = require('fs');
const path = require('path');

const files = [
  'digital-marketing.html',
  'software-marketing.html', 
  'technical-development.html',
  'learning-development.html',
  'account-management.html',
  'event-management.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update footer colors
    content = content.replace(/#00ff88/g, '#667eea');
    content = content.replace(/#00cc6a/g, '#764ba2');
    content = content.replace(/background: #667eea;/g, 'background: linear-gradient(45deg, #667eea, #764ba2);');
    content = content.replace(/color: #000;/g, 'color: #fff;');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});