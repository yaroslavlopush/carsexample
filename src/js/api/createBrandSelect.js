import React, { Component } from 'react';
import Select from 'react-select';

class CreateBrandSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marks: [],
    };
  }

  componentDidMount() {
    fetch(`http://api.auto.ria.com/categories/1/marks`)
      .then(response => response.json())
      .then(marks => this.setState({ marks }));
  }

  render() {
    return (
      <Select
      value={{label : this.props.choosedBrandLabel}}
      onChange={this.props.handleBrandSelect}
      options={this.state.marks.map((option) => {
        return {value: option.value, label: option.name}
      })}
      />
      )
  }
}

export default CreateBrandSelect;