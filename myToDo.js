
function pressEnter(event){

    if (event.keyCode == 13){
        addToDo()
    }
    
}

function addToDo(){
    inputToDo = inputToDo = document.querySelector('.input_todo').value;
    
    if (inputToDo != ''){
        li = document.createElement('li');

        delBtn = document.createElement('button');
        delBtn.className = "delBtn";
        delBtn.innerHTML = 'X';
        toDoList = document.querySelector('.todo_list');
        toDoList.appendChild(li);
        count = toDoList.childElementCount;
        delBtn.setAttribute('onclick','delToDo(this.parentNode)');
        li.innerHTML = inputToDo;
        li.appendChild(delBtn);
        document.querySelector('.input_todo').value = '';

    }
}

function delToDo(li){
    document.querySelector('.todo_list').removeChild(li);
    /*
    delBtn = document.querySelector("."+delBtnClass);
    delBtn.parentNode.id = "delLi"
    delLi = document.querySelector('#delLi');
    delLi.parentNode.removeChild(delLi);
    */
}
