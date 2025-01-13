function generateRandomNumber() {
    const min = parseInt(document.getElementById("minValue").value);
    const max = parseInt(document.getElementById("maxValue").value);
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("randomResult").innerText = `Random Number: ${randomNum}`;
  }
  function demonstrateCeil() {
    const num = parseFloat(document.getElementById("ceilValue").value);
    const result = Math.ceil(num);
    document.getElementById("ceilResult").innerText = `Math.ceil(${num}) = ${result}`;
  }
  function demonstrateFloor() {
    const num = parseFloat(document.getElementById("floorValue").value);
    const result = Math.floor(num);
    document.getElementById("floorResult").innerText = `Math.floor(${num}) = ${result}`;
  }
  function demonstrateRound() {
    const num = parseFloat(document.getElementById("roundValue").value);
    const result = Math.round(num);
    document.getElementById("roundResult").innerText = `Math.round(${num}) = ${result}`;
  }
  function demonstrateAbs() {
    const num = parseFloat(document.getElementById("absValue").value);
    const result = Math.abs(num);
    document.getElementById("absResult").innerText = `Math.abs(${num}) = ${result}`;
  }
  