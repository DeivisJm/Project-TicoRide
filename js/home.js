// Function to save a new trip in the table
function saveTrip() {
  var origin = document.getElementById("origin").value;
  var destination = document.getElementById("destination").value;

  // Validate if both fields are filled
  if (origin.trim() === '' || destination.trim() === '') {
    alert("Ingrese ambos datos");
    return;
  }

  // Create a new row in the table
  var table = document.getElementById("tripTable");
  var newRow = table.insertRow();
  var cellUser = newRow.insertCell(0);
  var cellStart = newRow.insertCell(1);
  var cellEnd = newRow.insertCell(2);
  var cellView = newRow.insertCell(3);

  // Add origin and destination values to cells
  cellUser.innerHTML = "Invitado";
  cellStart.innerHTML = origin;
  cellEnd.innerHTML = destination;
  cellView.innerHTML = '<a href="#">View</a>';

  // Clear input fields after saving the trip
  document.getElementById("origin").value = '';
  document.getElementById("destination").value = '';
}
document.getElementById("loginButton").addEventListener("click", function () {
  window.location.href = "authentication_page.html";
});
