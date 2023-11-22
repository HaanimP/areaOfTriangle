// Get the button element
let convertButton = document.getElementById("convertButton");

// Add event listener to the button
convertButton.addEventListener("click", function() {
    calculateTriangleArea();
});

// Function to calculate the area of a triangle
function calculateTriangleArea() {
    // Get the values entered by the user for base and height
    let baseInput = document.getElementById("base").value;
    let heightInput = document.getElementById("height").value;

    // Validate the inputs
    if (isNaN(baseInput) || isNaN(heightInput) || baseInput < 0 || heightInput < 0) {
        alert("Please enter valid positive numbers for the base and height.");
        return;
    }

    // Call the function to calculate the area
    let area = calculateAreaOfTriangle(parseFloat(baseInput), parseFloat(heightInput));

    // Display the result in the DOM
    displayResult(area);
}

// Function to calculate the area of a triangle
function calculateAreaOfTriangle(base, height) {
    // Area of a triangle formula: (base * height) / 2
    return (base * height) / 2;
}

// Function to display the result in the DOM
function displayResult(area) {
    // Get the result element
    let resultElement = document.getElementById("result");

    // Format the result to two decimal places
    let formattedResult = area.toFixed(2);

    // Display the result in the DOM
    resultElement.innerHTML = "Area: " + formattedResult + " square units";
}