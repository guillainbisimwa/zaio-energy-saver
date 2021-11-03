import { configureStore } from "@reduxjs/toolkit";
import WidgetReducer from "./WidgetReducer";

export default configureStore({
    reducer: {
        widget: WidgetReducer
    },
})