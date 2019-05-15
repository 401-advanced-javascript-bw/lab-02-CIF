'use strict';

// const List = require('./list-constructor.js');
const List = require('./list.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
console.log(stuff);
let last = stuff.pop();
console.log(last);
