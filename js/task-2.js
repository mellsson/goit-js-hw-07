const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const addItems= (items,ref) => items.forEach(item => {
    const list =document.createElement('li');
    list.textContent=item;
    document.querySelector(ref).appendChild(list);

});

addItems(ingredients,'#ingredients');