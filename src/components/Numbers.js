import React from "react";

class Numbers extends React.Component {
    constructor(props) {
        super(props);
        console.log("Numbers",this.props.numbers)
    }
    render() {
        return (
            <>
                {
                    this.props.numbers.map((num) => {
                        return <button key={num}>{num}</button>
                    })
                }
            </>
        );
    }
}

export default Numbers;