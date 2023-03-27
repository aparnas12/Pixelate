// Your code here
const pixelTable = document.getElementById('pixel-table');
function makeRow () {
    const tr = document.createElement('tr');
    for (let i = 0; i < 20; i++) {
    const td = document.createElement('td');
    tr.appendChild(td);
    pixelTable.appendChild(tr);
}

} 
makeRow ();
makeRow ();
makeRow ();