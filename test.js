const orders = [
  { id: 1, amount: 500, status: "DELIVERED" },
  { id: 2, amount: 1200, status: "PENDING" },
  { id: 3, amount: 2200, status: "DELIVERED" },
  { id: 4, amount: 800, status: "CANCELLED" }
];

const totalDeliveredAmount = orders
  .filter(order => order.status === "DELIVERED")
  .reduce((sum, order) => sum + order.amount, 0);

console.log(`Total Delivered Amount: ${totalDeliveredAmount}`);
