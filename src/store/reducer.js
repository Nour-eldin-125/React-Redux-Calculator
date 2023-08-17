import { actionTypes } from "./actions";
const initialState = {
    firstArg:"",
    operator: "",
    opFalg:false,
    secondArg:'',
    secondOpFlap:false,
    calculate:false,
    result:0

}
const {addNumber,addOperator,remove,calculate,clear} = actionTypes 

export default function reducer (state=initialState, action) {
    switch (action.type) {
        case addNumber:
            console.log("Reducer : Action Payload:",action.payload)
            if(state.secondOpFlap){
                console.log("Reducer If : Action Payload:",action.payload)
                return{
                    ...state,secondArg:action.payload
                }
            }
            else{
                console.log("Reducer Else : Action Payload:",action.payload)
                return{
                    ...state,firstArg:action.payload
                }
            }
        case addOperator:
            return {
                ...state,operator : action.payload
            }
        case clear:
            return {
                ...state
            }
        case calculate:
            return {
                ...state
                
            }
        case remove:
            if(state.secondOpFlap){
                return{
                    ...state,secondArg:state.secondArg.slice(0, -1)
                }
            }
            else if (state.opFalg){
                return{
                    ...state,operator:"" , opFalg:false
                }
            }
            else{
                return{
                    ...state,firstArg:state.firstArg.slice(0, -1)
                }
            }
        default:
            return state
    }
}