const container = document.querySelector("#container");

let boxCount = 4096;
let columnCount = Math.sqrt(boxCount);

container.style['grid-template-columns'] = `repeat(${columnCount}, 1fr)`;
for(i = 1; i <= boxCount; i++)
{
    let div = document.createElement('div');
    div.setAttribute('id', i);
    div.classList.add('box');
    div.addEventListener('mouseover', e =>{
        e.target.classList.add('painted');
    });
    container.appendChild(div);
}
