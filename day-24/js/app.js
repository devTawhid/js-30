let nav = document.querySelector('nav');
const topOfNav = nav.offsetTop;

function navFix(e){
    if(nav.offsetTop <= scrollY){
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
        nav.classList.add('fixed-nav');
    }if(scrollY <= topOfNav){
        document.body.style.paddingTop = `${0}px`;
        nav.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', navFix);