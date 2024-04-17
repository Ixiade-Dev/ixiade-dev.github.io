function ex3BtnClick() {
    const ex3Div = document.getElementById('ex3-div');
    ex3Div.innerHTML = 'Hello World !';
}

function ex4InputSubmit(event) {
    event.preventDefault();
    const ex4Input = document.getElementById('ex4-input');
    const ex4Div = document.getElementById('ex4-div');
    setTimeout(() => {
        ex4Div.innerHTML = ex4Input.value;
    }, 1500);
}

function generateRandomText() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateFakeClass() {
    const ex6Boxes = document.getElementsByClassName('ex6-box');
    for (let i = 0; i < ex6Boxes.length; i++) {
        ex6Boxes[i].id = generateRandomText();
        ex6Boxes[i].style.backgroundColor = 'yellow';
    }
}

function changeBoxBackground(nb) {
    const ex6Boxes = document.getElementsByClassName('ex6-box');
    ex6Boxes[nb].style.backgroundColor = 'chartreuse';
}

function addSpacer() {
    const spacer = document.createElement('section');
    spacer.className = 'spacer';
    document.body.appendChild(spacer);
}

function addLink() {
    let backLink = document.createElement('a');
    backLink.textContent = 'Revenir à la page précédente';
    backLink.href = '';
    document.body.appendChild(backLink);
}