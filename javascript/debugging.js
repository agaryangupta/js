function debugCode() {
    const codeSnippet = document.getElementById("codeInput").value;
    try {
      const result = eval(codeSnippet);
      document.getElementById("outputDebugging").innerText = `Result: ${result}`;
    } catch (error) {
      document.getElementById("outputDebugging").innerText = `Error: ${error.message}`;
    }
  }
  