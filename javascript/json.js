const usersJSON = `
[
  { "name": "Alice", "age": 25, "city": "New York" },
  { "name": "Bob", "age": 30, "city": "San Francisco" },
  { "name": "Charlie", "age": 35, "city": "Chicago" }
]`;
function displayUsers() {
  const users = JSON.parse(usersJSON);
  let result = "<ul>";
  users.forEach(user => {
    result += `<li>${user.name}, Age: ${user.age}, City: ${user.city}</li>`;
  });
  result += "</ul>";
  document.getElementById("outputJSON").innerHTML = result;
}
function addUser() {
  const newUser = {
    name: document.getElementById("nameInput").value,
    age: parseInt(document.getElementById("ageInput").value),
    city: document.getElementById("cityInput").value
  };
  let users = JSON.parse(usersJSON);
  users.push(newUser);
  let updatedResult = "<ul>";
  users.forEach(user => {
    updatedResult += `<li>${user.name}, Age: ${user.age}, City: ${user.city}</li>`;
  });
  updatedResult += "</ul>";
  document.getElementById("outputJSON").innerHTML = updatedResult;
}
