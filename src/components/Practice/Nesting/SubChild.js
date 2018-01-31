import React from 'react';

class SubChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (            
            <div>Subchild</div>
        );
    }
}

SubChild.propTypes = {};

export default SubChild;
