import React from "react";

class Operators extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operator: "",
            classname:''
        }
    }
    
    componentDidMount() {
        this.setState({
            operator: this.props.operator.op,
            classname:this.props.operator.classname
        })
    }
    componentDidUpdate(prevProps) {

        if (prevProps.operator !== this.props.operator) {
            this.setState({
                operator: this.props.operator.op,
                classname:this.props.operator.classname
            })
        }
    }

    render() {
        return (
            <>
                <button className={this.state.classname}
                    key={this.state.operator}>
                        {this.state.operator}
                </button>  
            </>
        );
        
    }
}

export default Operators;