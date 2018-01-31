import React from 'react';
import Column from './Column';
import deepEquals from 'deep-equal';

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateField = this.updateField.bind(this);
        this.color = "white";
    }
    updateField(value,column){        
        console.log(this.props);
        this.props.updateField(value,this.props.row,column);
    }
    componentWillMount(){
        console.log(`componentWillMount Row${this.props.row}`);
    }
    componentDidMount(){
        console.log(`componentDidMount Row${this.props.row}`);
        console.log(this.props);
    }
    componentWillReceiveProps(){
        console.log(`componentWillReceiveProps Row${this.props.row}`);
    }
    shouldComponentUpdate(newProps){     
        console.log(`shouldComponentUpdate Row${this.props.row}`);
        console.log(this.props);
        console.log(newProps);
        // if(!deepEquals(this.props,newProps)){
        //     this.color = "orange";
        //     return true;
        // }
        // else{
        //     return false;
        // } 
        return true;
    }
    componentWillUpdate(){
        console.log(`componentWillUpdate Row${this.props.row}`);
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate Row${this.props.row}`);
    }
    render() {
        console.log(`render Row${this.props.row}`);
        return (
            <tr>
            {Object.keys(this.props.day).map((key,i) => {
                return <Column key={i} 
                                value={this.props.day[key]} 
                                column={i}
                                updateField={this.updateField}/>
            })}
            </tr>
        );
    }
}

Row.propTypes = {};

export default Row;
