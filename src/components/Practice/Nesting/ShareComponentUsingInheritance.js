import React from 'react';



class Loggable extends React.Component { 
    logClick() { 
        console.log(`Element ${this.props.id} clicked`);         
    } 
} 

class Link extends Loggable { 
    handleClick(e) { 
        this.logClick(); 
        e.preventDefault(); 
        console.log("Handling a link click..."); 
    } 
    render() {
         return ( <a href="#" onClick={this.handleClick.bind(this)}>Link</a> ); 
    } 
} 
    
class Button extends Loggable { 
    handleClick(e) { 
        this.logClick(); 
        e.preventDefault(); 
        console.log("Handling a button click..."); 
    } 
    render() { 
        return (             
            <button onClick={this.handleClick.bind(this)}>Button</button> 
        ); 
    } 
}

module.exports = {
    Link : Link,
    Button : Button
};