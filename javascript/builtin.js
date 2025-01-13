function showAlert() {
    alert("This is a built-in alert!");
  }
  function parseIntExample() {
    const numStr = document.getElementById("intInput").value;
    const parsedNum = parseInt(numStr);
    document.getElementById("intResult").innerText = `parseInt result: ${parsedNum}`;
  }
  function parseFloatExample() {
    const numStr = document.getElementById("floatInput").value;
    const parsedNum = parseFloat(numStr);
    document.getElementById("floatResult").innerText = `parseFloat result: ${parsedNum}`;
  }
  function checkIsNaN() {
    const value = document.getElementById("nanInput").value;
    const result = isNaN(value) ? "The input is NaN (Not a Number)" : "The input is a valid number";
    document.getElementById("nanResult").innerText = result;
  }
  function convertToUpperCase() {
    const inputText = document.getElementById("textInput").value;
    const upperText = inputText.toUpperCase();
    document.getElementById("upperResult").innerText = `Uppercase result: ${upperText}`;
  }