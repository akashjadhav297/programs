const productPrices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newValues = productPrices.map(x=>x*2);
const newFilterValues = productPrices.filter(x=>x%2);
console.log(newValues);
console.log(newFilterValues);