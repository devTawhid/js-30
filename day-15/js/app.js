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
    // wes bos way
    // if(!e.target.matches('input')) return;
    // const el = e.target;
    // const index = el.dataset.index;
    // items[index].done = !items[index].done;
    // localStorage.setItem('items', JSON.stringify(items));
    // populateList(items);


    // here this = ul so
    // this.children = all the current and future "li"
    [...this.children].forEach(li => {
        li.addEventListener('click', e => {
            // here li is the parent now so spreading the children with ... operator in an array
            // the selecting the [0] index child who is an input and initialize it in "i"
            let i = [...li.children][0];
            if(i.checked){
                // here i.dataset.index is coming from data-index=${i} 
                items[i.dataset.index].done = true;
                //interacting with localStorage
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