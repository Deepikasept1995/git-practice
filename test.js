function fetchOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, user: "Ravi", amount: 200, status: "DELIVERED" },
        { id: 2, user: "Neha", amount: 500, status: "PENDING" },
        { id: 3, user: "Ravi", amount: 400, status: "DELIVERED" },
        { id: 4, user: "Amit", amount: 300, status: "CANCELLED" },
        { id: 5, user: "Neha", amount: 250, status: "DELIVERED" },
        { id: 6, user: "Amit", amount: 700, status: "DELIVERED" }
      ]);
    }, 1000);
  });
}

function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Ravi", age: 23, city: "Delhi" },
        { name: "Neha", age: 17, city: "Mumbai" },
        { name: "Amit", age: 30, city: "Bangalore" }
      ]);
    }, 1000);
  });
}

async function processData() {
  try {
    const orders = await fetchOrders();
    const users = await fetchUsers();
    const totalOrders = orders.length;
    const totalRevenue =  orders.reduce ((sum, order) => sum + order.amount);
    const statusCount = orders.reduce ((acc, order) => {acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    },{});  
    const revenuePerUser = orders.reduce((acc, order) => {acc[order.user] = (acc[order.user] || 0) + order.amount;
    return acc;
    },{});
    const topSpender = Object.keys(revenuePerUser).reduce((top, user) => {
      return revenuePerUser[user] > revenuePerUser[top] ? user : top;
    });
    const adultUsers = users.filter ((user) => user.age >= 18)
    .map((user) => `${user.name}-${user.city}`);
    
    console.log(`Total orders: ${totalOrders}`);
    console.log(`Total orders: ${totalRevenue}`);
    console.log("Status Counts:", statusCount);
    console.log("User Totals:", revenuePerUser);
    console.log("Top Spender:",topSpender);
    console.log("Adult Users:",adultUsers);

  } catch (error) {
    console.log("Error", error);
  }
}
processData();

//Total orders: 6
//Delivered revenue: 1550
//Status counts: { DELIVERED: 4, PENDING: 1, CANCELLED: 1 }
//User totals: { Ravi: 600, Neha: 750, Amit: 1000 }
//Top spender: Amit
//Adult users: [ 'Ravi-Delhi', 'Amit-Bangalore' ]