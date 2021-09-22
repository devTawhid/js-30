const links = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function styleMove(e){
    let cordenate = this.getBoundingClientRect();
    console.log(cordenate);

    highlight.style.width = `${cordenate.width}px`;
    highlight.style.height = `${cordenate.height}px`;
    highlight.style.top = `${cordenate.top + scrollY}px`;
    highlight.style.left = `${cordenate.left}px`;

}

[...links].forEach(a => {
    a.addEventListener('mouseover', styleMove);
});