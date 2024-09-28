const max = Math.max(5, 32, 12, 35, 10, 80, 10, 14, 71);
// console.log(max);
const numbers = [10,  20 ,30 ,100,50 ,60, 70, 80 ,90];
const result = Math.max(...numbers);
// console.log(result);
// console.log(...numbers);


const friends = [7, 11, 10];
bondhu = friends;
// bondhu.push(9);
// console.log(bondhu);
// console.log(friends);

const dosto = [...friends];
// console.log(dosto);
friends.push(100)
// console.log(dosto);
// console.log(friends);

const str = 'rayhan';
const chars =   [...str];
console.log(chars);