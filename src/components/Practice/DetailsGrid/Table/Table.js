import React from 'react';
import Row from './Row';
import deepEquals from 'deep-equal';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;
        this.updateField = this.updateField.bind(this);
        this.color = "red";
    }
    updateField(value,row,column){
        console.log(this.state);
        let tableData = Object.create(this.state.days);   
        console.log(tableData == this.state.days);         
        tableData[row][Object.keys(tableData[row])[column]] = value;
        console.log(tableData);
        this.setState({days:tableData});
        console.log(this.state);
    }
    componentWillMount(){
        console.log(`componentWillMount Table`);
    }
    componentDidMount(){
        console.log(`componentDidMount Table`);
    }
    componentWillReceiveProps(){
        console.log(`componentWillReceiveProps Table`);
    }
    shouldComponentUpdate(newProps,newState){
        console.log(`shouldComponentUpdate Table`);
        this.color = "white";
        return true;     
    }
    componentWillUpdate(){
        console.log(`componentWillUpdate Table`);
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate Table`);
    }
    getColor(){
        return this.color;
    }
    render() {
        console.log(`render Table`);
        console.log(React.createElement("img",{src:""},React.createElement("img",{src:"http:google.com"})));
        return (
            <table className={this.getColor()}>
            <thead>
                <tr>
                    <th>Resort</th>
                    <th>Date</th>
                    <th>Powder</th>
                    <th>Backcountry</th>
                </tr>
            </thead>
            <tbody>
                {this.state.days.map((day, i) =>
                    <Row key={i}
                        day={day}                         
                        row={i} 
                        updateField={this.updateField}/>	
                    )}
            </tbody>
    
            </table>
        );
    }
}

Table.propTypes = {};

export default Table;
