import { marked } from 'marked';
import * as fs from 'fs';

const html = marked.parse(./src/chunli.md);

// const index = fs.open('./src/index.html', (err) => {
//     if (err) throw err;
//     console.log('successfully opened /src/index.html');
//   });

console.log(html);