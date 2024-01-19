require('dotenv').config();

const filePath = process.env.FILE;

const fs = require('fs');

const content = fs.readFileSync(filePath, 'utf-8');

console.log(content);
