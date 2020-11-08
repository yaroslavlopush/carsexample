import { CHANGE_THEME, CHANGE_BRAND_LABEL, CHANGE_BRAND_VALUE, CHANGE_MODEL_LABEL, CHANGE_MODEL_VALUE } from '../actions/actions';

const initState = {
  theme: 'default',
  choosedBrandLabel : 'Please choose brand',
  choosedBrandValue : 0,
  choosedModelLabel : 'Please choose model',
  choosedModelValue : 0
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
  
      case CHANGE_THEME:
        return {
          ...state,
          theme: action.payload
        };

      case CHANGE_BRAND_LABEL:
        return {
          ...state,
          ...action.payload,
      };

      case CHANGE_BRAND_VALUE:
        return {
          ...state,
          choosedBrandValue: action.choosedBrandValue
        };

      case CHANGE_MODEL_LABEL:
        return {
          ...state,
          choosedModelLabel: action.choosedModelLabel
        };

      case CHANGE_MODEL_VALUE:
        return {
          ...state,
          choosedModelValue: action.choosedModelValue
        };
        
      // you can have as many case statements as you need
        
      default: 
        return state;
    }
};

export default Reducer