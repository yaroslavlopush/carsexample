import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import {useSelector, useDispatch} from 'react-redux';
import { changeBrandLabelAction, changeBrandValueAction } from '../actions/actions';


const CreateBrandSelect = () => {
  const [marks, setMarks] = useState([]);
  const choosedBrandLabel = useSelector(state => state.choosedBrandLabel);

  const dispatch = useDispatch()

  useEffect (() => {
    fetch(`http://api.auto.ria.com/categories/1/marks`)
      .then(response => response.json())
      .then((response) => setMarks(response));
  }, [])

  function changeMark (choosedBrandLabel, choosedBrandValue) {
    dispatch(changeBrandLabelAction(choosedBrandLabel))
    dispatch(changeBrandValueAction(choosedBrandValue));
  } 

  return (
    <Select
        value={{label : choosedBrandLabel}}
        onChange={(event) => changeMark(event.label, event.value)}
        options={marks.map((option) => {
         return {value: option.value, label: option.name}
        })}
    />
    )
  
}

export default CreateBrandSelect;