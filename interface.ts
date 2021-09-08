interface Todo{
    title   : string;
    detail  : string;
}

function myTodo(todo : Todo) : void{
    console.log(todo.title +':- ' +todo.detail);
}
let todo = {title:'Deepak', detail:' Complete the tasks.'};
myTodo(todo);

