import fs from 'node:fs';
import path from 'node:path';

const src = path.join(process.cwd(), 'web');
const dest = path.join(process.cwd(), 'dist');

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });

for (const file of fs.readdirSync(src)) {
  fs.copyFileSync(path.join(src, file), path.join(dest, file));
}

console.log('Web assets copied from web/ to dist/');
