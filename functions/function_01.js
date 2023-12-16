function addTwoNumver(num1, num2){
    return num1+num2;
}

// const result = addTwoNumver(3,4)  // 7 output
const result = addTwoNumver(3,'4')   // 34 output
console.log(result)


function loginUserMessage(username = "User"){      // way to provide default value to the parameter of a function.
    if(username === undefined){
        console.log("Please provide user Information.")
        return;
    }
    return `${username} just Loggid in`;

}

console.log(loginUserMessage("Rishu"))  // Rishu just Logged in

console.log(loginUserMessage());   // undefined just logged in  

