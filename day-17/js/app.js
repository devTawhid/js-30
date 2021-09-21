const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const band = document.querySelector('#bands');

bands.sort();
let html = bands.map(val => {
    return `<li> ${val} </li>`;
}).join('');

band.innerHTML = html;

// there is something missing here too.