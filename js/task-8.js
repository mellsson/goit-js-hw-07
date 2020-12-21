const inputRef=document.querySelector('#controls input')
const addBtnRef = document.querySelector('button[data-action="render"]');
const clearBtnRef=document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
let arrSizeBoxes=[30];
addBtnRef.addEventListener('click',getAmount);
clearBtnRef.addEventListener('click',clearBoxes)

function getAmount() {
    let amount = inputRef.value;
    const arrAmount=[...Array(Number(amount))].map((el, i) => i);
    createBoxes(arrAmount);
}

function createBoxes(arrAmount) {
    let sizeBoxes= arrSizeBoxes[arrSizeBoxes.length - 1];
    const newBoxes = [];
    arrAmount.forEach(i => {
        let newSize=sizeBoxes + i*10;
        let newDiv=document.createElement('div') ;
        newDiv.style.cssText=`width:${newSize}px; height:${newSize}px; background-color: rgba(${randomRgba()},${randomRgba()},${randomRgba()})`;
        newBoxes.push(newDiv);

    })

        const divAllWidth=newBoxes.map(even => Number.parseInt(even.style.width)).filter((el,index,arr) => index === arr.length - 1);
        const divLastWidth=divAllWidth[0] + 10; // Для красоты добавил + 10px
        arrSizeBoxes.push(divLastWidth);

    boxesRef.append(...newBoxes);


}

function clearBoxes() {
    boxesRef.innerHTML='';
    inputRef.value='';
    arrSizeBoxes.splice(1, arrSizeBoxes.length - 1);
}
function randomRgba () {
    return  Math.floor(Math.random() * 256);
}
