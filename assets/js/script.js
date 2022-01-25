
var generateBtn = document.querySelector("#generate");

var randNum = Math.floor(Math.random());

//function to generate special cha
//storing special cha
var specialCharacters = '()${}@!*#%&'
// function generateSpecialCh() {
//   var randNum = Math.floor(Math.random() * specialCharacters.length);
//   return specialCharacters[randNum];
// }

//function to generate random letters lowercase
var lowerCase = 'abdcefghijklmnopqrsteuvxz';
// function generateRandomLowercaserLetter() {
//   var randNum = Math.floor(Math.random() * lowercase.length);
//   return lowercase[randNum];
// }


var upperCase = 'ABCDFGHIJKLMNOPQRSTUWXYZ';
// function generateUppercaseLetter() {
//   let randNum = Math.floor(Math.random() * upperCase.length);
//   return upperCase[randNum];
// }

var numbers = '0123456789'
// function generateRandumNumber() {
//   return Math.floor(Math.random() * 8);
// }

// Get references to the #generate element
let passwordText = "";

var generateBtn = document.querySelector("#generate");

function generatePassword() {


  var passwordLength = parseInt(window.prompt(
    //ask user about password lenght
    "How long would you like your password to be? - You can choose between 8 and 129 characters"
  ));
  ////make sure user enters right amount of characters
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("password must be between 8 and 128 characters!");
    //does not work! ask in the group
    return null;
  }

  if (passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid answer!");
    return null;
  }

  //ask user if they would like special caracters
  var specialCharactersCheck = window.confirm(
    "Would you like special characters?"
  );
  //ask user if they would like numbers
  var numbersCheck = window.confirm(
    "Would you like numbers?"
  );

  //ask user if they would like lower case
  var lowerCaseCheck = window.confirm(
    "Would you like lower case? "
  )

  var upperCaseCheck = window.confirm(
    "Would you like upper case? "
  )
  if (!specialCharactersCheck && !upperCaseCheck && !numbersCheck && !lowerCaseCheck) {
    window.alert("You need to choose at least one option!")
    return generatePassword(passwordText);
  }
  //need to reference what user answered in prompt 
  //create while loop with all the conditions

  let possibleCharactersToChooseFrom = "";

  if (passwordLength < 129 && passwordLength > 7) {

    if (specialCharactersCheck) {
      possibleCharactersToChooseFrom += specialCharacters;
    }

    if (numbersCheck) {
      possibleCharactersToChooseFrom += numbers;
    }

    if (lowerCaseCheck) {
      possibleCharactersToChooseFrom += lowerCase;
    }
   
    if (upperCaseCheck) {
      possibleCharactersToChooseFrom +=upperCase;

    }
  
  }
  console.log(possibleCharactersToChooseFrom);
 
  var passwordText =""
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random()*possibleCharactersToChooseFrom.length);
    var randomCharacter = possibleCharactersToChooseFrom[randomIndex];
    passwordText += randomCharacter
  }  
  return passwordText;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
//need to call function when i am done
generateBtn.addEventListener("click", writePassword);

