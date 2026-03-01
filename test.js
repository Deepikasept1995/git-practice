const orders = [
  { id: 1, amount: 1200, status: "DELIVERED" },
  { id: 2, amount: 800, status: "PENDING" },
  { id: 3, amount: 2500, status: "DELIVERED" },
  { id: 4, amount: 400, status: "DELIVERED" }
];

const result = orders
    .reduce ((acc, order) => {
        acc.totalOrders++;
        if (order.amount > acc.highestOrder) {
            acc.highestOrder = order.amount;
        }
        if (!acc.statuses[order.status]) {
            acc.statuses[order.status] = { count: 0, revenue: 0 };
        }
        acc.statuses[order.status].count += 1;
        acc.statuses[order.status].revenue += order.amount;
        return acc;
    }, { totalOrders: 0, statuses: {}, highestOrder: 0 });

console.log(result);