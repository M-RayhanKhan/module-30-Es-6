const glass = {
    name: 'glass',
    color: 'golden',
    price: 32,
    isCleaned: true
}

const keys = Object.keys(glass);
const value = Object.values(glass)
// console.log(keys);
// console.log(value);
// console.log(glass);
// entries
const entries = Object.entries(glass);
// console.log(entries);
// array of array, two dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 32 ],
//     [ 'isCleaned', true ]
//   ]

// delete glass.isCleaned;

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 300;
delete glass.name;
console.log(glass);
