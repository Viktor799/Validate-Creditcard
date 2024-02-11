# Validate-Creditcard

This JavaScript program uses regex to validate Mastercard numbers.

## Brief description of Regex pattern used:

- `^5[1-5]`: The number must start with 5, followed by a digit from 1 to 5.

- `[0-9]{14}$`: There must be exactly 14 digits following the first two digits, making it a total of 16-digit numbers.

So, the pattern `^5[1-5][0-9]{14}$` ensures that the credit card number starts with 5, followed by a specific range of digits, and is exactly 16 digits long, following the Mastercard format.