import { connection } from "mongoose";
import dbConnect from "@/app/utils/mongodb";
import { NextResponse } from 'next/server';

export async function GET(request: any) {
    const { searchParams } = new URL(request.url);
    const parametro:any = searchParams.get('value');
    console.log(parametro)
    const filtro = JSON.parse(parametro)

    try {
        await dbConnect();
        const collection = connection.db.collection('power');

        // Usando el parámetro directamente
        const datos = await collection.find(filtro).project({
        "Country": 1,
        "Year": 1,
        "Value": 1
      }).toArray();

        return NextResponse.json({ datos });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}