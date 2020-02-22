const dashboardTimer = document.querySelector('.timer__time');
const hoursContainer = document.querySelector('.timer__time__hours .time');
const minutesContainer = document.querySelector('.timer__time__minutes .time');
const secondsContainer = document.querySelector('.timer__time__seconds .time');
const timerEventName = document.querySelector('#event-name');
const dayOneButton = document.querySelector("#dy1")
const dayTwoButton = document.querySelector("#dy2")
// dashboard timer

const activities = [
  { name: 'Midnight snack', timeStamp: new Date('2020-02-22T00:00:00') },
  { name: 'Breakfast', timeStamp: new Date('2020-02-22T08:00:00') },
  { name: 'Submission Deadline', timeStamp: new Date('2020-02-22T10:00:00') },
  { name: 'Hacking Ends!', timeStamp: new Date('2020-02-22T11:00:00') },
  { name: 'Lunch', timeStamp: new Date('2020-02-22T11:00:00') },
  { name: 'Demos and Judging', timeStamp: new Date('2020-02-22T12:00:00') },
  { name: 'Closing Ceremony', timeStamp: new Date('2020-02-22T14:00:00') },
  { name: 'Hackathon ends', timeStamp: new Date('2020-02-22T15:00:00') },
];

function timer(seconds) {
  const END_DATE = new Date('2020-02-24T15:00:00')
  setInterval(() => {
    const remainingTime = END_DATE - Date.now();
    const hours = remainingTime / (1000 * 60 * 60);
    const minutes = (hours - Math.trunc(hours)) * 60;
    const seconds = (minutes - Math.trunc(minutes)) * 60;

    hoursContainer.textContent = `${Math.trunc(hours)} :`;
    minutesContainer.textContent = `${Math.trunc(minutes)} :`;
    secondsContainer.textContent = Math.trunc(seconds);
  }, 1000);
}
const handleScheduleChange = evt => {
  console.log(evt);
  const current = document.querySelector(".active")
  const update = document.querySelector(".hidden")
  console.log("current",current);
  console.log("update", update);

  current.classList.remove("active")
  current.classList.add("hidden")

  update.classList.remove("hidden")
  update.classList.add("active")
}

dayOneButton.addEventListener("click", handleScheduleChange)
dayTwoButton.addEventListener("click", handleScheduleChange)

timer();
