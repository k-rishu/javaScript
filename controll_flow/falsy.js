// Truthies and falsies


//falsy

// false, 0, -0, Bigint 0n, "", null, NaN, undefined


// truthies

// "0", 'false', " ", [], {}, function(){}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("We got empty object");
}

// Nullish Coalescing Operator (??) :  null undefined.
// it checks if the value is null or undefined then it can be assigned some default value.

let val1;
// val1 = null ?? 5;
val1 = undefined ?? 5;

console.log(val1);