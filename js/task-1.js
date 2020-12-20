const itemsRef= [...document.querySelectorAll('li.item')];
console.log(`В списке ${itemsRef.length} категории.`);

itemsRef.forEach(item => {
    const titleRef=item.querySelector('h2');
    const listRef=item.querySelectorAll('ul li')
    const title=titleRef.textContent;
    const list = listRef.length;
    // return {
    //     title:titleRef.textContent,
    //     list:listRef.length
    // }
    console.log('Категория:',title,'\nКоличество элементов:',list)
})
// .forEach(el => console.log('Категория:',el.title,'\nКоличество элементов:',el.list));