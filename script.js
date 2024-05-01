function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  if (hours > 12) {
    hours = hours - 12;
  }
  // Add leading zeros
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var timeString = hours + " " + minutes;
  document.getElementById("current-time").textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call
updateTime();

function updateDate() {
  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth() + 1; // Month is zero-based
  var year = now.getFullYear();

  // Add leading zeros if needed
  day = (day < 10 ? "0" : "") + day;
  month = (month < 10 ? "0" : "") + month;

  var dateString = day + " / " + month + " / " + year;
  document.getElementById("current-date").textContent = dateString;
}

// Initial call
updateDate();
let functog = true;
document.querySelector(".func").addEventListener("click", function () {
  if (functog == true) {
    document.querySelector(".ell").classList.remove("hid");
    functog = false;
  } else {
    document.querySelector(".ell").classList.add("hid");
    functog = true;
  }
});
