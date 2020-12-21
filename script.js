// Created an array for each variable //

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharaters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']

// Asign function that will prompt and alert when called //
function getPasswordRequirements() {
    var passwordLength = parseInt(prompt("How many characters do you want in your password?"))
    if (isNaN(passwordLength) === true) {
        alert("The length of the password must be a number");
        return
    }
    if (passwordLength < 8) {
        alert("Please make sure your password is at least 8 characters long");
        return
    }
    if (passwordLength > 128) {
        alert("Please make sure your password is less than 128 characters");
        return
    }
    var containsSpecialCharacters = confirm("Click the OK button to confirm you want to use the special characters")
    var containsNumbers = confirm("Click OK button to confirm you want numbers")
    var containsLowercase = confirm("Click OK if you want lowercase characters")
    var containsUppercase = confirm("Click OK if you want Uppercase characters")

    if (containsSpecialCharacters === false && containsNumbers === false && containsLowercase === false && containsUppercase === false) {
        alert("You must select one character type in order to form a password");
    }
    var allCharacters = [];

    if (containsUppercase) allCharacters = allCharacters.concat(uppercase);
    if (containsLowercase) allCharacters = allCharacters.concat(lowercase);
    if (containsNumbers) allCharacters = allCharacters.concat(numbers);
    if (containsSpecialCharacters) allCharacters = allCharacters.concat(specialCharaters);
    console.log(allCharacters);
    
    var secretCode = [];

    for (var i = 0; i < passwordLength; i++) {
        var pickChoices = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        secretCode.push(pickChoices);
        console.log(secretCode);


        // var getPasswordRequirements={
        //     passwordLength: passwordLength, 
        //     containsSpecialCharacters: containsSpecialCharacters,
        //     containsNumbers: containsNumbers,
        //     containsLowercase: containsLowercase,
        //     containsUppercase: containsUppercase
        // }
        
    }
    return secretCode.join("");
}


var generateBtn = document.querySelector("#generate");
function writePassword() {
    var password = getPasswordRequirements();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;


}

generateBtn.addEventListener("click", writePassword);    