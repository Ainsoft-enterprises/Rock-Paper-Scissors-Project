const todoList=[{name: 'make dinner',
dueDate: '2022-12-22'},
{name: 'wash dishes',
dueDate: '2022-12-22'}];

renderTodoList();

function renderTodoList(){
let todoListHTML='';

todoList.forEach((todoObject,index)=>{
  const { name, dueDate }=todoObject;
  const html=`

  <div>
  ${name}</div>
  <div> ${dueDate}</div>
  <button class="delete-todo-button js-delete-todo-button"
   >Delete</button>
  
  `;
  todoListHTML+=html;
});

console.log(todoListHTML);
document.querySelector('.js-todo-list').innerHTML=todoListHTML;

document.querySelectorAll('.js-delete-todo-button')
.forEach((deleteButton,index)=>{
  deleteButton.addEventListener('click', ()=>{
    todoList.splice(index, 1);
    renderTodoList();
  });
});
}

document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
  addToTodoList();
});

function addToTodoList(){
 const todoName = document.querySelector('.todo-input-name');
 const name= todoName.value;

 const dateInputElement= document.querySelector('.js-due-date-input');

 const dueDate= dateInputElement.value;
 todoList.push({
   name,
   dueDate
 });
 console.log(todoList);

 
 todoName.value='';
renderTodoList();


}

document.querySelector('.name-input').addEventListener('keydown', ()=>{
  handleKeyDown();
});

function handleKeyDown(){
  if(event.key==='Enter'){
 addToTodoList();
  }
}


//loop through the array
//create some HTML code for each todo
//put the HTML on webpage

