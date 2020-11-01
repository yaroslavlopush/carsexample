import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const ShowAppTheme = () => {
  const appTheme = useSelector(state => state.theme);
  const choosedBrandLabel = useSelector(state => state.choosedBrandLabel);
  const choosedBrandValue = useSelector(state => state.choosedBrandValue);
  return (
    <div>
      <p>{appTheme}</p>
      <p>Label: {choosedBrandLabel}</p>
      <p>value: {choosedBrandValue}</p>
    </div>
  )
}

export default ShowAppTheme;