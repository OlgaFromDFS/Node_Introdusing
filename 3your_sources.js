require('dotenv').config();
const fs = require('fs');

const filePath = process.env.FILE;

const content = fs.readFileSync(filePath, 'utf-8');

console.log(content);
