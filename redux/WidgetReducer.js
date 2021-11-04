import { createSlice } from "@reduxjs/toolkit";
import List from "../constants/List";

const widgetSlice = createSlice({
    name: "widget",
    initialState: {
        widgets: [...List]
    },
    reducers: {
        addWidget: (state, action) =>{
            state.widgets.push(action.payload);
        },
        deleteWidget: (state, action) => {
            state.widgets = [...state.widgets.filter((item, index) => index != action.payload)]
        }
    }
});

export const { addWidget, deleteWidget } = widgetSlice.actions;

export default widgetSlice.reducer;
