import axios, { Method, AxiosResponse } from "axios";

const api = axios.create({
    baseURL: ''
})

export const request = <T>(method: Method, url: string, params: any): Promise<AxiosResponse<T>> => {
    return api.request({
        method,
        url,
        params
    })
}