//
// MODULE-NOTES
// temp: change the prefix to '.mjs' to recognize export/import from main.js
// add <script type="module"> to make it work from index.html
// add  "type": "module", to package.json to make it work in node.js

// "export const sayHi.." this is invalid
// export const sayHi = (x) => `Hello, ${x}`;
const sayHi = (x) => `Hello, ${x}`;
export default sayHi;
export const moaa = (y) => `yoo ${y}`;
console.log("test me...");
// export {sayHi};
// export default sayHi;
// export {moaa};