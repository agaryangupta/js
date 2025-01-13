function displayCurrentDate() {
    const currentDate = new Date();
  
    const isoFormat = currentDate.toISOString();
    const utcFormat = currentDate.toUTCString();
    const localeDateFormat = currentDate.toLocaleDateString();
    const localeTimeFormat = currentDate.toLocaleTimeString();
    const customFormat = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
    document.getElementById("currentDate").innerHTML = `
      <p><strong>ISO Format:</strong> ${isoFormat}</p>
      <p><strong>UTC Format:</strong> ${utcFormat}</p>
      <p><strong>Locale Date Format:</strong> ${localeDateFormat}</p>
      <p><strong>Locale Time Format:</strong> ${localeTimeFormat}</p>
      <p><strong>Custom Format (YYYY-MM-DD HH:MM:SS):</strong> ${customFormat}</p>
    `;
  }
  function calculateDateDifference() {
    const userDate = new Date(document.getElementById("userDateInput").value);
    const currentDate = new Date();
    const timeDifference = currentDate - userDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    document.getElementById("dateDifference").innerText = `Days Difference: ${daysDifference} days`;
  }
  