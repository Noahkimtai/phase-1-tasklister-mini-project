document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // select the form // and add an event listener 
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    //call a function that will create elements of the added item
    taskBuilder(e.target.children[1].value)// This picks the value entered into the input field
    // erase the value that has been added to the to do list
    form.reset()

  })
  function taskBuilder(task){
    // create a list item that will go into the ul element
    let li = document.createElement('li')
    // create another button for deleting list it
    let btn = document.createElement('button')
    btn.textContent='x' // add the x symbol to the button
    // add an event listener to the button so that li item is deleted
    console.log(btn)
    btn.addEventListener('click',handleDelete)
    // append the button to the li item
    li.appendChild(btn)
    // buttons are not valid children of ul maybe change the html to use a table instead of a ul
    li.textContent= `${task} ` // takes the input value that was passed to this function
    console.log(li)
    document.querySelector('ul').appendChild(li)
  }

  // handle delete will remove the parent node (form)
  function handleDelete(e){
    e.target.parentNode.remove()
  }

});