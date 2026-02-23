const objectTransformation = (users) => {
  const result = [];
  for (const user of users) {
    result.push({ name: user.name, eligible: user.balance >= 1000 });
  }
  return result;
};

console.log(objectTransformation(users));