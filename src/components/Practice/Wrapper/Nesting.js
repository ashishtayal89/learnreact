import NestingIndex from '../Nesting/Index';
import React from 'react';

class Nesting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <NestingIndex.Parent />  
                <NestingIndex.SharedComponentsUsingMixins.Button/>
                <NestingIndex.SharedComponentsUsingMixins.Link/>   
                <NestingIndex.SharedComponentsUsingInheritance.Button/>
                <NestingIndex.SharedComponentsUsingInheritance.Link/>           
            </div>
        );
    }
}

Nesting.propTypes = {};

export default Nesting;
