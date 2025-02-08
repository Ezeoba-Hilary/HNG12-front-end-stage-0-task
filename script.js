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
