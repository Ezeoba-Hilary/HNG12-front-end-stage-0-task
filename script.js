// My OpenCage API key
const apiKey = '6dc01824fdaf4abca5458a4dedc15b62';

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Use OpenCage Geocoding API to get location details
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const locationDetails = data.results[0].components;
      const country = locationDetails.country;
      const state = locationDetails.state;
      const city = locationDetails.city || locationDetails.town || locationDetails.village;

      const locationElement = document.getElementById('location');
      locationElement.innerHTML = `<b>Country:</b> ${country} <br> <b>State:</b> ${state} <br> <b>City:</b> ${city}`;
    })
    .catch(error => {
      console.error('Error fetching location details:', error);
      document.getElementById('location').innerHTML = 'Unable to fetch location details.';
    });
}

function showError(error) {
  const locationElement = document.getElementById('location');
  switch(error.code) {
    case error.PERMISSION_DENIED:
      locationElement.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      locationElement.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      locationElement.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      locationElement.innerHTML = "An unknown error occurred.";
      break;
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    const locationElement = document.getElementById('location');
    locationElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

getLocation();


// For time in UTC
    function UpdateTime() {
      const current = new Date();

      // Get the time in UTC
      const hours = current.getUTCHours().toString().padStart(2, '0');
      const minutes = current.getUTCMinutes().toString().padStart(2, '0');
      const seconds = current.getUTCSeconds().toString().padStart(2, '0');
      const time = `${hours}:${minutes}:${seconds} UTC`;

      const timenow = document.getElementById('currentTime');

      if (timenow) {
        timenow.textContent = time;
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      UpdateTime();
      setInterval(UpdateTime, 1000);
    });
