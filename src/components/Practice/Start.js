import React from 'react';
import Nesting from './Wrapper/Nesting.js';
import ValidationAndDefault from './Wrapper/ValidationAndDefault';
import LifecycleHooks from './Wrapper/LifecycleHooks';
import Form from './Wrapper/Form';
import ComponentTypes from './Wrapper/ComponentTypes';
import DetailsGrid from './DetailsGrid/DetailGrid'

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {/* <Nesting/> */}
                {/* <ValidationAndDefault/> */}
                {<LifecycleHooks/>}
                {/* <Form/> */}
                {/* {<ComponentTypes/>} */}
                {/* <DetailsGrid/> */}
            </div>
        );
    }
}

Start.propTypes = {};

export default Start;
