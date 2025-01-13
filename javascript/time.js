function displayCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const milliseconds = currentDate.getMilliseconds();
    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${milliseconds}`;
    document.getElementById("currentTime").innerText = `Current Time: ${timeString}`;
    setTimeout(displayCurrentTime, 1000);
  }
  function formatTime(value) {
    return value < 10 ? `0${value}` : value;
  }
  function displayTimeInfo() {
    const currentDate = new Date();
    
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const milliseconds = currentDate.getMilliseconds();
    const day = currentDate.getDay();
    
    document.getElementById("timeInfo").innerHTML = `
      <b>Hours:</b> ${hours}<br>
      <b>Minutes:</b> ${minutes}<br>
      <b>Seconds:</b> ${seconds}<br>
      <b>Milliseconds:</b> ${milliseconds}<br>
      <b>Day of the week:</b> ${getDayName(day)}
    `;
  }
  function getDayName(dayIndex) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
  }
  displayCurrentTime();
  