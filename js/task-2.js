const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

ingredients.forEach(ingredient => {
    const list =document.createElement('li');
    list.textContent=ingredient;
    document.querySelector('#ingredients').appendChild(list);

});
