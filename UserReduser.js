import React,{useReducer} from 'react';
function reducer(state,action){
switch (action.type){
  case 'Increment':
    return state + action.payload;
  case 'Decrement':
    return state - action.payload;
  default :
   return state;
}
}

 const UserReduser = () => {
  const [count,dispatch]=useReducer(reducer,0)

  //Action Creators
  const incrementCount = (count)=>{
  return{type:"INCREMENT", payload:count}
  }
  return (
  <div>
    <div>count:{ count }</div>
    <button className="mx-3 rounded-3"  onClick={()=>dispatch(incrementCount(5))}> Increment</button>
    <button className="mx-3 btn btn-outline" onClick={()=>dispatch({type: 'Decrement'})}>Decrement</button>
  </div>
  )
}
export default UserReduser;