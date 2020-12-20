const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ingredientList = document.querySelector('#ingredients')
const greatList= ingredients.map(ingredient => {
    const list =document.createElement('li');
    list.textContent=ingredient;
    return list;
});
ingredientList.append(...greatList)