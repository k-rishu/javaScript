const user = {
    username : "Pintu",
    price : 99,
    welcomeMessage : function(){
        // console.log(`${this.username} , welcome to the website`);
        // console.log(this);
        console.log(this);      // here this reffers to the current context.
    }
}

// user.welcomeMessage();


// console.log(this);

function check(){
    console.log(this);       // study more about the this mainly in side function context.
}
// check()
const check2 = () => {
    console.log(this);
}
// check2()


//++++++++++++++ arrow ++++++++++ function +++++++++++++++++++//

// const addTwo = (num1, num2) => {                         // explicit return method i.e. using the return statement explicitily.
//     return num1 + num2;
// }

// console.log(addTwo(2,4));


const addTwo = (num1, num2) => (num1+num2);            // implicit return ;
console.log(addTwo(2,4));
