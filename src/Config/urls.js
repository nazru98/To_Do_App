const APP_BASE_URL = 'https://nodejsserver-qh8k.onrender.com';
export const getApiUrl = (endpoint) => APP_BASE_URL + endpoint;

export const apiEndpoints = {
    GET_POST: getApiUrl('/products'),
}