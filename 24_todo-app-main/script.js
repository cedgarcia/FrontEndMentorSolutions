// // Change Theme
document.querySelector('.changeTheme-btn').addEventListener('click', ()=> {
    document.body.classList.toggle('light-theme')
})



const list = document.getElementById("list");
const input = document.getElementById("input");



function addToDo(toDo){
    
   
    const item = `<li class="item">
            
                    <p class="text">${toDo}</p>
           
                  </li>
                `;
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item);
}

// add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        
        // if the input isn't empty
        if(toDo){
            addToDo(toDo);
            
           
        //     // add item to localstorage ( this code must be added where the LIST array is updated)
        //     localStorage.setItem("TODO", JSON.stringify(LIST));
            
        //     id++;
        }
        // input.value = "";
    }
});



























