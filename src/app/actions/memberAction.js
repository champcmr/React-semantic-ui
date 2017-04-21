import * as actionTypes from './actionTypes';

const apiUrl = 'http://localhost:3000';

// Sync Action
export const fetchMembersSuccess = (members) => {
  return {
    type: actionTypes.FETCH_MEMBERS_SUCCESS,
    members
  }
};

export const addMemberSuccess = (member) => {
  return{
    type : actionTypes.CREATE_MEMBER_SUCCESS,
    member
  }
}

export const deleteMemberSuccess = (member) => {
  return{
    type : actionTypes.DELETE_MEMBER_SUCCESS,
    member
  }
}

//Async Action
export const fetchMembers = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {

    // Returns a promise       
    return fetch(apiUrl + '/api/members', {
      method: 'GET'
    }).then((response) => response.json())
    .then((json) => {
      dispatch(fetchMembersSuccess(json))
    }).catch((error) => {
      console.log('Error in getting members list: ', error);
    });

  };
};


export const saveMember = (formData) =>{
   return (dispatch) => {

      return fetch(apiUrl + '/api/add-member',{
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          gender : formData.gender
        })
      }).then((response) => response.json())
      .then((data) => { 
          dispatch(addMemberSuccess(data))
      }).catch((error) => {
          console.log('Error in save member: ', error);
      });

   }
}


export const deleteMember = (memberObj) =>{
  return(dispatch) => {
      return fetch(apiUrl + '/api/delete-member/'+memberObj._id,{
          method:'DELETE'
      }).then((response) => response.json())
      .then((data) => { 
          dispatch(deleteMemberSuccess(data))
      }).catch((error) => {
          console.log('Error in delete member: ', error);
      });;
  }
}