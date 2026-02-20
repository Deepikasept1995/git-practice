const orders = [
  {id:1, amount:500, status:"DELIVERED"},
  {id:2, amount:2000, status:"DELIVERED"},
  {id:3, amount:1500, status:"PENDING"},
  {id:4, amount:3000, status:"DELIVERED"},
];

const result = orders.reduce(
  (acc, order) => {
    if (order.status === "DELIVERED") {
      acc.totalamount += order.amount;
      acc.count += 1;
    }
    return acc;
  },
  { totalamount: 0, count: 0 }
);

const average = result.count > 0 ? (result.totalamount / result.count).toFixed(2) : 0.00;

console.log({status: result.count > 0 ? "DELIVERED" : "PENDING", average: average});
