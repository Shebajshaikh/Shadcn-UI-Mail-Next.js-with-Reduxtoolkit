import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MailState {
  selectedMail: string | null;
}

const initialState: MailState = {
  selectedMail: null,
};

const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    selectMail(state, action: PayloadAction<string>) {
      state.selectedMail = action.payload;
    },
    clearMail(state) {
      state.selectedMail = null;
    },
  },
});

export const { selectMail, clearMail } = mailSlice.actions;
export default mailSlice.reducer;
