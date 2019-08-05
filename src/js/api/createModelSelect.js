import React, { Component } from 'react';
import Select from 'react-select';

class CreateModelSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      models: [],
    };
  }

  render() {
    return (
      <Select
        value={{label : this.props.choosedModelLabel}}
        onChange={this.props.handleModelChange}
        options={this.props.models.map((option) => {
          return {value: option.value, label: option.name}
        })}
      />
      )
  }
}

export default CreateModelSelect;
