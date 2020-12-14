import {ADD_Todo,TOGGLE_COMPLETE, EDIT_TASK, REMOUVE_TODO , } from '../constt'

export const addTodo=(newTodo)=> ({
    type=ADD_Todo,
    payload=newTodo , 

})
export const remouveTodo =(id)=>({
    type=REMOUVE_TODO,
    payload= id ,
})

export const toggleComplete =(id) =>({
    type= TOGGLE_COMPLETE ,
    payload = id

})

export const editTask = (newTask)=>({
    type=EDIT_TASK , 
    payload=newTask
})