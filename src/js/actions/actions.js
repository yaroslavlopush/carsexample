export const CHANGE_THEME      = 'CHANGE_THEME';
export const CHANGE_MARK_LABEL = 'CHANGE_MARK_LABEL';
export const CHANGE_MARK_VALUE = 'CHANGE_MARK_VALUE';

export function changeThemeAction (theme) { 
  return {  
    type: CHANGE_THEME,
    theme: theme
  }
}

export function changeMarkLabelAction (choosedBrandLabel) { 
  return {  
    type: CHANGE_MARK_LABEL,
    choosedBrandLabel: choosedBrandLabel
  }
}

export function changeMarkValueAction (choosedBrandValue) { 
  return {  
    type: CHANGE_MARK_VALUE,
    choosedBrandValue: choosedBrandValue
  }
}