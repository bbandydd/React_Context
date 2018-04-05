import React, { Component, createContext } from 'react';

const myContext = createContext();

export default class Provider extends Component {
  constructor() {
    super();
    this.state = {
      countStore: {
        count: 1,
        increment: this.increment,
        decrement: this.decrement,
      }
    };
  }

  increment = () => {
    const { countStore } = this.state;

    this.setState({
      countStore: {
        ...countStore,
        count: countStore.count + 1
      }
    });
  }

  decrement = () => {
    const { countStore } = this.state;

    this.setState({
      countStore: {
        ...countStore,
        count: countStore.count - 1
      }
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
