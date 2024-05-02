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
    document.querySelector("#scheduleContainer").classList.add("hid");
    document.querySelector(".ell").classList.remove("hid");

    functog = false;
  } else {
    document.querySelector(".ell").classList.add("hid");
    document.querySelector("#scheduleContainer").classList.remove("hid");

    functog = true;
  }
});

function getCurrentActivity(schedule) {
  // Get current time
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var currentMinute = currentTime.getMinutes();
  var currentFormattedTime =
    currentHour + ":" + (currentMinute < 10 ? "0" : "") + currentMinute;

  for (var activity in schedule) {
    if (schedule.hasOwnProperty(activity)) {
      var activityTime = schedule[activity];

      if (currentFormattedTime >= activityTime) {
        var nextActivity = getNextActivity(schedule, activityTime);

        if (currentFormattedTime < nextActivity.time) {
          return activity;
        }
      }
    }
  }
  return null;
}

function getNextActivity(schedule, currentTime) {
  for (var activity in schedule) {
    if (schedule.hasOwnProperty(activity)) {
      var activityTime = schedule[activity];

      if (activityTime > currentTime) {
        return {
          activity: activity,
          time: activityTime,
        };
      }
    }
  }
  return null;
}

var schedule = {
  Attendance: "7:00",
  "1st Period": "7:15",
  "2nd Period": "7:55",
  Break1: "8:35",
  "3rd Period": "8:50",
  "4th Period": "9:25",
  "5th Period": "10:00",
  "6th Period": "10:35",
  "7th Period": "11:10",
  "8th Period": "11:45",
  "9th Period": "12:20",
  Break2: "12:55",
  "10th Period": "1:15",
  Dispersal: "1:50",
};

setInterval(() => {
  var currentActivity = getCurrentActivity(schedule);
  var spans = document
    .getElementById("scheduleContainer")
    .getElementsByTagName("span");
  for (var i = 0; i < spans.length; i++) {
    var spanTime = spans[i].textContent;
    if (spanTime === currentActivity) {
      spans[i].classList.add("pgd");
    } else {
      if ("pgd" in spans[i].classList) {
        spans[i].classList.remove("pgd");
      }
    }
  }
}, 6000);
