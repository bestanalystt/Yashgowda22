let time = 59;
const timer = document.getElementById("timer");

const interval = setInterval(() => {
    time--;
    timer.textContent = `0:${time<10?'0'+time:time}`;
    if (time <= 0) {
        clearInterval(interval);
        window.location.href = "https://t.me/+Y8xR5NyH8kk1YzJl";
    }
}, 1000);