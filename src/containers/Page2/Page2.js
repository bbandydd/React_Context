import React, { Component, Fragment } from 'react';
import { Consumer } from 'store';

@Consumer
export default class Page2 extends Component {
  render() {
    const { context } = this.props;

    return (
      <Fragment>
        <p>This is Page2</p>
        <p>{context.count}</p>
        <button onClick={context.increment}>+++</button>
        <button onClick={context.decrement}>---</button>
      </Fragment>
    );
  }
}
