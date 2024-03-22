function addRow() {
    var table = document.getElementById("ViajesRegistrados").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = '<a onclick="editarViaje(this)" href="#">Edit</a> - <a onclick="eliminarViaje(this)" href="#">Delete</a> - <a onclick="addRow(this)" href="#">Add</a>';
}




function editarViaje(element) {
    // Aquí puedes agregar el código para cambiar la visualización de las secciones según el código proporcionado
    currentSection.textContent = "Rides";
    viajesView.style.display = "block";
    settingsView.style.display = "none";
    panelView.style.display = "none";
    settingsMenu.classList.remove("active");
    dashboardMenu.classList.remove("active");
    ridesMenu.classList.add("active");

    var fila = element.parentNode.parentNode;
    var celdas = fila.getElementsByTagName("td");

    // Obtener el contenido de las celdas correspondientes
    var rideName = celdas[0].innerText;
    var startFrom = celdas[1].innerText;
    var endRides = celdas[2].innerText;

    // Establecer los valores en los campos de entrada y etiquetas deseados
    document.getElementById("rideName").value = rideName;
    document.getElementById("startFrom").value = startFrom;
    document.getElementById("end").value = endRides;
}


function guardarEdicion(element) {
    var fila = element.closest('td'); // Obtener la fila más cercana al botón que fue clickeado
    var celdas = fila.querySelectorAll('th'); // Obtener todas las celdas de la fila

    // Iterar sobre las celdas de la fila para obtener los nuevos valores desde los campos de entrada
    celdas.forEach(function (celda, indice) {
        // Ignorar la última celda que contiene los enlaces de editar y eliminar
        if (indice < celdas.length - 1) {
            var input = celda.querySelector('input'); // Obtener el campo de entrada de la celda
            celda.innerText = input.value; // Establecer el contenido de la celda al valor del campo de entrada
        }
    });

    // Cambiar el texto del botón de guardar a "Edit" para permitir futuras ediciones
    element.innerText = 'Save';
    // Restaurar el evento onclick original de editarViaje para permitir ediciones futuras
    element.onclick = function () {
        editarViaje(this);
    };

    // Aquí puedes agregar el código para cambiar la visualización de las secciones según el código proporcionado
    currentSection.textContent = "Dashboard";
    viajesView.style.display = "none";
    settingsView.style.display = "none";
    panelView.style.display = "block";
    dashboardMenu.classList.add("active");
    settingsMenu.classList.remove("active");
    ridesMenu.classList.remove("active");
}




function eliminarViaje(link) {
    var row = link.closest('tr'); // Get the current row
    row.remove(); // Delete row
    alert("Viaje eliminado correctamente.");
}

// Recuperar el nombre de usuario del almacenamiento local
var storedUsername = localStorage.getItem('username');

// Establecer el valor del campo de entrada con el nombre de usuario almacenado
document.getElementById("fullname").value = storedUsername;



const dashboardMenu = document.getElementById('dashboard');
const ridesMenu = document.getElementById('rides');
const settingsMenu = document.getElementById('settings');
const currentSection = document.getElementById('currentSection');
const viajesView = document.getElementById('rides-view');
const panelView = document.getElementById('panel-view');
const settingsView = document.getElementById('settings-view');

panelView.style.display = "none";
viajesView.style.display = "none";
settingsView.style.display = "none";
const username = localStorage.getItem('username');
document.getElementById('username').innerHTML = username;

dashboardMenu.addEventListener('click', () => {
    currentSection.textContent = "Dashboard";
    viajesView.style.display = "none";
    settingsView.style.display = "none";
    panelView.style.display = "block";
    dashboardMenu.classList.add("active");
    settingsMenu.classList.remove("active");
    ridesMenu.classList.remove("active");

});

ridesMenu.addEventListener('click', () => {
    currentSection.textContent = "Rides";
    viajesView.style.display = "block";
    settingsView.style.display = "none";
    panelView.style.display = "none";
    settingsMenu.classList.remove("active");
    dashboardMenu.classList.remove("active");
    ridesMenu.classList.add("active");
});

settingsMenu.addEventListener('click', () => {
    currentSection.textContent = "Settings";
    viajesView.style.display = "none";
    settingsView.style.display = "block";
    panelView.style.display = "none";
    dashboardMenu.classList.remove("active");
    ridesMenu.classList.remove("active");
    settingsMenu.classList.add("active");
});