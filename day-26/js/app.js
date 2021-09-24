{
    // const ul = document.querySelector('.cool');
    // const span = document.querySelector('.top');
    // span.classList.add('dropdown');

    // function linkAction(e){
    //     this.classList.add('trigger-enter', 'trigger-enter-active');
    //     span.style.height = `${this.offsetHeight}px`;
    //     span.style.height = `${this.offsetWidth}px`;
    //     console.log(this.offsetHeight);
    // }

    // function linkActionEnd(e){
    //     this.classList.remove('trigger-enter', 'trigger-enter-active');
    //     console.log(this)
    // }

    // [...ul.children].forEach(li => {
    //     li.addEventListener('mouseenter',linkAction);
    //     li.addEventListener('mouseleave',linkActionEnd);
    // });
}

const triggers = document.querySelectorAll('.cool > li');
const background  = document.querySelector('.dropdownBackground');
const nav  = document.querySelector('.top');

function handleEnter(e){
    this.classList.add('trigger-enter');
    setTimeout(() =>{
        // if(this.classList.contains('trigger-enter')){
        //     this.classList.add('trigger-enter-active')
        // }
        this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active');
        
    }, 150);
    background.classList.add('open');
    let navCords = nav.getBoundingClientRect();
    
    let cordenate = this.children[1].getBoundingClientRect();
    background.style.top = `${cordenate.top - navCords.top}px`;
    background.style.left = `${cordenate.left}px`;
    background.style.height = `${cordenate.height}px`;
    background.style.width = `${cordenate.width}px`;
    console.log(this.children[1]);
}

function handleLeave(e){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(li => li.addEventListener('mouseenter', handleEnter));
triggers.forEach(li => li.addEventListener('mouseleave', handleLeave));