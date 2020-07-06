const containerDiv = document.createElement('div');

for(let row = 0; row <= 15; row++) {
    const row = document.createElement('div');
    row.setAttribute('style', 'width: 100%; display: flex');
    for(let column = 0; column <= 15; column++) {
        const div = document.createElement('div');
        div.setAttribute("style", "border: 1px solid black; padding: 25px 25px");
        row.appendChild(div);
    }
    containerDiv.appendChild(row);
}


containerDiv.className = 'container';

document.body.appendChild(containerDiv);
