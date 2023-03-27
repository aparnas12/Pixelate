// Your code here
const pixelTable = document.getElementById('pixel-table');
function makeRow() {
    const tr = document.createElement('tr');
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        pixelTable.appendChild(tr);
    }

}
makeRow();
makeRow();
makeRow();

const rowButton = document.getElementById("add-row");

rowButton.addEventListener('click',() => {makeRow()});

pixelTable.addEventListener('click',(event) => {colorize(event)});

function colorize(event) {

    console.log('clicked')
    const tdCell = event.target;
  
        if (tdCell.className.length >0)
        {
            tdCell.className = '';

        }
        else{
            tdCell.className ='red';
        }  
};

const selectColor = document.getElementsByTagName('select');

selectColor.addEventListener('change', (event) => {chooseColor(event)});

function chooseColor (event) {
    console.log(event.target.value);
}


