const container = document.querySelector("#container");

for(i = 1; i <= 256; i++)
{
    let div = document.createElement('div');
    div.setAttribute('id', i);
    div.classList.add('box');
    div.addEventListener('mouseover', e =>{
        e.target.classList.add('painted');
    });
    container.appendChild(div);
}
