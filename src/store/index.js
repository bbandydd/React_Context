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
      },
      userStore: {
        name: 'Andy'
      },
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

export const Consumer = (...stores) => (ComposedComponent) => {
  class ConsumerComponent extends Component {
    render() {
      return (
        <myContext.Consumer>
          { (context) => {
            if (stores.length === 0) return <ComposedComponent context={context} />;

            const newContext = Object.keys(context).reduce((acc, key) => {
              if (stores.includes(key)) return {...acc, [key]: context[key]};
                return acc;
            }, {});

            return <ComposedComponent context={newContext} />;
           }
          }
        </myContext.Consumer>
      );
    }
  }
  return ConsumerComponent;
};
