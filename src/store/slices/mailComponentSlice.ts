// store/slices/mailComponentSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mail } from '../../app/data';

interface MailComponentState {
  isCollapsed: boolean;
  selectedMailId: string | null;
  mails: Mail[];
}

const initialState: MailComponentState = {
  isCollapsed: false,
  selectedMailId: null,
  mails: [],
};

const mailComponentSlice = createSlice({
  name: 'mailComponent',
  initialState,
  reducers: {
    setCollapsed(state, action: PayloadAction<boolean>) {
      state.isCollapsed = action.payload;
    },
    selectMail(state, action: PayloadAction<string>) {
      state.selectedMailId = action.payload;
    },
    setMails(state, action: PayloadAction<Mail[]>) {
      state.mails = action.payload;
    },
  },
});

export const { setCollapsed, selectMail, setMails } = mailComponentSlice.actions;
export default mailComponentSlice.reducer;
