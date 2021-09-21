const videos = document.querySelector('.videos');
let totalMin = 0;
let totalSec = 0;
let total = 0;

[...videos.children].forEach(li => {
    let time = li.dataset.time;
    time = time.split(':');
    totalMin += parseInt(time[0]);
    totalSec += parseInt(time[1]);
});

total = (totalMin * 60 + totalSec);
const hr = Math.floor(total / 3600);
const mn = Math.floor((total - hr * 3600) / 60);
const sec = total - hr * 3600 - mn * 60;
console.log(`${hr}:${mn}:${sec}`);
