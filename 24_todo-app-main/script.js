// // Change Theme
document.querySelector('.changeTheme-btn').addEventListener('click', ()=> {
    document.body.classList.toggle('light-theme')
})



const list = document.getElementById("list");
const input = document.getElementById("input");

function addToDo(toDo){
     const item = `<li class="item">
                    <div class="circle"></div>
                    <p class="text">${toDo}</p>
                    <div class= "close">
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
            addToDo(toDo);
            
    
        }
 
    }
});



























