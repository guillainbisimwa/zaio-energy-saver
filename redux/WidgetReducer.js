import { createSlice } from "@reduxjs/toolkit";

const widgetSlice = createSlice({
    name: "widget",
    initialState: {
        widgets: [
            {
                id: 1,
                name : 'Light Default',
                location: 'Living Room',
                active: true,
                state : 30,
                icon : 'light'
            },
        ]
    },
    reducers: {
        addWidget: (state, action) =>{
            state.widgets.push(action.payload)
        }
    }
});

export const { addWidget } = widgetSlice.actions;

export default widgetSlice.reducer;
