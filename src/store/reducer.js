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
            return {
                ...state
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
            return {
                ...state
            }
        default:
            return state
    }
}