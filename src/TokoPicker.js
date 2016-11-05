import React, { Component } from 'react';

import FilterInput from'./FilterInput';
import FilterResults from './FilterResults';
import { tokos } from './models';

export default class TokoPicker extends Component {
  constructor() {
    super();

    this.state = {
      tokos,
      keyword: ''
    }
  }

  /*** Methods ***/

  updateKeyword = (keyword) => {
    this.setState({
      keyword
    })
  }

  goToToko = (tokoId) => {
    console.log(`Going to ${tokoId}`);
    this.context.router.transitionTo(`/toko/${tokoId}`);
  }

  /*** Render ***/

  render() {
    return (
      <main>
        <FilterInput
          keyword={this.state.keyword}
          action={this.updateKeyword}
          />
        <FilterResults
          keyword={this.state.keyword}
          items={this.state.tokos}
          titleField="name"
          descriptionField="area"
          imageField="image"
          action={this.goToToko}
          />
      </main>
    );
  }
}

TokoPicker.contextTypes = {
  router: React.PropTypes.object
}
