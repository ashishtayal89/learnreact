import React from 'react';

class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getField(record){
        
    }

    render() {
        return (
            <div>
                <input type="text" ref={(input) => {this.userInput = input}} checked={this.getValue()} onChange={this.updateField}></input>
            </div>
        );
    }
}

ComponentName.propTypes = {};

export default ComponentName;
