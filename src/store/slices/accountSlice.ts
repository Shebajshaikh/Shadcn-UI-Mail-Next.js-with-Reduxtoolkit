// features/account/accountSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AccountState {
  selectedAccount: string;
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
}

const initialState: AccountState = {
  selectedAccount: '',
  accounts: []
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setSelectedAccount(state, action: PayloadAction<string>) {
      state.selectedAccount = action.payload;
    },
    setAccounts(state, action: PayloadAction<AccountState['accounts']>) {
      state.accounts = action.payload;
      if (!state.selectedAccount && state.accounts.length > 0) {
        state.selectedAccount = state.accounts[0].email;
      }
    },
  },
});

export const { setSelectedAccount, setAccounts } = accountSlice.actions;
export default accountSlice.reducer;
