// Arimathea Charmille H. Suarez
// CMSC 100 - U3L
// Description: A password validation program using JavaScript


//The function for validating the password 

function validatePassword(password1, password2) {

    if (password1 === password2) return true; // To check if the given passwords match 

    if (password1 !== password2) return false; // To check if the given passwords match 

    if (password1.length < 8) return false; // To check if the password has at least 8 characters



    let isUpperCase = false, isLowerCase = false, isANumber = false;

    for (let i = 0; i < password1.length; i++) {

        let char = password1[i];
        if (char >= 'A' && char <= 'Z') isUpperCase = true;


        if (char >= 'a' && char <= 'Z') isLowerCase = true;


        if (char >= '0' && char <= '9') isANumber = true;


    }

    return isUpperCase && isLowerCase && isANumber;

}

// The function for reversing the password

function reversePassword(password) {

    let reversed = "";
    for (let i = password.length - 1; i >= 0; i--) {
        reversed += password[i];
    }

    return reversed;
}


// The function for storing the password

function storePassword(name, password1, password2) {

    let isValid = validatePassword(password1, password2);

    let newPassword;

    if (isValid) {
        newPassword = reversePassword(password1);
    } else {
        newPassword = password1;
    }

    return {
        name: name,
        newPassword: newPassword
    };
}




//Example for testing
console.log(validatePassword("helloworld", "hello"));
console.log(validatePassword("hello", "hello"));
console.log(validatePassword("hello1234", "hello1234"));
console.log(validatePassword("Hello1234", "Hello1234"));
console.log(reversePassword("HELLO1234", "HELLO1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));












// References:
//For the if statement of char >= , https://stackoverflow.com/questions/48027617/could-someone-explain-this-code-for-me-please

