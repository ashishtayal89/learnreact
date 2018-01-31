import React from 'react';
import Child from './Child';
import SubChild from './SubChild';


class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Child>
                <SubChild></SubChild>
                <SubChild></SubChild>
            </Child>
        );
    }
}

Parent.propTypes = {};

export default Parent;
