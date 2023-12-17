// iffi =>  IMMEDIATELY INVOKED FUNCTION EXPRESSION ()()


// wrap the function defination in the parenthesis and then add another parenthesis to it.


(function connectToDatabase() {                 //named iffi.
    console.log("Connected to DATABASE");
})();                                            // note REMEMBER OT ADD A SEMICOLLON IN THE END OF IFFI.


( () => (console.log("connected to database"))) ();     // iffi for arrow function does not require the name for the funciton.
( (user) => (console.log("connected to database " + user))) ("rishu");  