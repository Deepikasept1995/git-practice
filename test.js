const transactions = [
  { id: 1, user: "Ravi", type: "CREDIT", amount: 500 },
  { id: 2, user: "Ravi", type: "DEBIT", amount: 200 },
  { id: 3, user: "Neha", type: "CREDIT", amount: 800 },
  { id: 4, user: "Ravi", type: "CREDIT", amount: 700 },
  { id: 5, user: "Neha", type: "DEBIT", amount: 100 },
];

const result = transactions
    .reduce (( acc, { user, type, amount }) => {
        if (!acc.netByUser[user]) {
            acc.netByUser[user] = 0;
        }
        if (type === "CREDIT") {
            acc.netByUser[user] += amount;
        } else if (type === "DEBIT") {
            acc.netByUser[user] -= amount;
        }
        if (acc.netByUser[user] > acc.maxAmount) {
            acc.maxAmount = acc.netByUser[user];
            acc.richestUser = user;
        }
        return acc;
    }, { netByUser: {}, richestUser: null, maxAmount: 0 });

console.log({ netByUser: result.netByUser, richestUser: result.richestUser });