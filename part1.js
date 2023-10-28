// Your code
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("register-user").addEventListener("click", (event) => {
        const phoneNumber = validPhoneNumber(document.getElementById("user-phone").value);
        const password = validPassword(document.getElementById("user-pass").value);
        const dob = validAge(document.getElementById("user-dob").value);
        if (phoneNumber && password && dob)
            alert("Successful")
    })
})

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gen-pass").addEventListener("click", (event) => {
        let errorMsg = document.getElementsByClassName("error-msg");
        errorMsg[1].innerHTML = ""
        document.getElementById("user-pass").value = generatePassword();
    })
})

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("user-phone").addEventListener("input", (event) => {
        let errorMsg = document.getElementsByClassName("error-msg");
        errorMsg[0].innerHTML = ""
    })
    document.getElementById("user-pass").addEventListener("input", (event) => {
        let errorMsg = document.getElementsByClassName("error-msg");
        errorMsg[1].innerHTML = ""
    })
    document.getElementById("user-dob").addEventListener("input", (event) => {
        let errorMsg = document.getElementsByClassName("error-msg");
        errorMsg[2].innerHTML = ""
    })
})


function validPhoneNumber(phoneNumber) {
    let phoneRe = /^(059|056)\d{7}$/;
    if (phoneRe.test(phoneNumber)) {
        return true;
    }
    let errorMsg = document.getElementsByClassName("error-msg");
    errorMsg[0].innerHTML = "Invalid phone number"
    return false;
}

function validPassword(password) {
    if (isValidPassword(password)) {
        return true;
    }
    let errorMsg = document.getElementsByClassName("error-msg");
    errorMsg[1].innerHTML = "Password must contain capital letters, small letters, numbers, and underscore ` _ ` and length between 8 and 16 digits."
    return false;
}

function validAge(dob) {
    if (ageCalculation(dob) >= 18) {
        return true;
    }
    let errorMsg = document.getElementsByClassName("error-msg");
    errorMsg[2].innerHTML = "You must be 18 years old or older to sign-up."
    return false;
}

function generatePassword() {
    let allChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "_"];
    let password = "";
    do {
        password="";
        for (let i = 0; i < 14; i++) {
            let indexForAllChar = Math.floor(Math.random() * allChar.length);
            let temp = allChar[indexForAllChar]
            password += temp[Math.floor(Math.random() * temp.length)]
        }
    } while (!isValidPassword(password))
    return password
}

function isValidPassword(password) {
    let passwordRe = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*_)[A-Za-z\d_]{8,16}$/;
    if (passwordRe.test(password)) {
        return true;
    }
    return false;
}

function ageCalculation(userDate) {
    let currentDate = new Date();
    let dob = new Date(userDate);
    let age = currentDate.getFullYear() - dob.getFullYear();
    return age;
}