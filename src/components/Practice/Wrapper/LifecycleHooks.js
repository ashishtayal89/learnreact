import React from 'react';
import TableData from '../Data/TableData';
import LifecycleHooksIndex from '../LifecycleHooks/Index';

class LifecycleHooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {/* <LifecycleHooksIndex.Table days={TableData.days}/> */}
                {/* <LifecycleHooksIndex.SetStateUnderstanding/> */}
                <LifecycleHooksIndex.Parent/>
            </div>
        );
    }
}

LifecycleHooks.propTypes = {};

export default LifecycleHooks;
