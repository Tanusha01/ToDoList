let style = document.createElement('style');
style.innerHTML = `
* {
    margin: 0;
    padding: 0;
  }
  #listUl {
    width: 400px;
    margin: 0 auto;
  }
  body {
    margin-top: 10px;
  }
  li {
    position: relative;
    background: rgb(167, 186, 237);
    height: 30px;
    list-style: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 22px;
  }
  li:hover {
    background-color: rgb(169, 169, 233);
  }
  .clickme {
    height: 32px;
    width: 40px;
    margin-left: 10px;
    margin-top: 10px;
    background-color: rgb(137, 137, 224);
    border: 1px solid #fff;
  }
  input {
    height: 30px;
    margin: 10px 0 10px 0;
    padding-left: 10px;
    background-color: rgb(194, 208, 247);
    border: 1px solid #fff;
    color:#ffff
  }
  li.checked {
    text-decoration: line-through;
  }

  li.checked::before {
    content: "";
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    top: 4px;
    left: 16px;
    transform: rotate(45deg);
    height: 15px;
    width: 7px;
  }
  header {
    background-color: rgb(130, 163, 194);
    width: 400px;
    margin: 0 auto;
  }
  .to_do {
    background-color: rgb(130, 163, 194);
    height: 35px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
  .done{
    text-decoration: line-through;
  }

  .wrapper{
    width: 300px;
    margin: 0 auto;
  }

  p{
    cursor: pointer;
  }
  .to-do-list-items{
    display: flex;
    flex-direction: column;

  }
  .checkbox{
    background: url(https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Checkmark-256.png);
    min-width: 16px;
    min-height: 16px;
    background-size: cover;
    margin-right: 12px;
  }
  .edit{
    background: none;
    border: none;
  }
  `;
  document.head.appendChild(style);

let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);


let headBlock = document.createElement("div");
headBlock.style.display = 'flex';
headBlock.style.flexDirection = 'column';
headBlock.style.alignItems = 'center';
wrapper.appendChild(headBlock);
headBlock.style.background = '#9d9ded8c';


let head = document.createElement("h1");
head.innerHTML = "To Do List";
head.style.textAlign = 'center';
headBlock.appendChild(head);
head.style.color = 'white';


let blockInput = document.createElement("div");
blockInput.style.display = 'flex';
blockInput.style.flexDirection = 'row';
blockInput.style.justifyContent = 'center';
wrapper.appendChild(blockInput);
blockInput.style.background = '#e9e9e994';


let input = document.createElement("input");
input.classList.add("input");
blockInput.appendChild(input);


let addButton = document.createElement("button");
addButton.classList.add("clickme");
addButton.innerHTML = "Add";
blockInput.appendChild(addButton);


let toDoListItems = document.createElement("div");
toDoListItems.classList.add("to-do-list-items");
toDoListItems.style.padding = '10px'
wrapper.appendChild(toDoListItems);
toDoListItems.style.background = 'rgba(157, 157, 237, 0.55)';
toDoListItems.style.color ='white';



addButton.addEventListener('click', function () {
  
  let toDoListItem = document.createElement("div");
  toDoListItem.style.display = 'flex';
  toDoListItem.style.flexDirection = 'row';
  toDoListItem.style.alignItems = 'center';
  toDoListItems.appendChild(toDoListItem);

  
  let toDoItem = document.createElement("div");
  toDoItem.style.display = 'flex';
  toDoItem.style.flexDirection = 'row';
  toDoItem.style.alignItems = 'center';
  toDoItem.style.justifyContent = 'space-between'
  toDoItem.style.width = '100%'
  toDoListItem.appendChild(toDoItem);
  

  let toDoList = document.createElement("p");
  toDoList.innerHTML = input.value;
  toDoItem.appendChild(toDoList);
  if(!input.value){
    alert('Введите что-то')
    return;
  }
  else{
    input.value = '';
  }
  let toDoListSpan = document.createElement("span");
  
  toDoList.addEventListener('click', function () {
    toDoList.classList.toggle("done");
    toDoListSpan.classList.toggle("checkbox");
    toDoListItem.insertBefore(toDoListSpan, toDoItem);
  });



  let todoEdit = document.createElement("button")
  let txt = document.createTextNode("\u270e");
  todoEdit.className = "edit";
  todoEdit.appendChild(txt);
  toDoItem.appendChild(todoEdit);

  todoEdit.addEventListener('click', function () {
    toDoList.innerHTML = prompt('Редактировать мой список');
  });


  clearButton.addEventListener('click', function () {
    toDoListItem.remove();
  });
  blockInput.appendChild(clearButton);

  });


  let clearButton = document.createElement("button");
  clearButton.classList.add("clickme");
  clearButton.innerHTML = "Clear";
  blockInput.appendChild(clearButton);
