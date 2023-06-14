let input = prompt("What would you like to do?");
const todos = ["Umyt auto", "Ist do obchodu", "Nakrmit psa"];

while(input !== "quit" && input !== "q"){
    if(input === "list"){
        console.log("**********");
        for(let i = 0; i < todos.length; i++){
            console.log(`    ${i}: ${todos[i]}`);
        }
        console.log("**********");
    }
    else if(input === "new"){
        const newTodo = prompt("Add new Todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if(input === "delete"){
        const deleteTodo = parseInt(prompt("What index to delete?"));
        if(!Number.isNaN(deleteTodo)){
            console.log(`${todos[deleteTodo]} has been removed`);
            todos.splice(deleteTodo, 1);
        }
        else console.log("Unknown index");
    }

    input = prompt("What would you like to do?");
}

console.log("YOU QUIT THE APP.");