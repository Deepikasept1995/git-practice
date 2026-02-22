const orders = [
  { id: 1, user: "Ravi", amount: 1200, status: "DELIVERED" },
  { id: 2, user: "Neha", amount: 800, status: "PENDING" },
  { id: 3, user: "Karan", amount: 2200, status: "DELIVERED" },
  { id: 4, user: "Pooja", amount: 500, status: "DELIVERED" },
];

const summary = orders
.reduce ((acc, {status, amount}) => {
  if (!acc[status]) {
    acc[status] = { totalAmount: 0 };
  }
  acc[status].totalAmount += amount;
  return acc;
}, {});

const topStatus = Object.entries(summary).reduce((max, [status, { totalAmount }]) => {
  if (totalAmount > max.totalAmount) {
    return { status, totalAmount };
  }
  return max;
}, { status: null, totalAmount: 0 });

console.log(topStatus);