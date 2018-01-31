import React from 'react';

class NumList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div></div>
        );
    }
}

NumList.propTypes = { 
    x: React.PropTypes.number && React.PropTypes.isRequired,
    tweetText: (props, propName) => { 
        if (props[propName] && props[propName].length > 10) { 
            return new Error('Too long'); 
        } 
    }
};

export default NumList;

//  JavaScript primitive validators:
// o React.PropTypes.array
// o React.PropTypes.bool
// o React.PropTypes.number
// o React.PropTypes.object
// o React.PropTypes.string
//  React.PropTypes.node: Anything that can be rendered.
//  React.PropTypes.element: A React element.
//  React.PropTypes.instanceOf(SomeClass): This uses the instanceof operator.
//  React.PropTypes.oneOf(['Approved', 'Rejected']): For ENUMs.
//  React.PropTypes.oneOfType([..., ...]): Either this or that.
//  React.PropTypes.arrayOf(React.PropTypes.number): An array of a certain type.
//  React.PropTypes.objectOf(React.PropTypes.number): An object with property values of a certain type.
//  React.PropTypes.func: A function reference.

// With React.createClass syntax: 
//let NumbersList = React.createClass({ propTypes: { x: React.PropTypes.number }, }); 

// With PureComponents/DumpComponents
// const AlertBox = props => 
// ( <div className="alert alert-danger"> {props.message} </div> ); 
// AlertBox.defaultProps = { message: "Something went wrong" };

//The syntax to use defaultProps with 
//React.Component is similar to propTypes. 
//For React.createClass, we use the method getDefaultProps instead:
//const AlertBox = React.createClass(
//    { getDefaultProps() { 
//    return { message: "Something went wrong" }; } }
//);