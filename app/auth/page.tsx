'use client'
import { cookies, headers } from 'next/headers';
import { HttpClient } from '../lib/Http/HttpClient';
import { useEffect } from 'react';

export const auth = () =>{
    const userInfo= async () => {
        const http = HttpClient.getInstance();
        const response = await http.post('/api/userData', {})
        console.log(response.data);
    }
    useEffect(() => {
        userInfo();
      }, []);
    return (<>
       
    </>)
}

export default auth;

