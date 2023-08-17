const addNumber = "ADDNUMBER";
const addOperator = "ADDOPERATOR";
const clear = "CLEAR";
const calculate = "CALCULATE";
const remove = "REMOVE";

export const actionTypes = {
    addNumber,
    addOperator,
    clear,
    calculate,
    remove
}

export function AddNumber (payload)  {
    return {
        type: addNumber,
        payload
    }
}
export function AddOperator(payload)  {
    return {
        type: addOperator,
        payload
    }
}
export function Clear(){
    return {
        type: clear
    }
}
export function Remove(){
    return {
        type: remove
    }
}
export function Calculate(){
    return {
        type: calculate
    }
}

