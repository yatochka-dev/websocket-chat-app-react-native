import { create } from "zustand";

interface IMessage {
  name: string;
  message: string;
}

interface IMessagesStore {
  messages: IMessage[];
  addMessage: (message: IMessage) => void;
  setMessages: (messages: IMessage[]) => void;
  clearMessages: () => void;
}

const useMessagesStore = create<IMessagesStore>()((set) => ({
  addMessage: (message: IMessage) =>
    set((state) => ({ messages: [message, ...state.messages] })),
  setMessages: (messages: IMessage[]) =>
    set(() => ({ messages: [...messages] })),
  clearMessages: () => set(() => ({ messages: [] })),

  messages: [],
}));

export default useMessagesStore;
export type { IMessagesStore, IMessage };
