import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.js";
import FetchMediumPrice from "../../api/fetchMediumPrice.js";
import CreateBrandSelect from "../../api/createBrandSelect.js";
import CreateModelSelect from "../../api/createModelSelect.js";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      showMediumPrice: false,
      mediumPrice: {},
      choosedBrandLabel: "Please choose brand",
      choosedModelLabel: 'Please choose model',
      choosedBrandValue: '',
      choosedModelValue: '',
      models: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`http://api.auto.ria.com/average?marka_id=${this.state.choosedBrandValue}&model_id=${this.state.choosedModelValue}`)
      .then(response => response.json())
      .then(data => this.setState({ mediumPrice: data }, () => (this.setState({showMediumPrice: true})
    )))
  }

  handleBrandSelect(event) {
    this.setState({choosedBrandLabel: event.label})

    this.setState({ choosedBrandValue: event.value }, () =>
      fetch(`http://api.auto.ria.com/categories/1/marks/${this.state.choosedBrandValue}/models`)
      .then(response => response.json())
      .then(data => (
        this.setState({models: data})
      ))
    );
  }

  handleModelChange(event) {
    this.setState({ choosedModelLabel: event.label});
    this.setState({ choosedModelValue: event.value});
  }

  componentDidUpdate() {
    console.log('value ', this.state.choosedBrandValue);
    console.log('model', this.state.choosedModelValue);
  }

  render() {
    return (
      <div>
        <div className="mt-3" >
          <CreateBrandSelect
            choosedBrandLabel={this.state.choosedBrandLabel}
            handleBrandSelect={(event) => this.handleBrandSelect(event)}/>
        </div>
        <div className="mt-3" >
          <CreateModelSelect
            choosedModelLabel={this.state.choosedModelLabel}
            choosedBrandValue={this.state.choosedBrandValue}
            models={this.state.models} handleModelChange={(event) => this.handleModelChange(event)}/>
        </div>
        <button onClick={this.handleSubmit} className="form-control mt-3" type="submit">Submit</button>

        {this.state.showMediumPrice && (
          <div className="mt-3">
            <div>Medium price for {this.state.choosedBrandLabel} {this.state.choosedModelLabel}: </div>
            <div>Total Cars: {this.state.mediumPrice.total}</div>
            <div>Medium price: $ {(this.state.mediumPrice.arithmeticMean).toFixed(1)} USD</div>
          </div>
        )}
    </div>

    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
