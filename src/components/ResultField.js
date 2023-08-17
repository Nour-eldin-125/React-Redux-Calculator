import React from "react";
import { connect } from "react-redux";
import { Remove } from "../store/actions";


class ResultField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstArg:0,
            operator: "",
            opFlag:'',
            secondArg:0,
            secondOpFlag:'',
            calculate:'',
            result:''
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps != this.props) {
            let inp = document.getElementById("display");
            inp.value = ""
            console.log("Result Field : ",this.props)

            if(this.props.calculate){
                 inp.value = this.props.result
                }
            else if (this.props.secondOpFlag){
                inp.value = this.props.secondArg
            }
            else if (this.props.opFlag){
                console.log("Result Field : ",this.props)
                inp.value = this.props.operator
            }
            else{
                inp.value = this.props.firstArg
            }
        }
    }

    render() {
        return <input type="text" id="display" readonly = "true" onClick={() => this.props.remove()}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        firstArg: state.firstArg,
        operator: state.operator,
        secondArg: state.secondArg,
        opFlag: state.opFlag,
        secondOpFlag: state.secondOpFlag,
        calculate: state.calculate,
        result: state.result
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        remove: () => dispatch(Remove())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ResultField);