import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@token')
        return value
              
    } catch(e) {
      // error reading value
      console.log('error', e);
    }
}

const authSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            token: getData(),
            loading: false,
            error: "",
            user: {
                firstname: '',
                lastname: ''
            }
        }
    },
    reducers: {
        addToken: (state, action) => {
            state.user.token = action.payload
        },
        removeToken: (state) => {
            state.user.token = null
        }
        
    }
});

export const { addToken } = authSlice.actions;

export default authSlice.reducer;
