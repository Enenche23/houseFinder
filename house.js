function ValidateNumber(value) {
    // Validate the number
    // if (!isNumber(Value)) {
    alert("Please enter a number.");
}

function ValidateZipCode(value) {
    // Validate the zip code
     if (!isNumber(value) ) {
    alert("please enter a zip code in the form XXXXX.");
     }
}

function calcPrice () {
    var maxPrice = document.getElementById("income").value * 4;
    alert("You can afford a house that costs up to $" + maxPrice + ".");
}

function findHouses(form) {
    var bedrooms = document.getElementsByTagName("bedrooms").value;
    var zipCode = document.getElementById("zip").value;
    // Display a list of matching houses from the Server form.submit();
}