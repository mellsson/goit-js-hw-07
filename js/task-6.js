const inputRef =document.querySelector('#validation-input');
inputRef.addEventListener('blur',validInput);

function validInput() {
    const inputValid=(Number(inputRef.getAttribute('data-length')) === inputRef.value.length);

    inputRef.classList.add(inputValid ?'valid':'invalid');
    inputRef.classList.remove(inputValid ? 'invalid':'valid');

    //     if (Number(inputRef.getAttribute('data-length')) === inputRef.value.length) {
    // inputRef.classList.add('valid');
    // inputRef.classList.remove('invalid');
    // } else {
    // inputRef.classList.add('invalid');
    // inputRef.classList.remove('valid');
    // }

}
