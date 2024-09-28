const multiply = (x, y, z) => x * y * z;
// console.log(multiply(5,5,5));

const sentence = `I am web developer.
I love to code.
I love to eat biryani.
`
// console.log(sentence);

const defaultArrow = (a, b = 20) => {
    return a + b
}
// console.log(defaultArrow(10));


const friends = ['AbuRayhan', 'nasir', 'rayhanKhan', 'forhad', 'tapazzul'];
const emptyArray = [];

const friendName = (friends) => {
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            emptyArray.push(friend)
        }
    }
    return emptyArray;
}
// console.log(friendName(friends));


const arrowFunction = (a, b, c, d) => {
    const square = a * b * c * d;
    const sum = a + b + c + d;
    const totalSum = sum + square;
    const avg = (totalSum / sum);
    return avg.toFixed(2);
}
// console.log(arrowFunction(5, 8, 11, 10));

const number1 = [12, 20 ,14, 35, 20,50]
const number2 = [12, 20 ,14,60, 35, 20,50];

const arrowSpread =(number1, number2)=>{
 const maxNum = [...number1, ...number2];
 const result = Math.max(...maxNum);
 return result;
}
// console.log(arrowSpread(number1, number2));