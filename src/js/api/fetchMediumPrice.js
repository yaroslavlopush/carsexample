import React, { Component } from 'react';

class FetchMediumPrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  makeFetchForBrand () {
    fetch(`http://api.auto.ria.com/average?marka_id=${this.props.brand}&model_id=${this.props.model}&yers=2014&fuel_id=1&fuel_id=2`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  componentDidMount() {
    fetch(`http://api.auto.ria.com/average?marka_id=${this.props.brand}&model_id=${this.props.model}&yers=2014&fuel_id=1&fuel_id=2`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }



  render() {

    this.makeFetchForBrand();
    console.log('work from fetch');

    return (
      <div>
        <div>Medium price for BMW 2014 year: </div>
        <div>Total Cars: {this.state.data.total}</div>
        <div>Medium price: {this.state.data.arithmeticMean}</div>
      </div>
      )
  }
}

export default FetchMediumPrice;



