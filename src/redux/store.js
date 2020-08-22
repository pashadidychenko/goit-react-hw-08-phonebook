import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contactsReducer";
import statusReducer from "./status/statusReducer";
// import logger from "redux-logger";

const persistConfig = {
  key: "userBook",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    userBook: persistReducer(persistConfig, contactsReducer),
    status: persistReducer(persistConfig, statusReducer),
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
