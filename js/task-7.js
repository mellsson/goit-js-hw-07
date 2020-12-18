const inputRef = document.querySelector('#font-size-control') ;
const textRef=document.querySelector('#text');
inputRef.addEventListener('input',changeText);

function changeText() {

    textRef.style.fontSize=`${inputRef.value}px`;
}
