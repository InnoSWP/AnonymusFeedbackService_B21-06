import {
    configureStore,
    Action,
    Store,
    combineReducers
} from "@reduxjs/toolkit";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { ThunkAction } from "redux-thunk";
import userReducer from "./slices/UserSlice";
import appReducer from "./slices/AppSlice";

export const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<any>>;

export const makeStore: MakeStore<Store> = (context: Context): Store => {
    const store: Store = configureStore({
        reducer: rootReducer
    });

    // @ts-ignore
    // if (process.env.NODE_ENV === "development" && module.hot) {
    //   // @ts-ignore
    //   module.hot.accept("./slice", () => {
    //     const newRootReducer = require("./slice").default;
    //     store.replaceReducer(newRootReducer);
    //   });
    // }

    return store;
};
