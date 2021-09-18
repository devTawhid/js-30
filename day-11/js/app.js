const video = document.querySelector('.viewer');
const playerButton = document.querySelector('.player__button');
const progress = document.querySelector(".progress__filled");
const progressCon = document.querySelector(".progress");
const volume = document.getElementsByName('volume')[0];
const playbackRate = document.getElementsByName('playbackRate')[0];
const back = document.querySelector('[data-skip="-10"]');
const forward = document.querySelector('[data-skip="25"]');

progress.style.flexBasis = '0';


function playPause(){
    if(video.paused === true) {
        video.play();
        playerButton.innerHTML = '▌▌';
    }else{
        video.pause();
        playerButton.innerHTML = '►';
    }
}

function progressHandler(){
    if(video.paused === false){
        setInterval(() => {
            let time = video.currentTime * 100 / video.duration;
            progress.style.flexBasis = `${time}%`;
        }, 100);
    }
}

function progressController(e){
    video.currentTime = e.offsetX;
    video.pause();
    video.play();
}

function volumeSlide(e){
    video.volume = e.offsetX * 1.5 / 235;
}

function playBackSlider(e){
    video.playbackRate = e.offsetX * 1.5 / 235 + .5;
}

function skipBack(){
    video.currentTime = video.currentTime - 10;
}

function skipForward(){
    video.currentTime = video.currentTime + 25;
}

video.addEventListener('click', playPause);
playerButton.addEventListener('click', playPause);
video.addEventListener('playing', progressHandler);
progressCon.addEventListener('click', progressController);
volume.addEventListener('click', volumeSlide);
playbackRate.addEventListener('click', playBackSlider);
back.addEventListener('click', skipBack);
forward.addEventListener('click', skipForward);