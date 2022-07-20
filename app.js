import { marked } from 'marked';
import { fs } from 'fs';

const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

const index = fs.open('./src/index.html');

console.log(index);