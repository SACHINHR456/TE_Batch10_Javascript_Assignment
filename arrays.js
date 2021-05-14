const cloths = ['nylon', 'whool', 'cotton'];

function iterate(cloths) {
  console.log(cloths);
}

cloths.forEach(iterate);

console.log("isArray() method");
console.log(Array.isArray(cloths));

console.log("includes() method");
console.log(cloths.includes('pol'));

console.log("push() method");
console.log(cloths.push('silk'));

console.log("pop() method");
console.log(cloths.pop());

console.log("Shift() method");
console.log(cloths.shift());

console.log("UnShift() method");
console.log(cloths.unshift('nylon'));

console.log("Splice() method");
cloths.splice(1,0,'silk');
console.log(cloths);

console.log("Slice() method");
console.log(cloths.slice(2,4));

console.log("Join() method");
console.log(cloths.join());

console.log("IndexOf() method");
console.log(cloths.indexOf('whool',1));
console.log(cloths.indexOf('polyester'));

console.log("Map() method");
console.log(cloths.map(x => x+'!'));

console.log("Filter() method");
console.log(cloths.filter(word => word.length>4));