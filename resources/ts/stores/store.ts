import { overviewApi } from "./../services/overview";
import { configureStore } from "@reduxjs/toolkit";
import styleReducer from "./styleSlice";
import mainReducer from "./mainSlice";
import logoutSlice from "./logoutSlice";

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    logout: logoutSlice,
    [overviewApi.reducerPath]: overviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(overviewApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
