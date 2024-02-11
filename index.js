const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateMastercard(cardNumber) {
    // Remove non-digit characters
    cardNumber = cardNumber.replace(/\D/g, '');

    // Define regex pattern for Mastercard
    var mastercardPattern = /^5[1-5][0-9]{14}$/;

    // Check if the card number matches Mastercard pattern
    if (mastercardPattern.test(cardNumber)) {
        return "Valid Mastercard card number.";
    } else {
        return "Invalid Mastercard card number.";
    }
}

// Function to prompt user for input and validate Mastercard number
function validateUserInput() {
    rl.question("Please enter your Mastercard number: ", (userInput) => {
        if (userInput.trim() !== "") {
            var validationResult = validateMastercard(userInput);
            console.log(validationResult);
            rl.close();
        } else {
            console.log("Invalid input. Please enter a valid Mastercard number.");
            validateUserInput();
        }
    });
}

// Call the function to prompt the user for input
validateUserInput();