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
            state.widgets.push(action.payload);
        },
        deleteWidget: (state, action) => {
            state.widgets = [...state.widgets.filter((item, index) => index != action.payload)]
        }
    }
});

export const { addWidget, deleteWidget } = widgetSlice.actions;

export default widgetSlice.reducer;
