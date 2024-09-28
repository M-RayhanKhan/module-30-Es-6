const getAge =  (person) => person.age;
const student = {name: 'sakib', age:36};
console.log(getAge(student));

const getThird = (numbers) => numbers[2];
console.log(getThird([20, 33, 24 ,69]));

// large arrow function

const doMath = (x, y, z) =>{
    const sum = x + y + z;
    const multi = x * y * z;
    const result = sum + multi;
    return result;
}

console.log(doMath(10, 15, 20));