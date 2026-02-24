const a = { x: 1, nested: { y: 10 } };
const b = { ...a };

b.nested.y = 999;

console.log(a.nested.y);