import React from 'react'
import { useDispatch } from 'react-redux'

const ChangeTheme = () => {
  const dispatch = useDispatch()
  
  function changeTheme (theme) {
    dispatch({ 
      type: 'CHANGE_THEME',
      theme: theme
    })
  } 
  
  return (
    <div>
        <button className="btn btn-dark mr-3 col-md-5" onClick={() => changeTheme('dark')}>Click to change theme to dark</button>
        <button className="btn btn-light col-md-5" onClick={() => changeTheme('default')}>Click to change theme to default</button>
    </div>
  )
}

export default ChangeTheme;