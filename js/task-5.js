const inputRef=document.querySelector('#name-input');
const spanRef=document.querySelector('#name-output');
inputRef.addEventListener('input',editText);

function editText(even) {
    spanRef.textContent=even.target.value;
    if (spanRef.textContent ==='') {
        spanRef.textContent = 'незнакомец'
    }

}