const nums = [1,2,2,3,3,3,4];

const result = nums.reduce((acc, num) => {

  acc.counts[num] = (acc.counts[num] || 0) + 1;

  if (acc.counts[num] > acc.count) {
    acc.count = acc.counts[num];
    acc.mostFrequent = num;
  }

  return acc;

}, {counts:{}, mostFrequent:null, count:0});

console.log({
  mostFrequent: result.mostFrequent,
  count: result.count
});


