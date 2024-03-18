var users = JSON.parse(localStorage.getItem('users'));

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var isValidUser = false;

    // Check if the username and password match any registered user
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            isValidUser = true;
            break;
        }
    }

    if (isValidUser) {
        localStorage.setItem('username', username);
        document.getElementById("message").innerHTML = "¡Bienvenido, " + username + "!";
        window.location.href = "dashboard.html";
        return false;
    } else {
        document.getElementById("message").innerHTML = "Cuenta no existente";
        return false;
    }
}