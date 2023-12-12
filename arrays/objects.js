// singleton   -> objects made from constructor.

// object literals
//  Object.create    -> constructor
const mySym = Symbol("SYMBOL");        // Symbol is another datatype in js.

const jsUser = {
    name: "Rishu",
    age: 24,
    location: "Bangalore",
    loggedin : false,
    email: "rishi4pcc@gmail.com",
    [mySym] : "newSymbol"              // correct way of declaring the symbol is in square brackets otherwise the type of this element will be string only.
}


// console.log(jsUser.name);
// console.log(jsUser["name"])  // this is the other way of calling elements of an object using square bracket and the element in double quotes
// console.log(jsUser[mySym]);  // to user symobl properly we need to use the square bracket notation without the doble quotes.

jsUser["location"] = "Rajgir";
// console.log(jsUser.location);   

// Object.freeze(jsUser);             // this freezes the object i.e. you cannot change the value of the elements further after freeze.
jsUser["location"] = "Bangalore";
// console.log(jsUser.location);      // no change in the log still logging location as Rajgir.

//function in objects.
//function in javascript is treated as the variable there is no difference.


jsUser.greetings = function(){
    console.log("hi jsuser")
}
jsUser.greetingsTwo = function(){
    console.log(` hello jsUser ${this.name}`)
}

console.log(jsUser.greetings())
console.log(jsUser.greetingsTwo())
