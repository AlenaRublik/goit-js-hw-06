const categoriesEl = document.querySelector('.item');
console.log(`Number of categories: ${categoriesEl.length}`);
categoriesEl.forEach((item) => {
    const category = item.firstElementChild;
    const elementCount = item.lastElementChild.child.length;
    console.log(`Category: ${category.textContent}`);
    console.log(`Elements: ${elementCount}`);
});

  
