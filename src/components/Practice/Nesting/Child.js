import React from 'react';
import SubChild from './SubChild';


class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
            <SubChild></SubChild>
            {this.props.children}
            </div>
        );
    }
}

Child.propTypes = {};

export default Child;
