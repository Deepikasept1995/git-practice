const users = [
  { name: "Ravi", balance: 900 },
  { name: "Neha", balance: 1600 },
  { name: "Karan", balance: 300 }
];
const updatedUsers = users.map(user => ({
  ...user,
  eligible: user.balance >= 1000
}));

console.log(updatedUsers);