// действия которые можно сделать с чатами
export const ADD_CHATS = 'CHATS::ADD_CHATS';
export const DELETE_CHATS = 'CHATS::DELETE_CHATS';

export const addChat = (newChat) => ({
  type: ADD_CHATS,
  payload: newChat,
});

export const deleteChat = (idToDelete) => ({
  type: DELETE_CHATS,
  payload: idToDelete,
});
