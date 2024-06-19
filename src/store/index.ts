import { UnknownAction, configureStore } from '@reduxjs/toolkit';
import mailReducer from '../store/slices/mailSlice'; 
import accountReducer from '../store/slices/accountSlice';
import mailListReducer from '../store/slices/mailListSice'
import mailComponentReducer from '../store/slices/mailComponentSlice';;


const store = configureStore({
  reducer: {
    mail: mailReducer,
    account: accountReducer,
    mailList: mailListReducer,
    mailComponent: mailComponentReducer,

    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;



