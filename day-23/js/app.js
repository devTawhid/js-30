const msg = new SpeechSynthesisUtterance();
let voices = [];

const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = options[2].value;
msg.pitch = options[1].value;
msg.rate = options[0].value;

function processTalk(){
    voices = this.getVoices();
    let option = voices.map(voice => {
        return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    }).join('');
    voicesDropdown.innerHTML = option;
}

function setVoice(e) {
    // console.log(e.target.value);
    // console.log(this.value);
    // msg.voice = this.value; is not possible
    speechSynthesis.cancel();
    msg.voice = voices.find(voice => voice.name === this.value);
}

function talk(e){
    if(e.target === speakButton){
        speechSynthesis.speak(msg);
    }else{
        speechSynthesis.cancel();
    }
}

speechSynthesis.addEventListener("voiceschanged", processTalk);
voicesDropdown.addEventListener("change", setVoice);
speakButton.addEventListener("click", talk);
stopButton.addEventListener("click", talk);