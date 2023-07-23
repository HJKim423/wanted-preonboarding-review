//state: count number
//count: number

//method: count increment

//action
//{type: "counter/increment"}

//action type
const INCREMENT = 'counter/increment'; //중복이므로 유지보수&오타를 위해 상수화

//action creator
export function increaseCounter() {
  return { type: INCREMENT };
}

//reducer
//(state,action)=> state(number)
//counter/increment -> state+1
const INITIAL_STATE = 0;

export function counterReducer(state = INITIAL_STATE, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  }

  return state;
}
