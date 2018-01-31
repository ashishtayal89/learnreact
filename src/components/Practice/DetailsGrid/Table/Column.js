import React from 'react';
import deepEquals from 'deep-equal';

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateField = this.updateField.bind(this);
        this.color = "green";
    }
    componentWillMount(){
        console.log(`componentWillMount Column${this.props.column}`);
    }
    componentDidMount(){
        console.log(`componentDidMount Column${this.props.column}`);
    }
    componentWillReceiveProps(){
        console.log(`componentWillReceiveProps Column${this.props.column}`);
    }
    shouldComponentUpdate(newProps){           
        console.log(`shouldComponentUpdate Column${this.props.column}`);
        console.log(this.props);
        console.log(newProps);
        if(this.props.value != newProps.value){
            this.color = "yellow";
            return true;
        }
        else 
            return false;
    }
    componentWillUpdate(){
        console.log(`componentWillUpdate Column${this.props.column}`);
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate Column${this.props.column}`);
    }
    getColour(){
        return this.color;
    }
    getInputField(){
        return typeof this.props.value == "boolean" ? 
            <input className={this.getColour()} type="radio" ref={(input) => {this.userInput = input}} checked={this.getValue()} onChange={this.updateField}></input>                 
            : 
            <input className={this.getColour()} type="text" ref={(input) => {this.userInput = input}} value={this.getValue()} onChange={this.updateField}></input>                 
            ;
    }
    getValue(){
        let value = typeof this.props.value == "object" ? this.props.value.toString() : this.props.value;
        return value;
    }
    updateField(){
        let userInput = "";
        switch(this.userInput.type){
            case "radio" : userInput = this.userInput.checked;
                            break;
            default      : userInput = this.userInput.value;
                            break;        
        }
        console.log(this.props);
        this.props.updateField(userInput,this.props.column);        
    }
    render() {        
        console.log(`render Column${this.props.column}`);
        return (
            <td className={this.getColour()}>
                {this.getInputField()}
            </td> 
        );
    }
}

Column.propTypes = {};

export default Column;
