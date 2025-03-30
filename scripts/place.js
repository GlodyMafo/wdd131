// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return (temp <= 10 && windSpeed > 4.8)
        ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + "°C"
        : "N/A";
}

// Set wind chill value on page load
const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
document.getElementById("wind-chill").textContent = calculateWindChill(temperature, windSpeed);
