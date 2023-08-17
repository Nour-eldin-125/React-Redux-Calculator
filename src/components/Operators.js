import React from "react";
import { connect } from "react-redux";
import { Calculate, AddOperator, Clear, Remove } from "../store/actions";

class Operators extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operator: "",
            classname:''
        }
    }


    addOp(op) {
        if(op == "="){
            this.props.calculate()
        }
        else if (op == "C") {
            this.props.clear()
        }
        else {
            this.props.addOperator(op)
        }
    }

    componentDidMount() {
        this.setState({
            operator: this.props.oper.op,
            classname:this.props.oper.classname
        })
    }
    componentDidUpdate(prevProps) {

        if (prevProps.operator !== this.props.operator) {
            this.setState({
                operator: this.props.oper.op,
                classname:this.props.oper.classname
            })
        }
    }
    
    render() {
        console.log(this.props)
        return (
            <>
                <button className={this.state.classname}
                    onClick={()=>this.addOp(this.state.operator)}
                    key={this.state.operator}>
                        {this.state.operator}
                </button>  
            </>
        );
        
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
        addOperator: (payload) => dispatch(AddOperator(payload)),
        calculate: () => dispatch(Calculate()),
        clear: () => dispatch(Clear()),
        remove: () => dispatch(Remove())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Operators);