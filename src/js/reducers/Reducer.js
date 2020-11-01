import { CHANGE_THEME, CHANGE_MARK_LABEL, CHANGE_MARK_VALUE } from '../actions/actions';

const initState = {
  theme: 'default',
  choosedBrandLabel : 'Please choose brand',
  choosedBrandValue : 0
}

const Reducer = (state = initState, action) => {
  switch (action.type) {
  
      case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      }

      case CHANGE_MARK_LABEL:
      return {
        ...state,
        choosedBrandLabel: action.choosedBrandLabel
      }

      case CHANGE_MARK_VALUE:
      return {
        ...state,
        choosedBrandValue: action.choosedBrandValue
      }
        
      // you can have as many case statements as you need
        
      default: 
        return state
    }
}

export default Reducer