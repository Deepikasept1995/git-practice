const orders = [
 {user:"Ravi", amount:500},
 {user:"Neha", amount:1200},
 {user:"Ravi", amount:700},
 {user:"Amit", amount:2000},
 {user:"Neha", amount:300}
];

const result = orders.reduce((acc, order) => { 
  acc[order.user] = (acc[order.user] || 0) + order.amount;
  return acc;

}, {});

console.log (result);





  


