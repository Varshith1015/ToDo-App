let todo=["todo1","todo2","todo3"];
let progress=["progress1","progress2","progress3"];;
let done=["done1","done2","done3"];

let todocol=document.getElementById("todo");
let progresscol=document.getElementById("progress");
let donecol=document.getElementById("done");

function renderTodo(){
    todocol.innerHTML="<h1>Todo</h1>";
    todo.forEach((item,index)=>{
        todocol.innerHTML+=`
        <div class="task todo" draggable="true">
            <p>${item}</p>
            <button onClick="moveToRight('todo', ${index})">&rarr;</button>
        </div>`
    })
}

function renderProgress(){
    progresscol.innerHTML="<h1>Progress</h1>";
    progress.forEach((item,index)=>{
        progresscol.innerHTML+=`
        <div class="task progress" draggable="true">
            <p>${item}</p>
            <button onClick="moveToLeft('progress', ${index})">&larr;</button>
            <button onClick="moveToRight('progress', ${index})">&rarr;</button>
        </div>`
    })
}

function renderDone(){
    donecol.innerHTML="<h1>Done</h1>";
    done.forEach((item,index)=>{
        donecol.innerHTML+=`
        <div class="task done" draggable="true">
            <p>${item}</p>
            <button onClick="moveToLeft('done', ${index})">&larr;</button>
        </div>`
    })
}

function moveToRight(colName,index){
    if(colName==="todo"){
        let itemTobepushed=todo[index];
        todo = todo.filter((item,i)=>i!==index);
        console.log("item removed from array",todo,itemTobepushed);
        renderTodo();
        progress.push(itemTobepushed);
        renderProgress();
    }

    else if(colName==="progress"){
        let itemTobepushed=progress[index];
        progress = progress.filter((item,i)=>i!==index);
        console.log("item removed from array",progress,itemTobepushed);
        renderProgress();
        done.push(itemTobepushed);
        renderDone();
    }
}

function moveToLeft(colName,index){
    if(colName==="progress"){
        let itemTobepushed=progress[index];
        progress = progress.filter((item,i)=>i!==index);
        console.log("item removed from array",progress,itemTobepushed);
        renderProgress();
        todo.push(itemTobepushed);
        renderTodo();
    }

    else if(colName==="done"){
        let itemTobepushed=done[index];
        done = done.filter((item,i)=>i!==index);
        console.log("item removed from array",done,itemTobepushed);
        renderDone();
        progress.push(itemTobepushed);
        renderProgress();
    }
}

renderTodo();
renderProgress();
renderDone();



