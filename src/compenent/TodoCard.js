import React from 'react'
import { connect } from 'react-redux'
import { toggleComplete , remouveTodo , edittask} from '../js/const/action'


const TodoCard = ({todo , toggleComplete , remouveTodo}) => {
    return (
        <div className="todo-card" >
            <p>
                style={todo.isComplete ? {textDecoration:'line-throught'} : {} }
                {todo.text}</p>
            <div>
                <button onclick={() => toggleComplete (todo.id) }>{todo.isComplete ? "undo" : "complete"}</button>
                <button onclick={()=> remouveTodo(todo.id)}  >Delete</button>
                <button>Edit</button>
            </div>

            
        </div>
    )
}

export default  connect (null , {toggleComplete , remouveTodo , edittask})
 (TodoCard)
