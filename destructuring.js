// object destruction
const muslime = {
    name: 'R?',
    age: 30,
    phone: '01826059466'
}
const phone = muslime.phone;
// console.log(phone);

const numbers = [7, 10];
[x, y] = numbers;
// console.log(x, y);

function doubleThem(a, b){
    return[a*2, b*2];
}
const [first, second] = doubleThem(6,9);
console.log(first, second);
