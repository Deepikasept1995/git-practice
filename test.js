const orders = [
 {user:"Ravi", amount:500},
 {user:"Neha", amount:1200},
 {user:"Ravi", amount:700},
 {user:"Amit", amount:2000},
 {user:"Neha", amount:300}
];

const result = orders
  .reduce ((acc, order) => {
      acc.totalOrders++;
      acc.totalReveue += order.amount;
      if (order.amount > acc.highestOrder){
        acc.highestOrder = order.amount
      }

    return acc;

}, {totalOrders: 0, highestOrder: 0, totalReveue: 0});

result.averageOrderValue = result.totalReveue /result.totalOrders;

console.log(result);





  


