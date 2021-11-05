import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import WidgetReducer from "./WidgetReducer";

export default configureStore({
    reducer: {
        widget: WidgetReducer,
        user: authReducer
    },
})