export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGE_CHAT = 'MESSAGES::ADD_MESSAGE_CHAT';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    message,
  },
});
export const addMessageChat = (newChatId) => ({
  type: ADD_MESSAGE_CHAT,
  payload: {
    [newChatId]: [],
  },
});
export const deleteMessage = (idToDelete) => ({
  type: DELETE_MESSAGE,
  payload: idToDelete,
});
