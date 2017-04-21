import * as actionType from '../actions/actionTypes';


export const membersReducer =  (state = [], action) => {
  switch (action.type) {
    case actionType.CREATE_MEMBER_SUCCESS:
         return [
           ...state,
           Object.assign({},action.member)
         ];
    case actionType.FETCH_MEMBERS_SUCCESS:
          return action.members;
    case actionType.DELETE_MEMBER_SUCCESS:
        let filterMembers = state.filter((val)=>val._id != action.member.id);
        console.log('After Deleted: ',filterMembers);
        return filterMembers;
    default:
          return state;
  }
};