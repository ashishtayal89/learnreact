import React from 'react';

const EmailForm = React.createClass({ 
    getInitialState() { 
         return { currentEmail: this.props.currentEmail }; 
    }, 
    setCurrentEmailState(se) { 
         this.setState({ currentEmail: se.target.value }); 
    }, 
    handleClick() {
         console.log(`Saving New Email value: ${this.state.currentEmail}`);
    }, 
    render() {
        console.log("render controlled component form");
        return ( 
            <div> 
                <input type="email" value={this.state.currentEmail} onChange={this.setCurrentEmailState} /> 
                <button onClick={this.handleClick}>Save</button> 
            </div> 
            ); 
        } 
    }
)

export default EmailForm