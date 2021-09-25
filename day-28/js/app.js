const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');
let isDown = false;

speed.addEventListener('mousedown', () => isDown = true);
speed.addEventListener('mouseup', () => isDown = false);
speed.addEventListener('mouseleave', () => isDown = false);
speed.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!isDown) return;
    let x = e.offsetY * 100 / speed.offsetHeight;
    let y = e.offsetY * 4 / speed.offsetHeight;
    bar.style.height = `${x}%`;
    bar.innerHTML = `${Math.round(y * 10) / 10}x`;
    video.playbackRate = `${Math.round(y * 10) / 10}`;
});
