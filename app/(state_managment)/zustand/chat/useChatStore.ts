import create from 'zustand';

interface Message {
  id: string;
  name: string;
  message: string;
  time: string;
  unread: number;
  avatar: string;
}

interface ChatStore {
  messages: Message[];
  addMessage: (message: Message) => void;
  deleteMessages: (ids: string[]) => void;
}

const initialMessages: Message[] = [
  {
    id: '1',
    name: 'Служба поддержки',
    message: 'Уважаемый клиент, мы при ...',
    time: '2:14 PM',
    unread: 1,
    avatar: 'https://picsum.photos/200/300',
  },
  // boshqa xabarlar
];

export const useChatStore = create<ChatStore>((set) => ({
  messages: initialMessages,
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  deleteMessages: (ids) =>
    set((state) => ({ messages: state.messages.filter((message) => !ids.includes(message.id)) })),
}));
