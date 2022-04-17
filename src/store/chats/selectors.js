export const selectorChats = (state) => state.chats;
export const selectMessagesChatId = (chatId) => (state) => state.messages[chatId];