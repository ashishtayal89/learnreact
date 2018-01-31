import React from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"childOneCounter":1,"childTwoCounter":1,"parentCounter":1,"commonCounter":1};
        this.UpdateChildOneCounter = this.UpdateChildOneCounter.bind(this);
        this.UpdateChildTwoCounter = this.UpdateChildTwoCounter.bind(this);
        this.UpdateParentCounter = this.UpdateParentCounter.bind(this);
        this.class = "Parent";
    }

    UpdateChildOneCounter(){
        let counter = this.state.childOneCounter + 1;        
        this.setState(Object.assign({},this.state,{"childOneCounter":counter}));
    }

    UpdateChildTwoCounter(){
        let counter = this.state.childTwoCounter + 1;        
        this.setState(Object.assign({},this.state,{"childTwoCounter":counter}));
    }

    UpdateParentCounter(){
        let counter = this.state.parentCounter + 1;        
        this.setState(Object.assign({},this.state,{"parentCounter":counter}));
    }

    UpdateNoCouner(){
        
    }
    
    render() {
        return (
            <div>
                <h2>Parent Section</h2>
                <h4>Counter : {this.state.parentCounter}</h4>
                <input type="button" onClick={this.UpdateParentCounter} value="Parent Button"/>
                <ChildOne counter={this.state.childOneCounter} updateChildCounter={this.UpdateChildOneCounter}/>
                <ChildTwo counter={this.state.childTwoCounter} updateChildCounter={this.UpdateChildTwoCounter}/>
            </div>
        );
    }
    componentWillMount(){                
        console.log(`${this.class} componentWillMount`);
    }
    componentDidMount(){                
        console.log(`${this.class} componentDidMount`);
    }
    componentWillReceiveProps(newProps){                
        console.log(`${this.class} componentWillReceiveProps`);
    }
    shouldComponentUpdate(newProps,newState){                           
        console.log(`${this.class} shouldComponentUpdate`);     
        return true;   
    }
    componentWillUpdate(newProps,newState){        
        console.log(`${this.class} componentWillUpdate`);        
    }
    componentDidUpdate(prevProps, prevStates){        
        console.log(`${this.class} componentDidUpdate`);
    }
    componentWillUnmount(){
        console.log(`${this.class} componentWillUnmount`);
    }
}

export default Parent;
