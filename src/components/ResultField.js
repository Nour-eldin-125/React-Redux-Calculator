import React from "react";
import ReactDOM from "react-dom/client";
import { connect } from "react-redux";
import { Remove } from "../store/actions";



class ResultField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstArg:'',
            operator: "",
            opFalg:false,
            secondArg:'',
            secondOpFlap:false,
            calculate:false,
            result:0
        }
    }

    componentDidUpdate(prevProps) {
        let inp = document.getElementById("display");
        if(this.props.calculate)
            inp.value = this.props.result;
        else if (this.props.secondOpFlap)
            inp.value = this.props.secondArg;
        else if (this.props.opFalg)
            inp.value = this.props.operator;
        else
            inp.value = this.props.firstArg;
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
        secondOpFlap: state.secondOpFlap,
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