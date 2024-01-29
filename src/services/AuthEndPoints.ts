import axios from "axios";
import { User } from "../types/authTypes";

const BASE_URL = "http://localhost:8000/";

export async function postLogin(data: User) {
    try {
        const res = await axios.post(`${BASE_URL}/api/login`, data, {
            withCredentials: true
        })
        return res.data;
    } catch (error) {
        throw error
    }
}

export async function postLogout() {
    try {
        const res = await axios.post(`${BASE_URL}/api/logout`, {}, {
            withCredentials: true
        })
        return res;
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function checkAuth() {
    try {
        const res = await axios.get(`${BASE_URL}/api/check-authentication`, {
            withCredentials: true
        })
        return res;
    } catch (error) {
        console.error(error)
        throw error
    }
}