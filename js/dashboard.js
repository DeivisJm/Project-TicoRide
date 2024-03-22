
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

function eliminarViaje(link) {
    var row = link.closest('tr'); // Get the current row
    row.remove(); // Delete row
    alert("Viaje eliminado correctamente.");
}

// Retrieve username from local storage
var storedUsername = localStorage.getItem('username');
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