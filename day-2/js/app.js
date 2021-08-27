setInterval(ttime, 1000);

function ttime() {
  let date = new Date();
  let s = date.getSeconds();
  let m = date.getMinutes();
  let h = date.getHours() % 12;
  let seconds = document.getElementById("second");
  let minutes = document.getElementById("minutes");
  let hour = document.getElementById("hour");

  seconds.style.transform = `rotate(${6 * s + 90}deg)`;
  minutes.style.transform = `rotate(${6 * m + 90 + 0.1 * s}deg)`;
  hour.style.transform = `rotate(${30 * h + 90 + 0.5 * m}deg)`;
}
