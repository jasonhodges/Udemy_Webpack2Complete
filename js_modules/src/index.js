/* Calls fucntions from sum.js,
 * then prints the result.
 * Depends on sum.js to be loaded.
 */

// const sum = require('./sum'); // commonjs style
import sum from './sum'; // es2015 style
import './image_viewer';

const total = sum(10, 5);
console.log(total);