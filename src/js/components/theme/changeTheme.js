import React from 'react';
import { useDispatch } from 'react-redux';
import { changeThemeAction } from '../../actions/actions';
import '../../../scss/app.scss';
import {setTextColor, setBackgroundColor} from './colorsChanging';

const ChangeTheme = () => {
  const dispatch = useDispatch();

  function changeTheme (theme) {
    dispatch(changeThemeAction(theme))
    if (theme === 'dark') {
      setTextColor('white');
      setBackgroundColor('black');
    } else {
      setTextColor('black');
      setBackgroundColor('white');
    }
  } 
  
  return (
    <div className="theme">
        <button className="btn btn-dark mr-3 col-md-5" onClick={() => changeTheme('dark')}>Click to change theme to dark</button>
        <button className="btn btn-light col-md-5" onClick={() => changeTheme('default')}>Click to change theme to default</button>
    </div>
  )
}

export default ChangeTheme;