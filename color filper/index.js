const btn = document.querySelector('.btn');
const color = document.querySelector('#color');
const hexacode = [0, 1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandom() {
    return Math.floor(Math.random() * hexacode.length);
}

btn.addEventListener('click', () => {
    let hexacolor = '#';
    for (let i = 0; i < 6; i++) {
        hexacolor += hexacode[getRandom()];
    }
    document.body.style.backgroundColor = hexacolor;
    color.textContent = hexacolor;
});