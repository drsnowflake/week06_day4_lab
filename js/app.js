document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit);

const deleteAllButton = document.createElement('button');
const body = document.querySelector('body')
body.appendChild(deleteAllButton)
deleteAllButton.textContent = 'Delete All'
deleteAllButton.addEventListener('click', deleteButtonPushed)

})

const deleteButtonPushed = function() {
  const readingList = document.querySelector('ul');
  readingList.innerHTML = '';
}

const handleFormSubmit = function(e){
  e.preventDefault();
  const list = document.querySelector('ul');
  const liList = document.createElement('li')
    liList.textContent = `Title: ${this.title.value},
    Author: ${this.author.value},
    Category: ${this.category.value}`;
  console.log(liList)
  list.appendChild(liList);
  e.target.reset();
}

