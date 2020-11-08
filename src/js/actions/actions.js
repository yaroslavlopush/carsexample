export const CHANGE_THEME       = 'CHANGE_THEME';
export const CHANGE_BRAND_LABEL = 'CHANGE_MARK_LABEL';
export const CHANGE_BRAND_VALUE = 'CHANGE_MARK_VALUE';
export const CHANGE_MODEL_LABEL = 'CHANGE_MODEL_LABEL';
export const CHANGE_MODEL_VALUE = 'CHANGE_MODEL_VALUE';

export function changeThemeAction (theme) { 
  return {  
    type: CHANGE_THEME,
    payload: theme
  }
};

export function changeBrandLabelAction (obj) { 
  return {  
    type: CHANGE_BRAND_LABEL,
    payload: obj
  }
};

export function changeBrandValueAction (choosedBrandValue) { 
  return {  
    type: CHANGE_BRAND_VALUE,
    choosedBrandValue: choosedBrandValue
  }
};

export function changeModelLabelAction (choosedModelLabel) { 
  return {  
    type: CHANGE_MODEL_LABEL,
    choosedModelLabel: choosedModelLabel
  }
};

export function changeModelValueAction (choosedModelValue) { 
  return {  
    type: CHANGE_MODEL_VALUE,
    choosedModelValue: choosedModelValue
  }
};