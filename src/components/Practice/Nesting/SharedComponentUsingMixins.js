import React from 'react';

const logClicksMixin = { 
    logClick() { 
        console.log(`Element ${this.props.id} clicked`); 
    }, 
}; 

const Link = React.createClass(
    { 
        mixins: [logClicksMixin], 
        handleClick(e) {
            this.logClick();
            e.preventDefault(); 
            console.log("Handling a link click..."); 
        }, 
        render() { 
            return ( <a href="#" onClick={this.handleClick}>Link</a> );
        } 
    }); 

const Button = React.createClass(
    { 
        mixins: [logClicksMixin], 
        handleClick(e) { 
            this.logClick(); 
            e.preventDefault(); 
            console.log("Handling a button click..."); 
        },
        render() {
            return ( <button onClick={this.handleClick}>Button</button> );
        }
    }
);

module.exports = {
    Link : Link,
    Button : Button
};
