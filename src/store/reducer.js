import { actionTypes } from "./actions";
const initialState = {
    firstArg:'',
    operator: "",
    opFlag:false,
    secondArg:'',
    secondOpFlag:false,
    calculate:false,
    result:0

}
const {addNumber,addOperator,remove,calculate,clear} = actionTypes 

export default function reducer (state=initialState, action) {
    switch (action.type) {
        case addNumber:
            if (state.calculate){
                return{
                    ...initialState,firstArg:String(action.payload)
                }
            }
            // console.log("Reducer : Action Payload:",action.payload)
            if(state.secondOpFlag || state.opFlag){
                console.log("Reducer If : Action Payload:",action.payload)
                return{
                    ...state,secondArg:String(state.secondArg==0?"":state.secondArg)+String(action.payload), secondOpFlag:true , opFlag:false
                }
            }
            else{
                console.log("Reducer Else : Action Payload:",action.payload)
                return{
                    ...state,firstArg:String(state.firstArg==0?"":state.firstArg)+String(action.payload)
                }
            }
        case addOperator:
            if (state.calculate){
                return{
                    ...initialState,firstArg:state.result, opFlag:true , operator:action.payload
                }
            }
            else if (state.firstArg!=="") {
                console.log("Reducer : AddOperator Action Payload:",action.payload)
                return {
                    ...state,operator:action.payload, opFlag:true
                }
            }
            else {
                console.log("Reducer : AddOperator Action Payload Error:",action.payload)
                return {...state}
            }
            
        case clear:
            return {
                ...initialState
            }
        case calculate:
            return {
                ...state,calculate:true,result:eval(state.secondArg+state.operator+state.firstArg)
            }
        case remove:
            if (state.calculate) {
                return {
                    ...state,calculate:false, result:0, secondOpFlag:true,opFlag:false 
                }
            }
            else if(state.secondOpFlag){
                if(state.secondArg.length<=1){
                    return{
                        ...state,secondArg:"",opFlag:true , secondOpFlag:false
                    }
                }
                else{
                    return{
                        ...state,secondArg:String(state.secondArg).slice(0, -1)
                    }
                }
            }
            else if (state.opFlag){
                return{
                    ...state,operator:"" , opFlag:false , secondOpFlag:false
                }
            }
            else{
                if (state.firstArg.length <= 1) {
                        return{
                            ...state,firstArg:0
                    }
                }
                else{                    
                    return{
                        ...state,firstArg:state.firstArg.length === 1 ? 0: String(state.firstArg).slice(0, -1)
                    }
                }
            }
        default:
            return state
    }
}