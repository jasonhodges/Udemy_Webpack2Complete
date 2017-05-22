/* Calls fucntions from sum.js,
 * then prints the result.
 * Depends on sum.js to be loaded.
 */

const sum = require('./sum');

const total = sum(10, 5);
console.log(total);