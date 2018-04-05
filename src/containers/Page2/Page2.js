import React, { Component, Fragment } from 'react';
import { Consumer } from 'store';

@Consumer()
export default class Page2 extends Component {
  render() {
    const { countStore, userStore } = this.props.context;

    return (
      <Fragment>
        <p>This is Page2</p>
        <p>Hello I`m {userStore.name}</p>
        <p>{countStore.count}</p>
      </Fragment>
    );
  }
}
