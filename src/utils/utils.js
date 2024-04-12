import AsyncStorage from "@react-native-async-storage/async-storage";

import axios, {isCancel, AxiosError} from 'axios';

export const apiReaponse = (
  method,
  url,
  data,
  headers,
) => {
  return new Promise(async (res, rej) => {
    (axios)
      [method](url, data, {headers})
      .then((response) => {
        res(response);
      })
      .catch((error) => {
        rej(error);
      });
  });
};
export const apiGet = (url, data, headers) => {    
  return apiReaponse('get', url, data, headers);
};

export const apiPost = (url, data, headers) => {
  return apiReaponse('post', url, data, headers);
};

export const apiDelete = (url, data, headers) => {
  return apiReaponse('delete', url, data, headers);
};

export const apiUpdate = (url, data, headers) => {
  return apiReaponse('put', url, data, headers);
};

export const storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      
    }
  };
  
  export const getData = async (key) => {
      const jsonValue = await AsyncStorage.getItem(key);
    try {
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
     
    }
  };



