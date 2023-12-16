var a = 300

if(true){
    const a = 30;
    const b = 20;
    let c = 30;
}

console.log(a);;   // here the element allocated a var keyword can be accessed from anywhere i.e. either from global or from local scope.


// a curly braces is a scope in js


function one(){
    const username = "Rishu";

    function tow(){
        const website = "Youtube";
        console.log(username);
    }
    console.log(website);
    tow() 
}

one();