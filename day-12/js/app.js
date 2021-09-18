let arr = [];
let ch = '';
let specialChar = 'tawhid';

window.addEventListener('keypress', e => {
    arr.push(e.key);
    if(arr.length > 6) {
        arr.shift();
    }
    
    ch = arr.join('');
    if(ch === specialChar) {
        cornify_add();
    }
});