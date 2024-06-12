import axios ,{ AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {IHttpAdapter } from "./IHttpAdapter";
import { redirect } from "next/navigation";

export class AxiosAdapter implements IHttpAdapter{
    
    private axiosInstance: AxiosInstance;
    private handleError(error: AxiosError): void{
        if (error.response?.status === 401){
            //Redirect to login page
            redirect('/googleLoginRedirect');
        } else {
            console.log("do some more logic");
        }
    }
    constructor(token: string){
        let config: AxiosRequestConfig = {
            baseURL: process.env.apiUrl as string,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
        this.axiosInstance = axios.create(config)
    }

    public async get(url: string, token: string): Promise<any> {
        const response = await this.axiosInstance.get(url);
        return response.data;
        //    let axiosError: AxiosError | null = null;
        // try {
        //     const response = await this.axiosInstance.get<T>(url);
        //     return response.data;
        // } catch (error) {
        //     axiosError = error as AxiosError
        // } finally{
        //     if (axiosError){
        //         this.handleError(axiosError as AxiosError)
        //     } 
        //  }
      }

    public async post<T> (url: string, token: string, params?: any): Promise<T>{
        try {
            const response = await this.axiosInstance.post<T>(url);
            return response.data;
        } catch (error) {
            this.handleError(error as AxiosError)
        }
    }  


}