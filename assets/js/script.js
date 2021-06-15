// Assignment Code
const alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const specialCharacters = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var _password = "";
  //prompt password length
  var _passLength = prompt("What do you want the length to be? (8 to 128 characters)");
  if (_passLength < 8 || _passLength > 128) { alert("invalid password length"); return; }
  //confirm different character types
  var _lowerCase = confirm("Do you want to include lower case letters?");
  var _upperCase = confirm("Do you want to include upper case letters?");
  var _numbers = confirm("Do you want to include numbers?");
  var _specialCharacters = confirm("Do you want to include special characters?");
  if ( !_lowerCase && !_upperCase && !_numbers && !_specialCharacters) { alert("Must use at least one character type"); return; }
  //Setup array that will hold all valid characters
  var _charTypeArray = [];

  //Add valid types of characters to the array
  if (_lowerCase)
    _charTypeArray = _charTypeArray.concat(alphabetLower);
  if (_upperCase)
    _charTypeArray = _charTypeArray.concat(alphabetUpper);
  if (_numbers)
    _charTypeArray = _charTypeArray.concat(numbers);
  if (_specialCharacters)
    _charTypeArray = _charTypeArray.concat(specialCharacters);
  //grab a random valid character from the array and add it to the password variable
  for (var i = 0; i < _passLength; i++){
    _password +=_charTypeArray[Math.floor(Math.random() * _charTypeArray.length)]
  }
  return  _password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password == undefined) { return; } //return if password is criteria is invalid
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
