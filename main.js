const containerDiv = document.createElement('div');

for(let row = 0; row <= 15; row++) {
    for(let column = 0; column <= 15; column++) {
        const div = document.createElement('div');
        div.setAttribute("style", "border: 1px solid black; padding: 1px 1px");
        containerDiv.appendChild(div);
    }
}


containerDiv.className = 'container';

document.body.appendChild(containerDiv);