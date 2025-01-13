function convertTemperature() {
    const tempValue = parseFloat(document.getElementById("tempValue").value);
    const tempUnit = document.getElementById("tempUnit").value;
    let result;
    if (tempUnit === "Celsius") {
      result = (tempValue * 9/5) + 32;
      document.getElementById("tempResult").innerText = `${tempValue} °C = ${result.toFixed(2)} °F`;
    } else if (tempUnit === "Fahrenheit") {
      result = (tempValue - 32) * 5/9;
      document.getElementById("tempResult").innerText = `${tempValue} °F = ${result.toFixed(2)} °C`;
    }
  }
  function convertLength() {
    const lengthValue = parseFloat(document.getElementById("lengthValue").value);
    const lengthUnit = document.getElementById("lengthUnit").value;
    let result;
    if (lengthUnit === "Meters") {
      result = lengthValue / 1000;
      document.getElementById("lengthResult").innerText = `${lengthValue} m = ${result.toFixed(3)} km`;
    } else if (lengthUnit === "Kilometers") {
      result = lengthValue * 1000;
      document.getElementById("lengthResult").innerText = `${lengthValue} km = ${result.toFixed(0)} m`;
    }
  }
  function convertWeight() {
    const weightValue = parseFloat(document.getElementById("weightValue").value);
    const weightUnit = document.getElementById("weightUnit").value;
    let result;
    if (weightUnit === "Kilograms") {
      result = weightValue * 2.20462;
      document.getElementById("weightResult").innerText = `${weightValue} kg = ${result.toFixed(2)} lbs`;
    } else if (weightUnit === "Pounds") {
      result = weightValue / 2.20462;
      document.getElementById("weightResult").innerText = `${weightValue} lbs = ${result.toFixed(2)} kg`;
    }
  }
  