export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGE_CHAT = 'MESSAGES::ADD_MESSAGE_CHAT';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';

export const addMessage = (object) => ({
  type: ADD_MESSAGE,
  payload: object,
});
export const addMessageChat = (object) => ({
  type: ADD_MESSAGE_CHAT,
  payload: object,
});
export const deleteMessage = (idToDelete) => ({
  type: DELETE_MESSAGE,
  payload: idToDelete,
});