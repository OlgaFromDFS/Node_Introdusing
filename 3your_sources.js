require('dotenv').config();

const URL = process.env.FILE;

const fs = require('fs');

const content = fs.readFileSync(URL, 'utf-8');

console.log(content);
