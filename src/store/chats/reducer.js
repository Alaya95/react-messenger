import { ADD_CHATS, DELETE_CHATS } from './actions';

const initialState = [];

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHATS:
      return [...state, payload];
    case DELETE_CHATS:
      return state.filter(({id}) => id !== payload);
    default:
      return state;
  }
};
