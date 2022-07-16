import React from "react";

const TodosList = ({todos}) => {
    return <ul className="list-group">
        {todos.map((todo)=>
        <li>todo 1
            {todo.title}
            <input type='checkbox' checked={todo.completed}/>
        </li>)}
    </ul>;


};
 export default TodosList 