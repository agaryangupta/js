// math-random.js

// Function to generate a random number between a given range
function generateRandomNumber() {
    const min = parseInt(document.getElementById("minValue").value);
    const max = parseInt(document.getElementById("maxValue").value);
  
    // Generate random number between min and max (inclusive)
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Display the random number
    document.getElementById("randomResult").innerText = `Random Number: ${randomNum}`;
  }
  
  // Function to demonstrate Math.ceil()
  function demonstrateCeil() {
    const num = parseFloat(document.getElementById("ceilValue").value);
    const result = Math.ceil(num);
    document.getElementById("ceilResult").innerText = `Math.ceil(${num}) = ${result}`;
  }
  
  // Function to demonstrate Math.floor()
  function demonstrateFloor() {
    const num = parseFloat(document.getElementById("floorValue").value);
    const result = Math.floor(num);
    document.getElementById("floorResult").innerText = `Math.floor(${num}) = ${result}`;
  }
  
  // Function to demonstrate Math.round()
  function demonstrateRound() {
    const num = parseFloat(document.getElementById("roundValue").value);
    const result = Math.round(num);
    document.getElementById("roundResult").innerText = `Math.round(${num}) = ${result}`;
  }
  
  // Function to demonstrate Math.abs()
  function demonstrateAbs() {
    const num = parseFloat(document.getElementById("absValue").value);
    const result = Math.abs(num);
    document.getElementById("absResult").innerText = `Math.abs(${num}) = ${result}`;
  }
  