function evaluateExpression() {
    const expression = document.getElementById("expressionInput").value;
    try {
      document.getElementById("outputExpression").innerText = `Result: ${result}`;
    } catch (error) {
      document.getElementById("outputExpression").innerText = "Error: Invalid Expression";
    }
  }
  