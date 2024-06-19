// store/slices/mailListSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mail } from '../../app/data';

interface MailListState {
  items: Mail[];
  selectedMailId: string | null;
}

const initialState: MailListState = {
  items: [],
  selectedMailId: null,
};

const mailListSlice = createSlice({
  name: 'mailList',
  initialState,
  reducers: {
    setMailItems(state, action: PayloadAction<Mail[]>) {
      state.items = action.payload;
    },
    selectMailItem(state, action: PayloadAction<string>) {
      state.selectedMailId = action.payload;
    },
  },
});

export const { setMailItems, selectMailItem } = mailListSlice.actions;
export default mailListSlice.reducer;
