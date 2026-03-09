const orders = [
 {product:"Phone", amount:500},
 {product:"Laptop", amount:1000},
 {product:"Phone", amount:700},
 {product:"Tablet", amount:300},
 {product:"Laptop", amount:800}
];

const totals = orders.reduce((acc, order) => {

  acc[order.product] = (acc[order.product] || 0) + order.amount;

  return acc;

}, {});

const result = Object.entries(totals).reduce ((acc, [product, totals]) => {
  if (totals > acc.maxRevenue) {
    acc.maxRevenue = totals;
    acc.topProduct = product;
  }

  return acc;

}, {topProduct: null, maxRevenue: 0});

console.log(result);