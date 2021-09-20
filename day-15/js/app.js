const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    e.preventDefault();
    const text = document.querySelector("input[type=text]:nth-child(1)").value;
    items.push({
        text,
        done: false
    });

    localStorage.setItem('items', JSON.stringify(items));
    let item = JSON.parse(localStorage.getItem('items'));
    itemsList.innerHTML = polulateList(item);
    this.reset();
}

window.onload = () => {
    let item = JSON.parse(localStorage.getItem('items'));
    if(item){
        itemsList.innerHTML = polulateList(item);
    }
};

function polulateList(plates = []){
    let elem = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>`; 
    }).join('');

    return elem;
}

function toggleDone(e){
    [...this.children].forEach(li => {
        li.addEventListener('click', e => {
            let i = [...li.children][0];
            if(i.checked){
                items[i.dataset.index].done = true;
                localStorage.setItem('items', JSON.stringify(items));
            }else{
                items[i.dataset.index].done = false;
                localStorage.setItem('items', JSON.stringify(items));
            }
        });
    });
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);