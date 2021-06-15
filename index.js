/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

const greet = (string) => {
  const timeString = string.split(":");
  const timeArray = timeString.join('');
  const parsedTime = parseInt(timeArray); 
    if (parsedTime < 1200) {
      return "Good Morning";
    } else if (parsedTime >= 1200 && parsedTime < 1700) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    };
};

const message = document.getElementById('greeting');

const displayMessage = (string) => {
  console.log(message.innerText = string);
};
