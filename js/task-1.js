const itemsRef= [...document.querySelectorAll('li.item')];
console.log(`В списке ${itemsRef.length} категории.`);

itemsRef.map(item => {
    const titleRef=item.querySelector('h2');
    const listRef=item.querySelectorAll('ul li')
    return {
        title:titleRef.textContent,
        list:listRef.length
    }
}).forEach(el => console.log('Категория:',el.title,'\nКоличество элементов:',el.list));