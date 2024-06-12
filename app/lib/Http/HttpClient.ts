import { cookies } from "next/headers";
import { AxiosAdapter } from "./AxiosAdapter";
import { IHttpAdapter } from "./IHttpAdapter";

export class HttpClient{
 
    private static instance: HttpClient;
    private httpAdapter: IHttpAdapter;

    private constructor(){
        //Here we define what implementation we want to use. In this case I chose Axios
        const token = HttpClient.getTokenFromCookies()
        this.httpAdapter = new AxiosAdapter(token)
    }

    public static getInstance(){
        //Here we set the initial config in case an instance of AxiosAdapter doesn't exist yet. (baseUrl, initial headers)
        if (!HttpClient.instance){
            HttpClient.instance = new HttpClient()
        }
        return HttpClient.instance
    }

    public get(url: string, data?: any){
        return HttpClient.instance.httpAdapter.get(url)
    }


    public post(url: string){
        return HttpClient.instance.httpAdapter.post(url)
    }

    public static getTokenFromCookies(){
        const cookieStore = cookies();
        const token = cookieStore.get("access_token");
        if(!token) {
            throw new Error("Missing token")
        }
        return token.value
    }
}