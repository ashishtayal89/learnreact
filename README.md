# LEARN REACT
This is a step by step guide to get started with react.

## Introduction


## Basics

### JSX

### Rendering Element

### Compoments and Props

### State and Lifestyle

### Handling Events

### Listing and Keys

### Lifting State Up

### Composition and Inheritance



## Intermediate

### Accessibility

### Typechecking with proptypes

### Uncontrolled Components

### Web Components

### React without ES6

### React without JSX

### Thinking in React

### Code splitting

### Static type checking

### Forms

### HOC

### Refs and DOM

### Forwarding Refs

### Fragments

### Pure Components

### Reconciliation


## Advanced

### Portals

### Strict Mode

### Error Boundaries

### Optimizing performance

### Render props

### Code splitting

### Context

Data is passed in react top down. Sometimes we need to pass data to multiple components and want to skip the passing it down the chin.
We use **Context** api for this purpose.

### JXS in depth

### Integrating with other libraries

### Hooks


## React 16.x what new?

9. Component Lifecycle
Since React prioritizes the rendering, you are no longer guaranteed componentWillUpdate and shouldComponentUpdate of different components will fire in a predictable order. The React team is working to provide an upgrade path for apps that would break from this behavior.

**React 16.0 and 16.2**
1. Fragments
2. Portals --> 
    ```javascript
    return (
      ReactDOM.createPortal(
        <h1>Hello from inside the portal!</h1>,
        document.getElementById('my-portal')
      )
    );
    ```
3. Error Handling --> ComponentDidCatch(error, info)
4. Return null from setState to prevent re-render
    ```javascript
    getCourse = course => {
      const newTitle = course.title;
      this.setState(state => {
        if (state.title === newTitle) {
          return null;
        } else {
          return { title: newTitle };
        }
      });
    };
    ```
5. Support for custom dom attributes :  
Even though all attributes get rendered to the DOM, you should still use the canonical React naming for known attributes. For example, if you provide class and tabindex to a DOM component, React will warn you about using tabIndex and className instead.

6. Reduced Size  :  
    Despite all these additions, React 16 is actually smaller compared to 15.6.1!  
    1. react is 5.3 kb (2.2 kb gzipped), down from 20.7 kb (6.9 kb gzipped).
    2. react-dom is 103.7 kb (32.6 kb gzipped), down from 141 kb (42.9 kb gzipped).
    3. react + react-dom is 109 kb (34.8 kb gzipped), down from 161.7 kb (49.8 kb gzipped).  

7. Improved Server side rendering  :  ReactDOM.render()  to ReactDOM.hydrate()

**React 16.3.0**

1. Context API
2. React.createRef()
    ```javascript
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);

        this.inputRef = React.createRef();
      }

      render() {
        return <input type="text" ref={this.inputRef} />;
      }

      componentDidMount() {
        this.inputRef.current.focus();
      }
    }
    ```
3. React.forwardRef()
    ```javascript
    const FancyButton = React.forwardRef((props, ref) => (
      <button ref={ref} className="FancyButton">
        {props.children}
      </button>
    ));

    // You can now get a ref directly to the DOM button:
    const ref = React.createRef();
    <FancyButton ref={ref}>Click me!</FancyButton>;
    ```
4. Unsafe lifecycle methods :  
    16.3: Introduce aliases for the unsafe lifecycles, UNSAFE_componentWillMount, UNSAFE_componentWillReceiveProps, and UNSAFE_componentWillUpdate. (Both the old lifecycle names and the new aliases will work in this release.)  
    A future 16.x release: Enable deprecation warning for componentWillMount, componentWillReceiveProps, and componentWillUpdate. (Both the old lifecycle names and the new aliases will work in this release, but the old names will log a DEV-mode warning.)  
    17.0: Remove componentWillMount, componentWillReceiveProps, and componentWillUpdate . (Only the new “UNSAFE_” lifecycle names will work from this point forward.)

5. Add lifecycle events  :
    - getDerivedStateFromProps is being added as a safer alternative to the legacy componentWillReceiveProps. (Note that in most cases you don’t need either of them.)
    - getSnapshotBeforeUpdate is being added to support safely reading properties from e.g. the DOM before updates are made.

Reasons for deprecation :  
- Misuse of the lifecycle events to prevent render.
- Not in sync with the upcoming async rendering(Suspense API). 

**React 16.4.0**

1. Pointer Events
2. getDerivedStateFromProps bug fix

**React 16.6.0**

1. React.memo
2. React.lazy
    ```javascript
    import React, {lazy, Suspense} from 'react';
    const OtherComponent = lazy(() => import('./OtherComponent'));

    function MyComponent() {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      );
    }
    ```
3. static contextType
4. statci getDerivedStateFromError

**React 16.8**

1. Hooks
