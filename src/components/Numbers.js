import React from "react";
import ReactDOM from "react-dom/client";
import { connect } from "react-redux";
import { AddNumber } from "../store/actions";


class Numbers extends React.Component {
    constructor(props) {
        super(props);
        console.log("Numbers",this.props.numbers)
    }
    add (number){
        console.log("Numbers Args:",this.props.firstArg, this.props.secondArg)
        this.props.secondOpFlap ? this.props.addNumber(this.props.secondArg? ('' + this.props.secondArg + number): number) :this.props.addNumber(this.props.firstArg?(''+this.props.firstArg + number): number) 
        
    }
    render() {
        return (
            <>
                {
                    this.props.numbers.map((num) => {
                        return <button onClick= {() => this.add(num)} key={num}>{num}</button>
                    })
                }
            </>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        firstArg:state.firstArg,
        secondArg:state.secondArg,
        secondOpFlap:state.secondOpFlap,

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addNumber: (payload) => dispatch(AddNumber(payload))
    }
}
    

export default connect (mapStateToProps, mapDispatchToProps)(Numbers);