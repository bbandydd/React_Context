import React, { Component, createContext } from 'react';

const myContext = createContext();

export default class Provider extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      increment: this.increment,
      decrement: this.decrement,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <myContext.Provider value={this.state}>
        {this.props.children}
      </myContext.Provider>
    );
  }
}

export const Consumer = (ComposedComponent) => {
  class ConsumerComponent extends Component {
    render() {
      return (
        <myContext.Consumer>
          { context => <ComposedComponent context={context} /> }
        </myContext.Consumer>
      );
    }
  }
  return ConsumerComponent;
};
