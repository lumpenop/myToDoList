function addToDo(){
    todo = document.querySelector('.input_todo').value;
    if (todo != ''){

        li = document.createElement('li');
        li.innerHTML = todo;
        
        delBtn = document.createElement('button');
        delBtn.innerHTML = 'X';
        delBtn.setAttribute("onclick","delToDo(this);")
        
        li.appendChild(delBtn);
        toDoList = document.querySelector('.todo_list');
        toDoList.appendChild(li);
        document.querySelector('.input_todo').value = '';

    }
}

function delToDo(delBtn){
    delBtn.parentNode.parentNode.removeChild(delBtn.parentNode);
}

function pressKey(event){
    if(event.keyCode ==13){
        addToDo();
    }
}