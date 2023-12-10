//array

const myArr = [1, 2, 3,4,5];
// console.log(myArr[1]);

// methods
// myArr.push(6)
// myArr.push(7)

// myArr.unshift(9);
// myArr.shift();

const newArr = myArr.join();  // this convert the array values as a string so newArr is now a string as "12345"
// console.log(myArr);
// console.log(newArr[0]);
// console.log(typeof(newArr));
// console.log(typeof(myArr));      // myArr consist of numbers but the type is object.

//slice , splice


const myArr1 = myArr.slice(1, 3);  // slice will return the value in the given argument range excluding the last one.
console.log('1 ' + myArr1);
console.log("myArr "+ myArr);

const myArr2 = myArr.splice(1,3);  // splice will return the value in the given  argument range including the given args but also resize the original array too in the same range.
console.log('2 ' + myArr2);
console.log("myAee "+ myArr);

