import React from 'react';
import FormIndex from '../Forms/Index';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <FormIndex.ControlledComponents/>
                <FormIndex.UncontrollerComponents/>
            </div>
        );
    }
}

export default Form;
