import React from 'react';
import ComponentTypesIndex from '../ComponentTypes/Index';

class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};        
    }

    render() {
        var element = <ComponentTypesIndex.ClassComponent name={"ClassComponent"} ref={input => {console.log(input);}}/>;
        console.log(` Element : `);
        console.log(element);
        console.log(` Element Type :`);
        console.log(element.type);
        console.log(` Element Props:`);
        console.log(element.props);
        console.log(` Element Refs:`);
        console.log(element.ref);
        console.log(ComponentTypesIndex.ClassComponent === element.type);
        var input = <input type="text" name={"inputTag"} ref={(input) => console.log(input)}/>
        console.log("Input");
        console.log(input);
        // console.log(<input type="text" ref={input => this.inputText = input}></input>);
        
        // console.log(<ComponentTypesIndex.CreateClassComponent/>);
        // console.log(<ComponentTypesIndex.PureComponent/>);
        
        // console.log(ComponentTypesIndex.PureComponent);
        return (
            <div>
                {element}
                {input}
                {/* <ComponentTypesIndex.CreateClassComponent/> */}
                {/* <ComponentTypesIndex.PureComponent/> */}
            </div>
        );
    }
}

ComponentName.propTypes = {};

export default ComponentName;
