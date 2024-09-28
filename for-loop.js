const numbers = [1, 2, 3, 4, 5, 6];
for (const num of numbers) {
//    console.log(num);
}

const character = 'character';
for (const char of character) {
    // console.log(char);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 32,
    isCleaned: true
}

const keys = Object.keys(glass);

for (const key of keys) {
    const value = glass[key];
    // console.log(key, value);
}

const entries = Object.entries(glass);
for (const key of entries) {
  console.log(key[0]);
}