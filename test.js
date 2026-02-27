const orders = [
  { id: 1, user: "Ravi", amount: 1200, status: "DELIVERED", items: 3, createdAt: "2026-02-25T10:10:00+05:30" },
  { id: 2, user: "Neha", amount: 800, status: "PENDING", items: 1, createdAt: "2026-02-25T11:20:00+05:30" },
  { id: 3, user: "Ravi", amount: 2000, status: "DELIVERED", items: 4, createdAt: "2026-02-26T09:15:00+05:30" },
  { id: 4, user: "Karan", amount: 500, status: "CANCELLED", items: 2, createdAt: "2026-02-26T21:40:00+05:30" },
  { id: 5, user: "Neha", amount: 1500, status: "DELIVERED", items: 2, createdAt: "2026-02-27T08:05:00+05:30" },
  { id: 6, user: "Pooja", amount: 2600, status: "DELIVERED", items: 5, createdAt: "2026-02-27T19:30:00+05:30" }
];

function topUserToday(orders) {
    const today = "2026-02-27"; // safer for testing

    return orders.reduce((acc, order) => {

        if (order.createdAt.startsWith(today) && order.status === "DELIVERED") {

            // 1️⃣ Track revenue per user
            acc[order.user] = (acc[order.user] || 0) + order.amount;

            // 2️⃣ Check if this user is now highest
            if (acc[order.user] > acc.revenue) {
                acc.user = order.user;
                acc.revenue = acc[order.user];
            }
        }

        return acc;

    }, { user: "", revenue: 0 });
}

console.log(topUserToday(orders));
