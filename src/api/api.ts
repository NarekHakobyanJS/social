import axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        "API-KEY": '97b016cf-738c-412b-8c5c-fe131956f90e'
    }
})

export const socialAPI = {
    getUsers(page: number = 1, pageSize: number = 30){
        return instance.get(`/users?page=${page}&count=${pageSize}`)
            .then((response) => response.data)
    }
}
