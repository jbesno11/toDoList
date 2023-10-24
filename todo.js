let input = document.querySelector("#toDoInput");
let buttn = document.querySelector("#addButton");
let list = document.querySelector("#outPutList");


addButton.addEventListener("click", function(){
        
        let toDoText = input.value;


        let newTodo = document.createElement("li");
        newTodo.innerText = toDoText;

            newTodo.addEventListener("click", function(){
                
                newTodo.style.textDecorationLine = "line-through";
                //i tried to do it the way you did it in class
                //this was the only way i could get it to work


                setTimeout(() => {
                    newTodo.remove()

                }, 1000)                
            })

            list.appendChild(newTodo);

            input.value =""

    })