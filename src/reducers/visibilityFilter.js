const visitilityFilter = (state="SHOW_ALL", action) => {
  switch (action.type){
      case "SET_VISIBILITY_FILTER":
        return action.visitilityFilte
      default:
        return state
  }
}