const checkbox = document.querySelectorAll('input[type="checkbox"]');

let lastChecked = false;
let inBetween = false;

function handleCheck(e){
    if(e.shiftKey && this.checked && lastChecked.checked) {
        checkbox.forEach(input => {
            if(input.checked || lastChecked === this){
                inBetween = !inBetween;
            }
            if(inBetween){
                input.checked = true;
            }
        });
    }
    
    lastChecked = this;
}

[...checkbox].forEach(input => input.addEventListener('click', handleCheck) );
