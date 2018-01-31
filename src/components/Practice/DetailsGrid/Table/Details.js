import React from 'react';

class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {this.props.records.map((record,i) => {
                    return <Record key={record.id} data={record}/>
                })}                
            </div>
        );
    }
}

ComponentName.propTypes = {};

export default ComponentName;
