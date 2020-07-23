// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  let passwordLength = parseInt(prompt("What length do you want your password? Must be between 8-128 characters"))

  if ((passwordLength > 128) || (passwordLength < 8)) {
    alert("Wrong. Please start over by clicking 'Generate Password'.")
    return;
  } 
 
  let lowerHouse = "abcdefghijklmnopqrstuvwxyz"
  let upperHouse = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numbers = "1234567890"
  let specialChar = "!@#$%^&*()_+~?<>{}~`:;"

  // string depending on what attributes the user wants 
  let thepassword = ""

  // string that the for loop adds to after randomizing 
  let passwordFinal = ""


  let lowercase = confirm("Do you want a lower case? Yes = OK ; No = Cancel")
  if (lowercase === true) {
    thepassword += lowerHouse
  }

  let uppercase = confirm("Do you want a upper case? Yes = OK ; No = Cancel")
  if (uppercase === true) {
    thepassword += upperHouse 
  } 
  
  let numberz = confirm("Do you want a number? Yes = OK ; No = Cancel")
  if (numberz === true) {
    thepassword += numbers 
  }

  let specialCharacters = confirm("Do you want a special character? Yes = OK ; No = Cancel")
  if (specialCharacters === true) {
    thepassword += specialChar
  }


  for (var i=0; i < passwordLength; i++){
  passwordFinal = passwordFinal + thepassword.charAt(Math.floor(Math.random() * Math.floor(thepassword.length-1)));
  }


  // alerting user with their password 
return passwordFinal

}




