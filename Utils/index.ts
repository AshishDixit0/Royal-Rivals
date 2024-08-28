import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log("error while storing", e);
    }
}

export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        console.log("error while getting", e);
    }
}

export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.log("error while removing", e);
    }
}

export const clearData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        console.log("error while clearing", e);
    }
}

export const showToast = (type: any, msg: string) => {
    Toast.show({
        type: type,
        text1: msg,
    });
} 