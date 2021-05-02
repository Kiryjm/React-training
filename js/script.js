// Often used JS features in React

// modern approach to variables:
// - don't use var due to hoisting
// - use const wherever it possible
// - use let when varibale had to be changed by code logic


// function context
let obj = {
  number: 5,
  sayNumber: function() {
     say = () => {
      console.log(this);
    }
    say();
  }
}

obj.sayNumber();

// filter()/map() methods must contain return statement 
// or they will produce array of undefined values!

// filter() method uses callback with condition
let names = ['Ivan', 'Ann', 'Ksenia', 'Aristotel'];

let shortNames = names.filter((name) => {
  return name.length < 5
});

console.log(shortNames); // Ivan, Ann

// map() method uses callback which modify each array element
let answers = ['IvAn', 'AnnA', 'AsksaASSOG'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

// default argument value
function fetchData(data, count = 0) {
  console.log(`Data: ${data} in the amount ${count}`)
}
fetchData('something');

// spread operator
function max (a, b, ...numbers) {
  console.log(numbers);
}
max(3, 452, 464, 2, 466, 396, 774);

// rest operator
const arr1 = [1, 3, 5],
      arr2 = [34, 5, 6];

const res = Math.max(1, ...arr1, 325, ...arr2);
console.log(res); // 325

// using rest operator to form new object with props from two objects
const avatar = 'Photo';
const user = {
  name: 'default',
  pass: 'qwerty',
  rights: 'user'
};

const admin = {
  name: 'admin',
  pass: 'root'
};

// const res = Object.assign({}, user, admin);
const res = {...user, ...admin, avatar};
console.log(res); // { name: 'admin', pass: 'root', rights: 'user', avatar: 'Photo}

// if object props names and variables names for assigning are the same
// we can left only props names, JS maps them properly
const x = 25, y = 10;

// old version
const coords = {
  x: x,
  y: y,
  calcSq: function() {
    console.log(this.x * this.y);
  }
}

// new syntax
const coords = {x, y,
  calcSq() {
    console.log(this.x * this.y);
  }
}

coords.calcSq(); // 250

console.log(coords); // { x: 25, y: 10, calcSq: [Function: calcSq] }

// destructuring
const user = {
  name: {
    first: 'Sam',
    second: 'Smith'
  },
  pass: 'qwerty',
  rights: 'user'
};

// now we have variables with names same as object properties,
// same values and structure
const {name: {first, second}, pass, rights} = user;
console.log(first, second); // Sam Smith

// Classic functions pattern: 
// passing settings object with props in function
// using default values and destructuring
function connect({
  host = 'localhost',
  port = 3000,
  user = 'default'
} = {}) {
  console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

connect({
  port: 3000,
  host: 'ephgjs'
})          // host: ephgjs, port: 3000, user: default

connect(); // host: localhost, port: 3000, user: default


// for destructuring objects use curly brackets
// for destructuring arrays use square brackets
// we can get every array element by spaces and colons in square brackets
const numbers = [3, 5, 6, 7];

const [, , c] = numbers;
console.log(c); // 6


const numbers = [[3, 5], [6, 7]];
const [[a, b], [c, d]] = numbers;
console.log(a, b, c, d);  // 3 5 6 7


const country = {
  name: 'England',
  population: 2000000,
  gender: {
    male: ['15%', '40%'],
    female: ['16%', '29%']
  }
}

const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;
console.log(maleUnder18, femAdult); // 15% 29%