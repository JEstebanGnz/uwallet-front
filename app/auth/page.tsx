import { HttpClient } from '../lib/Http/HttpClient';

export const user = () =>{
    const userInfo= async () => {
        const http = HttpClient.getInstance();
        const data = await http.get('/user')
        console.log(data);
    }
    userInfo();


    return (<>

        <h2> Let's goooo</h2>
    
    </>)

}

export default user;