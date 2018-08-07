import { INCREMENT, DECREMENT } from '../actions'

//stateの初期値をオブジェクトとして定義
const initialState = { value: 0 }

export default = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { state.value +1 }
    case INCREMENT:
      return { state.value +1 }
    default:
      return { state.value }
  }
}
