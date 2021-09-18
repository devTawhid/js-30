const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
              .then(data => data.json())
              .then(data => cities.push(...data))
              .catch(err => console.error(err.msg));

function findMatch(wordToFind, cities){
    return cities.filter(places => {
        let regex = new RegExp(wordToFind, 'gi');
        return places.city.match(regex) || places.state.match(regex);
    });
};

let input = document.querySelector('.search');
let suggestions = document.querySelector('.suggestions');

function display(){
    let value = findMatch(this.value, cities);
    console.table(value);

    let html = [...value].map(place => {
        let regex = new RegExp(this.value, 'gi');
        let cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        let stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${place.population}</span>
            </li>`;
    }).join('');

    suggestions.innerHTML = html;
}

"change keypress".split(" ").forEach(e => input.addEventListener(e, display));
