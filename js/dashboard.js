function editarViaje(link) {

    var row = link.closest('tr'); // Get the current row
    var nombre = row.cells[0].innerText;
    var inicio = row.cells[1].innerText;
    var fin = row.cells[2].innerText;
    alert("Editar el viaje: Nombre: " + nombre + ", Inicio: " + inicio + ", Fin: " + fin);
}

function eliminarViaje(link) {
    var row = link.closest('tr'); // Get the current row
    row.remove(); // Delete row
    alert("Viaje eliminado correctamente.");
}
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
    currentSection.textContent = "Viajes";
    viajesView.style.display = "block";
    settingsView.style.display = "none";
    panelView.style.display = "none";
    settingsMenu.classList.remove("active");
    dashboardMenu.classList.remove("active");
    ridesMenu.classList.add("active");
});

settingsMenu.addEventListener('click', () => {
    currentSection.textContent = "Ajustes";
    viajesView.style.display = "none";
    settingsView.style.display = "block";
    panelView.style.display = "none";
    dashboardMenu.classList.remove("active");
    ridesMenu.classList.remove("active");
    settingsMenu.classList.add("active");
});