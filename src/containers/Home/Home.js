import React, { Component, Fragment } from 'react';
import { Consumer } from 'store';

@Consumer
export default class Main extends Component {
  render() {
    const { context } = this.props;

    return (
      <Fragment>
        <p>This is Home Page</p>
        <p>{context.count}</p>
        <button onClick={context.increment}>+++</button>
        <button onClick={context.decrement}>---</button>
      </Fragment>
    );
  }
}
