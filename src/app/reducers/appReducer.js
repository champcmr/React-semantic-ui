export const appReducer =  (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_MENU':
         return {
           ...state,
           ...{activeItem:action.activeMenu}
         };
    default:
          return state;
  }
};