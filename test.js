const orders = [
  { id: 1, user: "Ravi", amount: 1200, status: "DELIVERED" },
  { id: 2, user: "Neha", amount: 800, status: "PENDING" },
  { id: 3, user: "Karan", amount: 2200, status: "DELIVERED" },
  { id: 4, user: "Pooja", amount: 500, status: "DELIVERED" },
];

const STATUS = { DELIVERED: "DELIVERED" };
const deliveredRevenue = orders
  .filter(({ status }) => status === STATUS.DELIVERED)
  .reduce((total, { amount }) => total + amount, 0);
  
console.log(`Total Delivered Revenue: ${deliveredRevenue}`);