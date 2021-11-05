import AsyncStorage from "@react-native-async-storage/async-storage"

const getToken = async () => {
    // Get Toke from AsyncStorage
    try {
        const value = await AsyncStorage.getItem('@token')
        if(value !== null) {
            // value previously stored
            return value
        }      
    } catch(e) {
      // error reading value
      console.log('error', e);
    }
    return null

};

const login = (name, password) => {
    // Call API
    const rep = await fakeApi.post('/auth/login', {
        username: name,
        password: password
    });

    console.log(rep.data);
    if(rep.data.hasOwnProperty('token')){

        const value = { token: rep.data.token, user: { name, password }}
        storeData(value)

        return { value }
    }
    // Save to AsyncStorage if true
    // return token and user obj
};

const storeData = async (value) => {
    try {
        const obj = JSON.stringify(value)
        await AsyncStorage.setItem('@token', obj)
    } catch (e) {
      // saving error
      console.log('error');
    }
};


const logOut = async (token) => {
    try {
        //(why Token?) Impelemented if server requested
        await AsyncStorage.clear();
    } catch(e) {
      // clear error
    }
  
    return true;
};

export default {
    login,
    getToken,
    logOut
};
