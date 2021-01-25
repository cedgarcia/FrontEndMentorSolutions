// // Change Theme
document.querySelector('.changeTheme-btn').addEventListener('click', ()=> {
    document.body.classList.toggle('light-theme')
})

const CHECK = 'circle-active'
const UNCHECK = 'circle'
const LINE_THROUGH = 'line-through'

const list = document.getElementById("list");
const input = document.getElementById("input");

let LIST = [], 
    id = 0;


function addToDo(toDo, id, done, trash){

    if(trash){return;}
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : ""; 
     const item = `<li class="item">
                    <div class="${DONE}" id="${id}">
                 
                    </div>
                    <p class="text ${LINE}">${toDo}</p>
                    <div class= "close" id="${id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                    </div>
           
                  </li>
                `;   
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;

        if(toDo){
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done:false,
                trash:false
            });
            id++
            localStorage.setItem("TODO", JSON.stringify(LIST));
        }
        input.value = "";
 
    }
});
// addToDo("ced",1, true, false)

function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;
}
const element = event.target; // return the clicked element inside listg
const elementJob = element.attributes.job.value; // complete or delete
// target the items created dynamically

list.addEventListener("click", function(event){

  
    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }
    
    // add item to localstorage ( this code must be added where the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});




















