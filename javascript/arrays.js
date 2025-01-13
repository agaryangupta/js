let array = [];
function addToArray() {
  const newElement = document.getElementById("arrayInput").value;
  if (newElement !== "") {
    array.push(newElement);
    document.getElementById("arrayResult").innerText = `Array: [${array.join(", ")}]`;
    document.getElementById("arrayInput").value = "";
  }
}
function removeFromArray() {
  array.pop();
  document.getElementById("arrayResult").innerText = `Array: [${array.join(", ")}]`;
}
function displayArrayLength() {
  document.getElementById("lengthResult").innerText = `Array Length: ${array.length}`;
}
function clearArray() {
  array = [];
  document.getElementById("arrayResult").innerText = "Array: []";
  document.getElementById("lengthResult").innerText = "Array Length: 0";
}