function validateForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;


    var isValid = true;


    // validations
    if (firstname.trim() === "") {
        document.getElementById("firstname-error").innerHTML = "Por favor, ingrese su nombre.";
        isValid = false;
    } else {
        document.getElementById("firstname-error").innerHTML = "";
    }

    if (lastname.trim() === "") {
        document.getElementById("lastname-error").innerHTML = "Por favor, ingrese su apellido.";
        isValid = false;
    } else {
        document.getElementById("lastname-error").innerHTML = "";
    }

    if (phone.trim() === "") {
        document.getElementById("phone-error").innerHTML = "Por favor, ingrese su número de teléfono.";
        isValid = false;
    } else {
        document.getElementById("phone-error").innerHTML = "";
    }

    if (username.trim() === "") {
        document.getElementById("username-error").innerHTML = "Por favor, ingrese su nombre de usuario.";
        isValid = false;
    } else {
        document.getElementById("username-error").innerHTML = "";
    }

    if (password.trim() === "") {
        document.getElementById("password-error").innerHTML = "Por favor, ingrese su contraseña.";
        isValid = false;
    } else {
        document.getElementById("password-error").innerHTML = "";
    }

    if (confirmPassword.trim() === "") {
        document.getElementById("confirm-password-error").innerHTML = "Por favor, confirme su contraseña.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").innerHTML = "Las contraseñas no coinciden.";
        isValid = false;
    } else {
        document.getElementById("confirm-password-error").innerHTML = "";
    }
    var users = [];
    let newUser = {
        name: firstname,
        lastname: lastname,
        phone: phone,
        username: username,
        password: password,
        confirmPassword: confirmPassword,

    }


    // if the form is valid, add user to the array
    if (isValid) {
        users.push(newUser)
        // store users in local storage
        if (localStorage.getItem('users') === null) {
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            users = JSON.parse(localStorage.getItem('users'));
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('username', username);
        }
        window.location.href = "authentication_page.html";
        return false;
    } else {
        document.getElementById("message").innerHTML = "Usuario no registrado.";
    }

     // create a userName 
     var username = firstname.trim() + " " + lastname.trim();


     // update the value of the label with the username
     document.querySelector('label[for="fullname"]').innerHTML = "Full Name: " + username;


    return isValid;
    
}

