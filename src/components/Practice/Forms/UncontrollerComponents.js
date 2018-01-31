import React from 'react';

const EmailForm = React.createClass({ 
    handleClick() { 
        if (this.inputRef.checkValidity()) {
             console.log(`Email Ok. Saving Email as ${this.inputRef.value}`); 
            } 
        },
     render() { 
         console.log("render uncontroller component form");
         return ( 
         <div> 
             <input type="email" ref={(inputRef) => {
                        console.log(inputRef);
                        this.inputRef = inputRef
                    }
                }
                /> 
             <button onClick={this.handleClick}>Save</button>
         </div> 
         ); 
        } 
    }
)

export default EmailForm