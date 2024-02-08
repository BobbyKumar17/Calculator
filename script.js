// Initialize an empty string variable to store the input expression
let string = "";

// Select all elements with the class "button" and store them in a variable
let buttons = document.querySelectorAll(".button");

// Convert the NodeList to an Array and iterate over each button element
Array.from(buttons).forEach((button) => {

  // Add a click event listener to each button
  button.addEventListener("click", (e) => {
    
    // Check if the clicked button is "=" (equals sign)
    if (e.target.innerHTML == "=") {
      
      // Evaluate the expression stored in the 'string' variable using JavaScript's eval() function
      string = eval(string);
      
      // Update the value of the input field to display the result
      document.querySelector("input").value = string;
    
    // Check if the clicked button is "C" (clear)
    } else if (e.target.innerHTML == "C") {
      
      // Reset the 'string' variable to an empty string
      string = "";
      
      // Clear the input field
      document.querySelector("input").value = string;
    
    // If the clicked button is neither "=" nor "C"
    } else {
      
      // Concatenate the clicked button's innerHTML (text) to the 'string' variable
      string = string + e.target.innerHTML;
      
      // Update the value of the input field to display the current expression
      document.querySelector("input").value = string;
    }
  });
});
