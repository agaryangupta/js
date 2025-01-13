function generateNumbers() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
      result += `Number: ${i}<br>`;
    }
    document.getElementById("outputForLoop").innerHTML = result;
  }
  function sumArray() {
    const numbers = [5, 10, 15, 20];
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    document.getElementById("outputForOfLoop").innerHTML = `Sum of array: ${sum}`;
  }
  function displayObjectProperties() {
    const person = { name: "Alice", age: 25, city: "New York" };
    let result = "";
    for (const key in person) {
      result += `${key}: ${person[key]}<br>`;
    }
    document.getElementById("outputForInLoop").innerHTML = result;
  }
  