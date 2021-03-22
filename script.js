//Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleCharacter ="ABCDEFGHIJKLMNOPQRSUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>/,";

function generatePassword()
{
  var length = window.prompt("How many characters do you want?");
  if (length < 8 || length > 50) {
    window.alert("Enter a valid number between 8 and 50");
    var length = window.prompt("How many characters do you want?");
  }
  var selectNumber = confirm("Do you want to include number?");
  var selectUpper = confirm("Do you want to include upper case alphabet?");
  var selectLower = confirm("Do you want to include lower case alphabet?");
  var selectSpecial = confirm("Do you want to include special character?");
  while (
    selectNumber === false &&
    selectUpper === false &&
    selectLower === false &&
    selectSpecial === false
  ) {
    window.alert("You must select at least 1 character");
    var selectNumber = confirm("Do you want to include number?");
    var selectUpper = confirm("Do you want to include upper case alphabet?");
    var selectLower = confirm("Do you want to include lower case alphabet?");
    var selectSpecial = confirm("Do you want to include special character?");
  }
  
  for (var i =0; i < length; i++) {
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
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);