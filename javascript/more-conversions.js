function convertNumberToString() {
    const number = parseFloat(document.getElementById("numberValue").value);
    const result = number.toString();
    document.getElementById("numberToStringResult").innerText = `Number to String: ${result}`;
  }
  function convertStringToNumber() {
    const string = document.getElementById("stringValue").value;
    const result = parseFloat(string);
    document.getElementById("stringToNumberResult").innerText = `String to Number: ${result}`;
  }
  function convertBooleanToString() {
    const booleanValue = document.getElementById("booleanValue").checked;
    const result = booleanValue.toString();
    document.getElementById("booleanToStringResult").innerText = `Boolean to String: ${result}`;
  }
  function convertStringToBoolean() {
    const stringValue = document.getElementById("stringToBooleanValue").value.toLowerCase();
    const result = (stringValue === "true");
    document.getElementById("stringToBooleanResult").innerText = `String to Boolean: ${result}`;
  }
  function convertNumberToBoolean() {
    const number = parseFloat(document.getElementById("numberToBooleanValue").value);
    const result = Boolean(number);
    document.getElementById("numberToBooleanResult").innerText = `Number to Boolean: ${result}`;
  }
  function convertBooleanToNumber() {
    const booleanValue = document.getElementById("booleanToNumberValue").checked;
    const result = Number(booleanValue);
    document.getElementById("booleanToNumberResult").innerText = `Boolean to Number: ${result}`;
  }
  function convertDateToString() {
    const date = new Date(document.getElementById("dateValue").value);
    const result = date.toString();
    document.getElementById("dateToStringResult").innerText = `Date to String: ${result}`;
  }
  function convertStringToDate() {
    const string = document.getElementById("stringToDateValue").value;
    const result = new Date(string);
    document.getElementById("stringToDateResult").innerText = `String to Date: ${result}`;
  }
  function convertArrayToString() {
    const array = document.getElementById("arrayValue").value.split(",");
    const result = array.toString();
    document.getElementById("arrayToStringResult").innerText = `Array to String: ${result}`;
  }
  function convertStringToArray() {
    const string = document.getElementById("stringToArrayValue").value;
    const result = string.split(",");
    document.getElementById("stringToArrayResult").innerText = `String to Array: ${JSON.stringify(result)}`;
  }
  function convertCharacterToASCII() {
    const character = document.getElementById("charToASCIIValue").value;
    const result = character.charCodeAt(0);
    document.getElementById("charToASCIIResult").innerText = `Character to ASCII: ${result}`;
  }
  