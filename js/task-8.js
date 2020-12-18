const inputRef=document.querySelector('#controls input')
const addBtnRef = document.querySelector('button[data-action="render"]');
const clearBtnRef=document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

addBtnRef.addEventListener('click',destroyBoxes);
clearBtnRef.addEventListener('click',clearBoxes)
function destroyBoxes() {
    let amount = inputRef.value;
    const newBoxes = [];
    let sizeBoxes = 30;
    for (let i=0;i<amount;i+=1) {
        let newSize=sizeBoxes + i*10;
        let newDiv=document.createElement('div') ;
        newDiv.style.cssText=`width:${newSize}px; height:${newSize}px; background-color: rgba(${randomRgba()},${randomRgba()},${randomRgba()})`;
        newBoxes.push(newDiv);
    }
    boxesRef.append(...newBoxes);
    // newBoxes.map(el => boxesRef.appendChild(el));

}

function clearBoxes() {
    boxesRef.innerHTML='';
    inputRef.value='';
}
function randomRgba () {
    return  Math.floor(Math.random() * 256);
}
