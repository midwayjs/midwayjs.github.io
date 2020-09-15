const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../docs/.vuepress/dist/index.html');
const content = fs.readFileSync(htmlPath).toString();

fs.writeFileSync(htmlPath, content.replace(/&gt;/g, '>').replace(/&lt;/g, '<'));