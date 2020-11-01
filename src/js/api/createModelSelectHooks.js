import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import {useSelector, useDispatch} from 'react-redux';
import { changeModelLabelAction, changeModelValueAction } from '../actions/actions';

const CreateBrandSelect = () => {
    const [models, setModels] = useState([]);
    const state = useSelector(state => state);

    const dispatch = useDispatch()

    useEffect (() => {
        if (state.choosedBrandValue !== 0) {
            fetch(`http://api.auto.ria.com/categories/1/marks/${state.choosedBrandValue}/models`)
                .then(response => response.json())
                .then((response) => setModels(response));
        }
    }, [state.choosedBrandValue])

    function changeModel (choosedModelLabel, choosedModelValue) {
        dispatch(changeModelLabelAction(choosedModelLabel))
        dispatch(changeModelValueAction(choosedModelValue));
    } 

    return (
        <div>
            <Select
                value={{label : state.choosedModelLabel}}
                onChange={(event) => changeModel(event.label, event.value)}
                options={models.map((option) => {
                    return {value: option.value, label: option.name}
                })}
            />
        </div>
    )
}

export default CreateBrandSelect;
