import React, { Component, Fragment } from 'react';
import { Consumer } from 'store';

@Consumer
export default class Page2 extends Component {
  render() {
    const { countStore } = this.props.context;

    return (
      <Fragment>
        <p>This is Page2</p>
        <p>{countStore.count}</p>
        <button onClick={countStore.increment}>+++</button>
        <button onClick={countStore.decrement}>---</button>
      </Fragment>
    );
  }
}
