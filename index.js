/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* The `greet` function should take one argument, a `String` which specifies the
24-hour time in the format `HH:MM`.

- If the time is earlier than 12pm, return "Good Morning".
- If the time is between 12pm and 5pm, return "Good Afternoon".
- If the time is later than 5pm, return "Good Evening".

**NOTE:** The value returned from the `<input>` will be of type `String`.
You’ll need to take the `String` of the 24 hour time and convert it to a number. */

function greet(time) {
  let currentTime = time.split(":");
  let otherTime = currentTime[0].concat(currentTime[1]);
  let result = parseInt(otherTime, 10);

  if (result < 1200) {
    return "Good Morning";
  }

  else if (result > 1700) {
    return "Good Evening";
  }

  else {
    return "Good Afternoon";
  }
}

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}



/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
