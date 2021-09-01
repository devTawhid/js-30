// ## Array Cardio Day 2
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
    ];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
    ];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
// let isAdult = people.some(function (person){
//     if(people.name = 'wes'){
//         console.log(people.name)
//     }
//     console.log(person);
// })
const isAdult = people.some(person => (Date() - person.year > 19) ? 0 : 1);
// console.log(isAdult);

const isEvery = people.every(person => (Date() - person.year > 19) ? 1 : 0);
// console.log(isEvery);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// let is = comments.find(comment => (comment.id === 542328) ? comment.text : 0); // find don't return anything. So console.log is not needed
// console.log(is);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
let index = comments.findIndex(comment => (comment.id === 823423) ? comment : 0);
console.log(index);
// comments.splice(index, 1);
// console.table(comments);
// let newArr = [
//     ...comments.splice(index, 1),
// ];
// console.table(newArr);

// let newArr = [
//     ...comments.splice(0, index),
//     ...comments.splice(index + 1),
// ];
comments.slice()
let newArr = [
    ...comments.slice( index),
    ...comments.slice(index + 1),
];

// console.table(newArr);

