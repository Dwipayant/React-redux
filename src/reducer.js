import React from 'react';
const initialState = {age:21};
function reducer(state = initialState, action) {
    switch(action.type){
        case 'AGE_UP':
            return{
                age: state.age+1
            };
        case 'AGE_DOWN':
            return{
                age:state.age-1
            }
        default:{
            return{
                age:state.age
            }
        }
    }
}

export default reducer;