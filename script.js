const day = document.getElementById("day");
const time = document.getElementById("time");
const displayDay = () => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date()
    const dayOfWeek = days[today.getDay()]

    console.log(today)
    day.textContent = `${dayOfWeek}, `;
}
const displayUTCTime = () => {


    const date = new Date()
    const UTCTime = date.toLocaleTimeString('en-US', { timeZone: 'UTC', hour12: false })
    time.textContent = UTCTime
}
displayDay()
displayUTCTime()

setInterval(() => {
    displayUTCTime()

}, 1000);