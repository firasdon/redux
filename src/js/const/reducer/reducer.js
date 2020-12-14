import {ADD_Todo,TOGGLE_COMPLETE, EDIT_TASK, REMOUVE_TODO , } from '../constt'

const initState = {
    todos : [{text :'Learn react-redux' , isCompelete : false , id : 0 }],

} ; 
export default function (state=initState , action){
switch (action.type) {
    case ADD_Todo:
        return{...state , todos: [...state.todos , action.payload] }
    
    case REMOUVE_TODO :
        return {...state ,
             todos :
              state.todos.filter((todo) => todo.id !==action.payload)}  
        
    case TOGGLE_COMPLETE : 
    return {state ,
         todos :
          state.todo.map ((todo) => todo.id === action.payload ? {...todo , isCompelete : !todo.isCompelete} : todo ) } 
    
    case EDIT_TASK : 
    return {...state , todos : state.todos.map ((todo) => todo.id === action.payload.id ? action.payload : todo)}

    default :
     return state ;

}
}
