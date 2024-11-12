import { Post } from "@/types/Post";
import { User } from "@/types/User";
import axios, { Method, AxiosResponse } from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8070'
})

export const request = <T>(method: Method, url: string, data?: Post | User): Promise<AxiosResponse<T>> => {
    return api.request({
        method,
        url,
        data
    })
}