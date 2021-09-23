const divs = document.querySelectorAll('div');

function logText(e){
    console.log(this.classList.value);
    e.stopPropagation(true);
}

divs.forEach( div =>{
    div.addEventListener("click", logText,{
    // capture: true,
    once: true,
    });

    
    // // once: true, works just like this
    // div.removeEventListener("click", logText);
});
    