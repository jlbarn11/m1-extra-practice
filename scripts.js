// For this activity, you're going to be writing some arithmetic. You are absolutley fine with looking up the syntax if you can't remember it, just use your zyBook or the lectures (or MDN) as a reference


//function preview - we'll learn about these in the next module
function doTheMath(e){
	//prevent the form from tyring to submit by default, allowing us to do our math here
	e.preventDefault();
	
	//this variable will hold our output to the screen, with some content to start
	let html = "";
	
	//this variable is the location on the page where the content will be displayed
	let outputDisplay = document.getElementById("output");
	
	//these variables are storing the two numbers you entered into the form
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	
	//write the arithmetic you are asked to complete in class (the prof will add your name to it on the board). Use the comments to help you write the correct arithmetic, and feel free to refer to the zyBook for help with syntax
	
	// ---------- CHUNK OF MATH #1 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math1; //TODO - add math here to add the two numbers together and store the result in math1
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 1 (addition): ${math1}</li>`; //a string template used to build the page output, this is a more advanced (and easier) version of string concatenation
	
	// ---------- CHUNK OF MATH #2 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math2; //TODO - add math here to subtract num1 from num2 and store the result in math2
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 2 (subtraction): ${math2}</li>`;
	
	// ---------- CHUNK OF MATH #3 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math3; //TODO - add math here to show the remainder when you divide num1 by num2  (stored in math3)
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 3 (modulus): ${math3}</li>`;

	// ---------- CHUNK OF MATH #4 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math4; //TODO - add math here to raise num1 to the power of num2 and store the result in math4
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 4 (exponenets): ${math4}</li>`; 

	// ---------- CHUNK OF MATH #5 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	//TODO - declare a number variable here named num3 and initialize it to a value of 3

	let math5 = 1;
	//TODO - add math here multiply math5 by num3 and store the result in math5 using the compund assignment operator for multiplication
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 5 (compound multiplication assignment): ${math5}</li>`; 

	// ---------- CHUNK OF MATH #6 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math6; //TODO - add math here to multiply two times four and then add seven and store the result in math6
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 6 (order of operations - standard): ${math6}</li>`; 
	
	// ---------- CHUNK OF MATH #7 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math7; //TODO - add math here to add four and seven, then multiply the result by two and store the result in math7
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 7 (order of operations - with forced order): ${math7}</li>`; 
	
	// ---------- CHUNK OF MATH #8 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math8; //TODO - write some math here to add one and two, then to add 2 and four, then to multuply the results of each piece of addition to each other and store the result in math8
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 8 (more forced order of operations): ${math8}</li>`; 
	
	// ---------- CHUNK OF MATH #9 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	//TODO - declare a number variable here named num4 and initialize it to a value of 2

	let math9 = 10;
	//TODO - add math here to divide math9 by num4 using the compound assignment operator for division to store the result in math9
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 9 (compund division assignment): ${math9}</li>`; 
	
	// ---------- CHUNK OF MATH #10 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math10; //TODO - add math here to divide 10 by 5 and store the result in math10
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 10 (division): ${math10}</li>`;
	
	// ---------- CHUNK OF MATH #11 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math11; //TODO - add math here to add the numbers one and three, and then raise the number two to the result of that addition and store the result in math11
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	html += `<li>Chunk of Math 11 (more forced order of operations): ${math11}</li>`;
	
	// ---------- CHUNK OF MATH #12 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math12; //TODO - add math here to subtract the year you were born in from the current year and store the result in math12
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 12 (subtraction): ${math12}</li>`; 
	
	// ---------- CHUNK OF MATH #13 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math13; //TODO - add math here to concatenate the word "cat" to the end of the word "taco" and store the result in math13
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 13 (string concatenation): ${math13}</li>`; 
	
	// ---------- CHUNK OF MATH #14 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	//TODO create variables named fName and lName and instantiate them to your first and last name

	let math14; //TODO - add math here to save your first and last name (from the variables above) in math14 as a single string with a space in between them
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 14 (formatted string concatenation): ${math14}</li>`; 
	
	// ---------- CHUNK OF MATH #15 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	let math15; //TODO - use your name variables from above to build a string that says "Hello, my name is fName lName!" with the shown punchtuation and spacing using string concatenation and store the result in math15
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 15 (more formatted string concatenation): ${math15}</li>`; 
	
	// ---------- CHUNK OF MATH #16 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	//TODO - use a propmt to request the user's favorite food and store the answer in a variable named userFood 

	let math16; //TODO - add math here to build a string that says "userInput? That stuff is delicious!" with the user's favorite food in place of the variable name shown above and store the result in math16
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	html += `<li>Chunk of Math 16 (prompt and string concatenation/formatting): ${math16}</li>`; 
	
	// ---------- CHUNK OF MATH #17 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	//let math17; //TODO - add math here to BLAH and store the result in math17
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	// html += `<li>Chunk of Math 17 (): ${math17}</li>`; 
	
	// ---------- CHUNK OF MATH #18 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	//let math18; //TODO - add math here to BLAH and store the result in math18
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	// html += `<li>Chunk of Math 18 (): ${math18}</li>`; 
	
	// ---------- CHUNK OF MATH #19 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	//let math19; //TODO - add math here to BLAH and store the result in math19
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	
	// html += `<li>Chunk of Math 19 (): ${math19}</li>`; 
	
	// ---------- CHUNK OF MATH #20 ----------
	// ONLY EDIT BETWEEN THESE SETS OF COMMENTS - START EDITING
	//let math20; //TODO - add math here to BLAH and store the result in math20
	//ONLY EDIT BETWEEN THESE SETS OF COMMENTS - END EDITING
	// html += `<li>Chunk of Math 20 (): ${math20}</li>`; 
	
	//this will display those results to the screen
	outputDisplay.innerHTML = html;
}

//this will call our function that does the math and displays the results to the screen
document.getElementById("mySubmit").addEventListener("click", doTheMath);

// To plan a pizza party, one may want to order enough pizza for everyone. Use the slicesPerPizza, slicesPerPerson, and totalGuests variables to compute the total number of pizzas needed to feed all the guests and store the result in totalPizzas. The total may have a decimal place.
