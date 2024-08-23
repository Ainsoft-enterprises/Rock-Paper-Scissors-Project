const todoList=[{name: 'make dinner',
dueDate: '2022-12-22'},
{name: 'wash dishes',
dueDate: '2022-12-22'}];

renderTodoList();
function renderTodoList(){
let todoListHTML='';
for(let i=0;i<todoList.length;i++)
{
  const todoObject=todoList[i];
  const { name, dueDate }=todoObject;
  const html=`

  <div>
  ${name}</div>
  <div> ${dueDate}</div>
  <button class="delete-todo-button"
   onclick="
  todoList.splice(${i}, 1);
  renderTodoList();
  ">Delete</button>
  
  `;
  todoListHTML+=html;
}
console.log(todoListHTML);
document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}

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
function handleKeyDown(){
  if(event.key==='Enter'){
 addToTodoList();
  }
}


//loop through the array
//create some HTML code for each todo
//put the HTML on webpage
