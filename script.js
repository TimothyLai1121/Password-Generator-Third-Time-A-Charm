// Attempt 1
// Result: Semi - Working. Password have spaces sometimes //
// Assignment Code

var generateBtn = document.querySelector("#generate");
// There are 5 variable for user choices //
// length //
var passwordLength = "";
// Upper and LowerCase //
var userLower;
var userUpper;
// Numbers //
var userNumber;
// Special Character //
var userSpecial;
// One more for userChoices //
var userChoices
// Assigning arrays to the variable //

// uppercase and Lowercase //
var lowercase =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// I want to see if I can convert an arrays to uppercase. I know about string but let's see //
//  Go back again and try to upper.map userupper. //
// var userUpper = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// userUpper = userUpper.map(function(x){
//   return x.toUpperCae
// })
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Testing 22-26, if fail, proceed to var usppercase //
// Follow up //
// Numbers //
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// Special Characters //
// :. ;. and \ didn't show up //
// Same thing like readme.md hypertext markdown //
var specials = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Noted, after two challenges, I realized that after Control + S on windows or mac, I have to develop a habit of exit page and go live again //
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passwordLength);

if(!passwordLength) {
  alert("Required value");

} else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("You must choose between 8 and 128");
  console.log("Password length " + passwordLength);

} else { 
  userLower = confirm("Will this contain lower case letters?");
  console.log("Lower case " + userLower);
  userUpper = confirm("Will this contain upper case letters?");
  console.log("Upper case " + userUpper);
  userNumber = confirm("Will this contain numbers?");
  console.log("Number " + userNumber);
  userSpecial = confirm("Will this contain special characters?");
  console.log("Special Character " + userSpecial);

};

  if (!userLower && !userUpper && !userNumber && !userSpecial) {
  userChoices = alert("You must choose a criteria");
// Array.prototype.concat() //

} else if (userLower && userUpper && userNumber && userSpecial) {
  userChoices = lowercase.concat(uppercase, numbers, specials);
  console.log(userChoices);
} else if (userLower && userUpper && userNumber) {
  userChoices = lowercase.concat(uppercase, numbers);
  console.log(userChoices);
} else if (userLower && userUpper && userSpecial) {
  userChoices = lowercase.concat(uppercase, specials);
  console.log(userChoices);
} else if (userLower && userNumber && userSpecial) {
  userChoices = lowercase.concat(numbers, specials);
  console.log(userChoices);
} else if (userUpper && userNumber && userSpecial) {
  userChoices = uppercase.concat(numbers, specials);
  console.log(userChoices);
} else if (userLower && userUpper) {
  userChoices = lowercase.concat(uppercase);
  console.log(userChoices);
} else if (userLower && userNumber) {
  userChoices = lowercase.concat(numbers);
  console.log(userChoices);
} else if (userLower && userSpecial) {
  userChoices = lowercase.concat(specials);
  console.log(userChoices);
} else if (userUpper && userNumber) {
  userChoices = uppercase.concat(numbers);
  console.log(userChoices);
} else if (userUpper && userSpecial) {
  userChoices = uppercase.concat(specials);
  console.log(userChoices);
} else if (userNumber && userSpecial) {
  userChoices = numbers.concat(specials);
  console.log(userChoices);
} else if (userLower) {
  userChoices = lowercase;
  console.log(userChoices);
} else if (userUpper) {
  userChoices = uppercase;
  console.log(userChoices);
} else if (userNumber) {
  userChoices = numbers;
  console.log(userChoices);
} else if (userSpecial) {
  userChoices = specials;
  console.log(userChoices);
};

var passwordBlank = [];

for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}

var password = passwordBlank.join("");
console.log("Your Pasword is: " + password);
return password;

};






/* Attempt 2 */
// Result - Not working //

// Array.prototype.filter()  StackOverflow  and constant value//
// So I saw most people don't need to [a], [b], etc., to cut down time //

/* 

function generatePassword(passwordLength) {
  // Check if password length is provided
  if (!passwordLength) {
    alert("Required value");
    return;
  }

  // Check if password length is between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
  }

  // Ask user for character types to include in password
  const userLower = confirm("Will this contain lower case letters?");
  const userUpper = confirm("Will this contain upper case letters?");
  const userNumber = confirm("Will this contain numbers?");
  const userSpecial = confirm("Will this contain special characters?");

  // Check if user has selected any character types
  if (!userLower && !userUpper && !userNumber && !userSpecial) {
    alert("You must choose a criteria");
    return;
  }

  // Generate password
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};':\"<>,.?/\\|`~";
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const characterOptions = characters.split('').filter(char => {
      if (userLower && char === char.toLowerCase()) return true;
      if (userUpper && char === char.toUpperCase()) return true;
      if (userNumber && !isNaN(parseInt(char))) return true;
      if (userSpecial && !isNaN(parseInt(char)) && char === char.toLowerCase() && char === char.toUpperCase()) return true;
    });
    password += characterOptions[Math.floor(Math.random() * characterOptions.length)];
  }

  console.log("Your Pasword is: " + password);
  return password;
}

*/

/* Attempt 3 */
// Help from Youtube //
// Result Working //
/*


var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#%^&*()_+-=[]{};':\"<>,.?/\\|`~";


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");

  if(!passwordLength) {
    alert("Required value");
    return;
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  } else { 
    confirmLower = confirm("Will this contain lower case letters?");
    confirmUpper = confirm("Will this contain upper case letters?");
    confirmNumber = confirm("Will this contain numbers?");
    confirmSpecial = confirm("Will this contain special characters?");
  }


  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    alert("You must choose a criteria");
    return;
  }

  userChoices = "";
  if (confirmLower) userChoices += lowerCase;
  if (confirmUpper) userChoices += upperCase;
  if (confirmNumber) userChoices += numbers;
  if (confirmSpecial) userChoices += special;


  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += userChoices[Math.floor(Math.random() * userChoices.length)];
  }

  console.log("Your Pasword is: " + password);
  return password;
}

*/