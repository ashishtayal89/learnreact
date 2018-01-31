import React from 'react';
import ValidationAndDefaultIndex from '../ValidationAndDefault/Index';

class ValidationAndDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ValidationAndDefaultIndex.NumList x="2" tweetText="This is my tweet"/>
            </div>
        );
    }
}

ValidationAndDefault.propTypes = {};

export default ValidationAndDefault;
