import React from "react";

class ResultField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <input type="text" id="display" readonly = "true" />;
    }
}

export default ResultField;