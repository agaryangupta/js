function checkDataType() {
    const userInput = document.getElementById("userInput").value;
    if (!isNaN(userInput)) {
      const num = parseFloat(userInput);
      document.getElementById("dataTypeResult").innerText = `The data type is: Number\nValue: ${num}`;
    }
    else if (userInput.toLowerCase() === "true" || userInput.toLowerCase() === "false") {
      const bool = (userInput.toLowerCase() === "true");
      document.getElementById("dataTypeResult").innerText = `The data type is: Boolean\nValue: ${bool}`;
    }
    else if (userInput.trim().startsWith("{") && userInput.trim().endsWith("}")) {
      try {
        const jsonObj = JSON.parse(userInput);
        document.getElementById("dataTypeResult").innerText = `The data type is: Object\nValue: ${JSON.stringify(jsonObj)}`;
      } catch (error) {
        document.getElementById("dataTypeResult").innerText = `Error: Invalid Object Syntax`;
      }
    }
    else {
      document.getElementById("dataTypeResult").innerText = `The data type is: String\nValue: "${userInput}"`;
    }
  }
  