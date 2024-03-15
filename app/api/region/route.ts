import { connection } from "mongoose";
import dbConnect from "@/app/utils/mongodb";
import { NextResponse } from 'next/server';

export async function GET(request: any) {
    try {
        await dbConnect();
        const collection = connection.db.collection('power');

        const result = await collection.aggregate([
            {
                '$group': {
                    '_id': null,
                    'Region': {
                        '$addToSet': '$Region'
                    }
                }
            }
        ]).toArray();

        const regiones = result[0]?.Region || []; // Accede directamente al array de regiones

        return NextResponse.json({ regiones });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}