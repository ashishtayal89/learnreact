import React from 'react';

class ChildOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter:props.counter};
        this.class = "ChildOne";
        this.updateCounter = this.updateCounter.bind(this);
    }

    updateCounter(){
        let counter = this.state.counter+1;
        this.setState(Object.assign({},this.state,{"counter":counter}));
    }

    render() {
        return (
            <div>
                <h2>ChildOne Section</h2>     
                <h4>Counter : {this.state.counter}</h4>           
                <input type="button" onClick={this.props.updateChildCounter} value="Update ChildOne using Parent"/>
                <input type="button" onClick={this.updateCounter} value="Update ChildOne using ChildOne"/>
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
        this.setState(Object.assign({},this.state,{"counter":newProps.counter}));
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

export default ChildOne;
