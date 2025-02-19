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



//Example for testing
console.log(validatePassword("Hello1", "Hello1"));











// References:
//For the if statement of char >= , https://stackoverflow.com/questions/48027617/could-someone-explain-this-code-for-me-please

