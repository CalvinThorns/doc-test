// Lesen der URL-Parameter
var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get('name');
var age = urlParams.get('age');
var location = urlParams.get('location');

// Anzeigen der Informationen in verschiedenen Farben
var detailsElement = document.getElementById("details");
detailsElement.innerHTML = "<p><span style='font-weight: bold; color: red;'>Name:</span> " + name + "</p>" +
                            "<p><span style='font-weight: bold; color: blue;'>Alter:</span> " + age + "</p>" +
                            "<p><span style='font-weight: bold; color: green;'>Ort:</span> " + location + "</p>";