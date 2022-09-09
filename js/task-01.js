'use strict';
const getElementItem = document.querySelectorAll('li.item');
console.log(`Number of categories: ${getElementItem.length}`);

getElementItem.forEach((item) => {
    const getElementTitle = item.querySelector('h2');
    const getElementLi = item.querySelectorAll('li');

    console.log(`Category: ${getElementTitle.textContent}`);
    console.log(`Elements: ${getElementLi.length}`);   
});