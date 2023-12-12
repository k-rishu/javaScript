// const tinderUser = new Object()  // singleton way of declarying object 
const tinderUser = {}  //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Pintu"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "random@mail.com",
    fullname : {
        userFullName : {
            firstname : "Pintu",
            lastname : "chimkanta"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname);
// console.log(regularUser.fullname?.userFullName.firstname); // the '?' can be used to cehck if the attribute exists for the object.


//merging two or more objcets.

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

// const obj3 = Object.assign({}, obj1, obj2);  //way 1 
obj3 = {...obj1, ...obj2}  // using spread operator.

// obj4 = [...obj1, ...obj2]  //  ERROR :  obj1 is not iterable
// console.log(obj3);


const user = [
    {
        id : 1,
        email : "pintu@mail.com"
    },{
        id : 1,
        email : "pintu@mail.com"
    },{
        id : 1,
        email : "pintu@mail.com"
    },{
        id : 1,
        email : "pintu@mail.com"
    }
]

// console.log(user[2]);

console.log(Object.keys(tinderUser));  // this method will return the keys of the given object in an arrays,
console.log(Object.values(tinderUser));  // simarly we can get the array of values of object.
console.log(Object.entries(tinderUser));  // this will return [ [ 'id', '123abc' ], [ 'name', 'Pintu' ], [ 'isLoggedIn', false ] ] array of array for each key-value pair.

console.log(tinderUser.hasOwnProperty('name'))  // return boolean value..
