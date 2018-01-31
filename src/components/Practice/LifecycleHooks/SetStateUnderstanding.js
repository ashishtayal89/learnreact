import React from 'react';

class SetStateUnderstanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hook:"constructor"};
        console.log(`0. ${this.state.hook}`);
    }
    componentWillMount(){        
        this.setState({hook:"componentWillMount"});
        console.log(`1. ${this.state.hook}`);
    }
    componentDidMount(){        
        this.setState({hook:"componentDidMount"});
        console.log(`2. ${this.state.hook}`);
    }
    componentWillReceiveProps(newProps){        
        this.setState({hook:"componentWillReceiveProps"});
        console.log(`3. ${this.state.hook}`);
    }
    shouldComponentUpdate(newProps,newState){                           
        this.setState({hook:"shouldComponentUpdate"});
        console.log(`4. ${this.state.hook}`);
        return true;
    }
    componentWillUpdate(){        
        this.setState({hook:"componentWillUpdate"});
        console.log(`5. ${this.state.hook}`);        
    }
    componentDidUpdate(prevProps, prevStates){        
        this.setState({hook:"componentDidUpdate"});
        console.log(`6. ${this.state.hook}`);
    }
    setHook(){
        this.setState({hook:"setHook"});
        console.log(`7. ${this.state.hook}`);
    }
    render() {
        console.log(`8. ${this.state.hook}`);
        return (            
            <input type="text" onChange={this.setHook.bind(this)} value={this.state.hook}></input>
        );
    }
    componentWillUnmount(){
        this.setState({hook:"componentWillUnmount"});
    }
}

SetStateUnderstanding.propTypes = {};

export default SetStateUnderstanding;
