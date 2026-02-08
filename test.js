const orders = [
  { order_id: "O1", status: "DELIVERED", amount: 500 },
  { order_id: "O2", status: "FAILED", amount: 300 },
  { order_id: "O3", status: "DELIVERED", amount: 700 },
  { order_id: "O4", status: "FAILED", amount: 200 }
];

const result = orders.reduce ((acc, order) => {
  return {
    ...acc,
    [order.status]: {
      count : (acc[order.status]?.count || 0) + 1,
      totalAmount : (acc[order.status]?.totalAmount || 0) + order.amount
    }
  }
},{});
console.log(result);