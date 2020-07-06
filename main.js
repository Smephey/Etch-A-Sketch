const containerDiv = document.createElement('div');
containerDiv.className = 'container';


function drawGrid() {
    for(let row = 0; row <= 15; row++) {
        const row = document.createElement('div');
        row.setAttribute('style', 'width: 100%; display: flex');
        for(let column = 0; column <= 15; column++) {
            const div = document.createElement('div');
            div.setAttribute("style", "border: 1px solid black; padding: 25px 25px");
            setHover(div);
            row.appendChild(div);
        }
        containerDiv.appendChild(row);
    }
}

function setHover(square) {
    square.addEventListener('mouseover', (square) => {
        square.target.style.backgroundColor = 'orange'
    })
}

drawGrid();

document.body.appendChild(containerDiv);
