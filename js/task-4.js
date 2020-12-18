let counterValue =0;

const decBtnRef=document.querySelector("button[data-action='decrement']");
const incBtnRef=document.querySelector("button[data-action='increment']");
const counterRef=document.querySelector('#counter > span');


decBtnRef.addEventListener('click',decrement);
incBtnRef.addEventListener('click',increment);


function decrement() {
    counterValue-=1;
    counterRef.textContent=counterValue;

}

function increment() {
    counterValue+=1;
    counterRef.textContent=counterValue;

}