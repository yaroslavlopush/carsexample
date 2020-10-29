const initState = {
    theme: 'default'
  }
  
  const Reducer = (state=initState,action) => {
    switch (action.type){
    
        case "CHANGE_THEME":
          return {
            ...state,
            theme: action.theme
          }
          
        // you can have as many case statements as you need
          
        default: 
          return state
      }
  }
  
  export default Reducer