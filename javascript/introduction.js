function displayIntroduction() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const city = document.getElementById("cityInput").value;
    const hobby = document.getElementById("hobbyInput").value;
    const introduction = `Hello! My name is ${name}. I am ${age} years old, and I live in ${city}. My favorite hobby is ${hobby}.`;
    document.getElementById("outputIntroduction").innerText = introduction;
  }
  