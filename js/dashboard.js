
function editarViaje(element) {
    // open Rides
    currentSection.textContent = "Rides";
    viajesView.style.display = "block";
    settingsView.style.display = "none";
    panelView.style.display = "none";
    settingsMenu.classList.remove("active");
    dashboardMenu.classList.remove("active");
    ridesMenu.classList.add("active");

    var fila = element.parentNode.parentNode;
    var celdas = fila.getElementsByTagName("td");

    // get the content of the corresponding cells
    var rideName = celdas[0].innerText;
    var startFrom = celdas[1].innerText;
    var endRides = celdas[2].innerText;

    // Set the values in the desired input fields and labels
    document.getElementById("rideName").value = rideName;
    document.getElementById("startFrom").value = startFrom;
    document.getElementById("end").value = endRides;
}


function addEdit() {
    var fila = document.getElementById("ViajesRegistrados").getElementsByTagName("tbody")[0].rows;
    var rideName = document.getElementById("rideName").value;
    var startFrom = document.getElementById("startFrom").value;
    var endRides = document.getElementById("end").value;

    // Obtener la fila seleccionada
    var selectedRow = null;
    for (var i = 0; i < fila.length; i++) {
        if (fila[i].classList.contains("selected")) {
            selectedRow = fila[i];
            break;
        }
    }

    // Verificar si se ha seleccionado una fila
    if (selectedRow) {
        // Obtener las celdas de la fila seleccionada
        var celdas = selectedRow.getElementsByTagName("td");

        // Establecer los valores en las celdas de la fila seleccionada
        celdas[0].innerText = rideName;
        celdas[1].innerText = startFrom;
        celdas[2].innerText = endRides;

        // Cambiar la visualización de las secciones para mostrar el panel de dashboard
        currentSection.textContent = "Dashboard";
        viajesView.style.display = "none";
        settingsView.style.display = "none";
        panelView.style.display = "block";
        dashboardMenu.classList.add("active");
        settingsMenu.classList.remove("active");
        ridesMenu.classList.remove("active");
    } else {
        console.log("No se ha seleccionado ninguna fila para editar");
    }
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