function addTwoNumver(num1, num2){
    return num1+num2;
}

// const result = addTwoNumver(3,4)  // 7 output
const result = addTwoNumver(3,'4')   // 34 output
// console.log(result)


function loginUserMessage(username = "User"){      // way to provide default value to the parameter of a function.
    if(username === undefined){
        console.log("Please provide user Information.")
        return;
    }
    return `${username} just Loggid in`;

}

// console.log(loginUserMessage("Rishu"))  // Rishu just Logged in

// console.log(loginUserMessage());   // undefined just logged in  

function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(2000));   // output is 2000

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(2000));   // output is [2000] here the output is in the form of array and '...' is known here as rest operator.
// similarly we can pass objects, array, as well as numbers in the parameter of a function and then apply buisness logic on it.


