const container = document.querySelector("#container");

for(i = 1; i <= 256; i++)
{
    let div = document.createElement('div');
    div.setAttribute('id', i);
    div.classList.add('box');
    container.appendChild(div);
}