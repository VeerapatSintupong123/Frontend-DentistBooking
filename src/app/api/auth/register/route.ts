import RegisterUser from "@/libs/registerUser";
import { NextResponse } from 'next/server';

export async function POST(req:Request){
    try{ 
        const {name,tel,email,password} = await req.json();
        const res = await RegisterUser(name,tel,email,password);
    }
    catch(e){return NextResponse.json({ message: 'unfinish' });}
    return NextResponse.json({ message: 'success' });
}