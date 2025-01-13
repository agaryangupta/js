function greet(name) {
    return `Hello, ${name}!`;
  }
  function multiply(a, b) {
    return a * b;
  }
  function displayGreeting() {
    const name = document.getElementById("nameInput").value;
    const message = greet(name);
    document.getElementById("greeting").innerText = message;
  }
  function displayMultiplication() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = multiply(num1, num2);
    document.getElementById("result").innerText = `Result: ${result}`;
  }
  

  
  

  
  