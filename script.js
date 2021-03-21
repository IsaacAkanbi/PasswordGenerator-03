//Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleCharacter ="ABCDEFGHIJKLMNOPQRSUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>/,.";

function generatePassword()
{
  var length = window.prompt("How many characters do you want?");
  if (length < 8 || length > 50) {
    window.alert("Enter a valid number between 8 and 50");
    var length = window.prompt("How many characters do you want?");
  }
  var storeNumber = confirm("Do you want to include number?");
  var storeUpper = confirm("Do you want to include upper case alphabet?");
  var storeLower = confirm("Do you want to include lower case alphabet?");
  var storeSpecial = confirm("Do you want to include special character?");
  while (
    storeNumber === false &&
    storeUpper === false &&
    storeLower === false &&
    storeSpecial === false
  ) {
    window.alert("You must select at least 1 character");
    var storeNumber = confirm("Do you want to include number?");
    var storeUpper = confirm("Do you want to include upper case alphabet?");
    var storeLower = confirm("Do you want to include lower case alphabet?");
    var storeSpecial = confirm("Do you want to include special character?");
  }
  
  for (var i = 0; i < length; i++) {
    var randomPassword = randomPassword + possibleCharacter[Math.floor(Math.random() * possibleCharacter.length)];
    console.log(randomPassword);
  }
  return randomPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
