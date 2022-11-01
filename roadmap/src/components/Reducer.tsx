import {useReducer} from "react";
import {Todo} from "../model";

type Actions =
    | {type:'add'; payload: string }
    | {type:'remove'; payload: number }
    | {type:'done'; payload:number }



// const TodoReducer = (state:Todo[], action: Actions) => {
//     switch (action.type){
//         case "add":
//             return [
//                 ...state,
//                 {is: Date.now(), todo: action.payload, isDone: false}
//             ]
//         case "remove":
//             return state.filter((todo) => todo.id !== action.payload)
//         case "done":
//             return state.map((todo) =>
//             todo.idi !== action.payload ? { ...todo, isDone: !todo.isDone: true})
//     }
//
// }
//
// const Reducer = () => {
//     const [state, dispatch] = useReducer(TodoReducer, [])
//
//     return (
//         <div>
//
//         </div>
//     )
// }