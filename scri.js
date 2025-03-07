function validateForm() {
    let isValid = true;


    let name = document.getElementById("name").value;
    let namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        document.getElementById("nameError").innerText = "Invalid name. Only letters and spaces allowed.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    
    let age = document.getElementById("age").value;
    if (age < 18 || age > 60 || isNaN(age)) {
        document.getElementById("ageError").innerText = "Age must be between 18 and 60.";
        isValid = false;
    } else {
        document.getElementById("ageError").innerText = "";
    }

    let email = document.getElementById("email").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    
    let pin = document.getElementById("pin").value;
    let pinPattern = /^\d{6}$/;
    if (!pinPattern.test(pin)) {
        document.getElementById("pinError").innerText = "PIN code must be exactly 6 digits.";
        isValid = false;
    } else {
        document.getElementById("pinError").innerText = "";
    }

    let password = document.getElementById("password").value;
    let passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = "Password must have at least 8 characters, including uppercase, lowercase, number, and special character.";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    return isValid;
}