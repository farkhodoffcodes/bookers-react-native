import create from 'zustand';

interface StoreState {
  inputValue: string;
  isFocused: boolean;
  isValidFocus: boolean;
  setInputValue: (value: string) => void;
  setIsFocused: (value: boolean) => void;
  setIsValidFocus: (value: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  inputValue: '',
  isFocused: false,
  isValidFocus: false,
  setInputValue: (value) => set({ inputValue: value }),
  setIsFocused: (value) => set({ isFocused: value }),
  setIsValidFocus: (value) => set({ isValidFocus: value }),
}));

export default useStore;
