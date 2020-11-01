import React, { useState } from 'react';
import {useSelector, } from 'react-redux';

const getMediumPrice = () => {
  const [mediumPriceData, setMediumPriceData] = useState({});
  const state = useSelector(state => state);

  function requestMediumPrice () {
    fetch(`http://api.auto.ria.com/average?marka_id=${state.choosedBrandValue}&model_id=${state.choosedModelValue}`)
      .then(response => response.json())
      .then(data => setMediumPriceData(data))
  }

  return (
      <div>
        <button onClick={() => requestMediumPrice()} className="form-control mt-3" type="submit">Get Medium Price</button>

        {Object.keys(mediumPriceData).length !== 0 && (
          <div className="mt-3">
            <div>Medium price for {state.choosedBrandValue} {state.choosedModelValue}: </div>
            <div>Total Cars: {mediumPriceData.total}</div>
            <div>Medium price: $ {(mediumPriceData.arithmeticMean).toFixed(1)} USD</div>
          </div>
        )}
      </div>
    )
  
}

export default getMediumPrice;