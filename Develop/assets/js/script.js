
// general function to generate random numbers that will be used again to generate ch and letters
var randNum = Math.floor(Math.random ());

//function to generate special cha
//storing special cha
var specialCharacters = '()${}@!*#%&';
function generateSpecialCh () {
var randNum = Math.floor(Math.random() * specialCharacters.length);
return generateSpecialCh [randNum];
}

//function to generate random letters lowercase
var lowercase = 'abdcefghijklmnopqrsteuvxz';
function generateRandomLowercaserLetter() {
  var randNum = Math.floor(Math.random() * lowercase.length);
  return lowercase[randNum];
}


var upperCase = 'ABCDFGHIJKLMNOPQRSTUWXYZ';
function generateUppercaseLetter() {
  let randNum = Math.floor(Math.random() * upperCase.length);
  return upperCase[randNum];
}

function generateRandumNumber() {
  return Math.floor(Math.random() * 8);
}

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

function generatePassword () {

var passwordLength = parseInt(window.prompt (
  //ask user about password lenght
"How long would you like your password to be? - You can choose between 8 and 129 characters"
));
////make sure user enters right amount of characters
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("password must be between 8 and 128 characters!");
  //does not work! ask in the group
  return generatePassword();
}

if (passwordLength === "" || passwordLength === null) {
window.alert("You need to provide a valid answer!");
return generatePassword();
}

//ask user if they would like special caracters
var specialCharacters = window.confirm (
  "Would you like special characters?"
);
//ask user if they would like numbers
  var numbers = window.confirm (
    "Would you like numbers?"
  );

  //ask user if they would like lower case
  var lowerCase = window.confirm (
    "Would you like lower case? "
  )

  var upperCase = window.confirm (
    "Would you like upper case? "
  )
  if (!specialCharacters && !upperCase && !numbers && !lowerCase) {
    window.alert ("You need to choose at least one option!")
    return generatePassword();
  }
//need to reference what user answered in prompt 
//create while loop with all the conditions

let passwordText = "";

while (passwordLength < 129 && passwordLength < 7) {

  if (specialCharacters) {
passwordText += generateSpecialCh();
  }

if (numbers) {
passwordText += generateRandumNumber();
}
 if (lowerCase) {
passwordText += lowercase();

if (upperCase) {
  passwordText += upperCase();
 }
}
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return writePassword ();

}

// Add event listener to generate button
//need to call function when i am done
generateBtn.addEventListener("click", writePassword);
let password = generatePassword();
writePassword();

}