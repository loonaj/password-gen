// Begin our page
var generateBtn = document.querySelector("#generate");

// Define arrays of all combo possibilities
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// This function will ask user to make choices and check choices with conditional statements
  function options() {
    var isValid = false;
        do {
          var length = prompt("Choose password length between 8 and 128 characters");
          var askNumbers = confirm("Do you want your password to include numbers?");
          var askLowerCase = confirm("Do you want your password to include lower case letters?");
          var askUpperCase = confirm("Do you want your password to include upper case letters?");
          var askSpecial = confirm("Do you want your password to include special characters?");
          var responses = {
        length: length,
        askNumbers: askNumbers,
        askLowerCase: askLowerCase,
        askUpperCase: askUpperCase,
        askSpecial: askSpecial
        } 
          if((length < 8)||(length > 128))
            alert("Choose number between 8 and 128");
          else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
            alert("Must choose at least one type.");
          else
            isValid = true;

        } while(!isValid);8
        return responses;
  }

// This function creates the strong password from the user choices.
  function makePassword() {
    var passwordOptions = options();
    var possibleCombo = [];
    var finalPassword = "";

      if (passwordOptions.askNumbers) {
        for (var i of numbers)
          possibleCombo.push(i);
      }
      if (passwordOptions.askLowerCase) {
        for (var i of lowerCase)
          possibleCombo.push(i);
      }
      if (passwordOptions.askUpperCase) {
        for (var i of upperCase)
          possibleCombo.push(i);
      }
      if (passwordOptions.askSpecial) {
        for (var i of special)
          possibleCombo.push(i);
      }

// Log possibleCombo to console
    console.log(possibleCombo);

//Math to create the final password
      for (var i = 0; i < passwordOptions.length; i++) {
        finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
      }

// Log final password to console
    console.log(finalPassword);

//Print finalPassword
      return finalPassword;
    }

// This function inserts the finalPassword to #password input
  function writePassword() {
    var password = makePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

// This adds an event listener so the button can generate
generateBtn.addEventListener("click", writePassword);