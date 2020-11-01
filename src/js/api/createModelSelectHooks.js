import React from 'react';
import Select from 'react-select';
import { useSelector } from 'react-redux';


const CreateBrandSelect = () => {
    const choosedBrandValue = useSelector(state => state.choosedBrandValue);

    console.log(choosedBrandValue);

    return (
        <Select
            value={{label : 'this.props.choosedModelLabel'}}
            onChange={console.log('work')}
            // options={this.props.models.map((option) => {
            //     return {value: option.value, label: option.name}
            // })}
        />
    )
}

export default CreateBrandSelect;
