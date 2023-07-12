const container = document.querySelector("#container");

let mouseDown = false;
document.addEventListener('mousedown', e =>{
    mouseDown = true;
});
document.addEventListener('mouseup', e =>{
    mouseDown = false;
});

let columnCount = 16;
MakeContainer();

function MakeContainer()
{   
    let boxes = document.querySelectorAll('.box');

    boxes.forEach(box =>
        {
            box.remove();
        });
    container.style['grid-template-columns'] = `repeat(${columnCount}, 1fr)`;
    for(i = 1; i <= columnCount * columnCount; i++)
    {
        let div = document.createElement('div');
        div.setAttribute('id', i);
        div.classList.add('box');
        div.addEventListener('mouseover', e =>{
            Paint(e);
        });
        div.addEventListener('mousedown', e =>{
            Paint(e);
        });
        container.appendChild(div);
    }
}

function Paint(e)
{
    if((mouseDown && e.type === 'mouseover') || e.type === 'mousedown')
    {
        e.target.classList.add('painted');
    }
    
}

function ChangeSliderValue(slider, check)
{
    document.getElementById("sliderValue").textContent=slider.value+"x"+slider.value;
    columnCount = slider.value;
    if(check)
        MakeContainer();
}
