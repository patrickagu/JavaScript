/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
        let myName; 
        let myAge;
        let string;
        let para = document.querySelector('body p');

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
        myName = 'Patrick';
        myAge = 30;

		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
       myName = 'Pat';
       console.log(myName);
       myAge = 35;
       string = myName + myAge;
       console.log(string);

       para.textContent = string;


		// STEP 4: Variable types (use typeof in the console)
		// Numbers
        let numCourse = 6;
        para.textContent = numCourse;

		// Strings (use '' or "")
        let stringCourse = "ClientSide JS"

		// Booleans
        let iAmHere = true;
        let compare = 6 > 3;
        para.textContent = 'The value of comparison is: ' + compare;

		// Arrays
		let myArrays = ['John', 'Bob', 'Lisa'];
        console.log(myArrays[2]); //returns Lisa
		// Objects
        let myArrays2 = [20,50,70];
        console.log(myArrays2[1]);   // returns 50

        // objects 
        let dog = {
            name : 'simba',
            breed : 'GS',
        }
        console.log(dog.name);

		// STEP 5: Typing (JavaScript is a loosely-typed language)
        var myNumber = 500;
        console.log(typeof(myNumber)); // returns number 
        myNumber = 'patrick1'
        console.log(typeof(myNumber));  // returns string because JS is a dyanmic language
        
        let x;
        console.log(x == null); // returns true
        console.log(x === null); // returns false
