import React from 'react';

class ClassComponent extends React.Component {
    componentDidMount(){
        
    }
    constructor(props) {
        super(props);
        this.state = {...props};
    }
    logName = function(){

    }
    render() {
        return (
            <div></div>
        );
    }
}


export default ClassComponent;
