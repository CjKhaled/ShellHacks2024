const { body } = require("express-validator")

// sign up error messages
const userNameLenErr = "username must be between 8-15 characters.";
const userNameErr = "username must only contain letters.";
const userNameEmptyErr = "must provide a username.";
const passwordLenErr = "password must be between 8-15 characters.";
const passwordErr = "password must contain atleast one upppercase letter, one lowercase letter, and cannot include numbers";
const passwordEmptyErr = "must provide a password";

// join error
const confirmPasswordErr = "passwords do not match";

const validateFormInput = [
    body("username")
    .trim()
    .notEmpty()
    .withMessage(userNameEmptyErr)
    .isLength({min: 8, max: 15})
    .withMessage(userNameLenErr)
    .isAlpha()
    .withMessage(userNameErr),

    body("password")
    .trim()
    .notEmpty()
    .withMessage(passwordEmptyErr)
    .isLength({min: 8, max: 15})
    .withMessage(passwordLenErr)
    .isAlpha()
    .withMessage(passwordErr)
    .custom((pass) => {
        let hasLower = false;
        let hasUpper = false;
        let hasNumber = false;

        for(let i = 0; i < pass.length; i++){
            const character = pass[i];

            if(/[A-Z]/.test(character)) {
                hasUpper = true;
            }

            if(/[a-z]/.test(character)) {
                hasLower = true;
            }

            if(/\d/.test(character)) {
                hasNumber = true;
            }
        }

        if(!hasUpper || !hasLower || hasNumber) {
            throw new Error(passwordErr);
        }
        return true;
    }),

]