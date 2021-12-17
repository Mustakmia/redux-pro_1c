import axios from "axios";

const BASE_URL = "http://localhist:5000/api/";
const TOKEN = "edtfhjnkhjgjhkjkjkkjlklklklklkl;l;l;l;l'";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const uesrRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer${TOKEN}` }
});