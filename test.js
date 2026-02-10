const users = [
  { name: "Ravi", balance: 900 },
  { name: "Neha", balance: 1600 },
  { name: "Karan", balance: 300 },
  { name: "Pooja", balance: 2200 }
];

const eligibleUsers = users.filter(user => user.balance >= 1000);
eligibleUsers.forEach(user => console.log(`${user.name} is eligible`));