import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const CreateBrandSelect = () => {
  const [marks, setMarks] = useState([]);

  useEffect (() => {
    fetch(`http://api.auto.ria.com/categories/1/marks`)
      .then(response => response.json())
      .then((response) => setMarks(response));
  }, [])

  return (
    <Select
        value={{label : 'this.props.choosedBrandLabel'}}
        onChange={() => (console.log('wow'))}
        options={marks.map((option) => {
         return {value: option.value, label: option.name}
        })}
    />
    )
  
}

export default CreateBrandSelect;