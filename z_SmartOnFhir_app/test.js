import path from 'path';
const __dirname = path.resolve(path.dirname('./'));


import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);



console.log("z_dir: " + __dirname)
console.log("z_file: " + __filename);