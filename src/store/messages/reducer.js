import { ADD_MESSAGE, ADD_MESSAGE_CHAT, DELETE_MESSAGE } from './actions';

const initialState = [];

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.chatId]: [...state[payload.chatId], payload.message],
      };
    case ADD_MESSAGE_CHAT:
      return { ...state, ...payload };
    case DELETE_MESSAGE:
      delete state[payload];
      return state;
    default:
      return state;
  }
};
