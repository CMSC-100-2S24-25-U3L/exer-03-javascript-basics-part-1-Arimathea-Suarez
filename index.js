// Arimathea Charmille H. Suarez
// CMSC 100 - U3L
// Description: A password validation program using JavaScript



//The function for validating the password 

function validatePassword(password1, password2) {

    if (password1 !== password2) { return false; } // To check if the password is a match 

    if (password1.length < 8) { return false; } // To check if the password is  at least 8 characters

    if (!/[A-Z]/.test(password1)) { return false; } // To check if the password corresponds to the characters from 'A-Z' and is testes using the .test

    if (!/[a-z]/.test(password1)) { return false; } // To check if the password corresponds to the characters from 'a-z' and is testes using the .test


    if (!/[0-9]/.test(password1)) { return false; } // To check if the password corresponds to the characters from '0-9' and is testes using the .test


    return true;

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

    let isValid = validatePassword(password1, password2); // To check for the validity of the pasword

    let newPassword;

    if (isValid) { // Condition if the password is valid
        newPassword = reversePassword(password1);
    } else {
        newPassword = password1;
    }

    return {
        name: name,
        newPassword: newPassword
    };
}




// Examples for testing
console.log(validatePassword("helloworld", "hello"));
console.log(validatePassword("hello", "hello"));
console.log(validatePassword("hello1234", "hello1234"));
console.log(validatePassword("Hello1234", "Hello1234"));
console.log(validatePassword("HELLO1234", "HELLO1234"));
console.log(reversePassword("HELLO1234", "HELLO1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));












// References:
//For the if statement of char >= , https://stackoverflow.com/questions/48027617/could-someone-explain-this-code-for-me-please
//For the .test https://www.w3schools.com/jsref/jsref_regexp_test.asp

