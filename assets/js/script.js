var passwordLength = 8;

var choices = [];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '/', '?', '*', '+', ];

var upperCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z',];


var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
'v', 'w', 'x', 'y', 'z', 
];

var numberChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var correctChoices= getChoices();
  var passwordText = document.querySelector("#password");

  if (correctChoices) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
     passwordText.value = "";
  }
}

// giving prompt choices for creating password
function getChoices() {
  choices = [];

  passwordLength = parseInt(prompt("How many characters do you want to be in your password? (must be 8- 128)"));

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
   alert("Sorry Password length must be between 8- 128.");
   return false;
  }

  if(confirm("Do you want numbers in your password?")) {
    choices = choices.concat(numberChar);
  }

  if(confirm("Do you want special characters in your password?")) {
    choices = choices.concat(specialChar);
  }

  if(confirm("Do you want upper case letters in your password?")) {
    choices = choices.concat(upperCase);
  }

  if(confirm("Do you want lower case letters in your password?")) {
    choices = choices.concat(lowerCase);
  }
  return true;
}

// Come here to actually generate the password and return the password to put into new password
function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
   var randomPick = Math.floor(Math.random() * choices.length);
   password = password + choices[randomPick];
  }
  return password;
}

