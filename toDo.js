

function delToDo(a){

    del = document.querySelector("."+a)
    del.parentNode.id = a;
    motherLi = document.querySelector("#"+a)
    motherUl = motherLi.parentNode;
    motherUl.removeChild(motherLi)
  
}

function addToDo(){
   
    newText = document.querySelector(".toDoInput");
    if (newText.value == ''){
        alert('toDoList를 입력해주세요')

    } else {
        newList = document.createElement("li");
        newSpan = document.createElement("span");
        newSpan.className = 'toDoText'
        newList.appendChild(newSpan)
        newSpan.innerHTML = newText.value;
        
        delBtn = document.createElement("button");
        delBtn.innerHTML = 'X';
        delBtn.id = 'delBtn'
       
        delBtn.className = 'delBtn' +  document.querySelector("ul").childElementCount;
        console.log(delBtn.className)
        
        delBtn.setAttribute("onclick", "delToDo(this.className)")
        document.querySelector(".toDoInput").value = "";
        toDo = document.querySelector(".toDoList");
        toDo.appendChild(newList);
        newList.appendChild(delBtn);
        
    }      
}
