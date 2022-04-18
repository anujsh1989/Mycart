const initialState = false;

const openCloseDrawer = (state = initialState, action) =>{
switch(action.type){
    case "Open_Drawer" : return state = true;
    case "Close_Drawer" : return state = false;
    default :  return state;
}
}

export default openCloseDrawer;
