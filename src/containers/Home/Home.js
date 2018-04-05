import React, { Component, Fragment } from 'react';
import { Consumer } from 'store';

@Consumer
export default class Main extends Component {
  render() {
    const { countStore } = this.props.context;

    return (
      <Fragment>
        <p>This is Home Page</p>
        <p>{countStore.count}</p>
        <button onClick={countStore.increment}>+++</button>
        <button onClick={countStore.decrement}>---</button>
      </Fragment>
    );
  }
}
