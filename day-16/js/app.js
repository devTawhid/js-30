const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e){
    // const x = e.clientX;
    // const y = e.clientY;
    const {clientX: x, clientY: y} = e;
    // console.log(x, y);

    // let walkX = (innerWidth / 2 - x);
    // let walkY = (innerHeight / 2 - y);
    let walkX;
    let walkY;

    if(innerWidth / 2 - x > 0){
        walkX = (innerWidth / 2 - x) - walk;
    }else {
        walkX = (innerWidth / 2 - x) + walk;
    }

    if(innerHeight / 2 - y > 0){
        walkY = (innerHeight / 2 - y) - walk;
    }else {
        walkY = (innerHeight / 2 - y) + walk;
    }
    
    console.log(walkX, walkY);
    text.style.textShadow = `${walkX}px ${walkY}px 0 red`;
}

hero.addEventListener('mousemove', shadow);

// some more things needs to be fixed later on

