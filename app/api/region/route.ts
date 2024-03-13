import { connection } from "mongoose";
import dbConnect from "@/app/utils/mongodb";
import { NextResponse } from 'next/server';

export async function GET(request: any) {
    try {
        await dbConnect();
        const collection = connection.db.collection('power');

        const Region = await collection.aggregate([
            {
                '$group': {
                    '_id': null,
                    'Region': {
                        '$addToSet': '$Region'
                    }
                }
            }
        ]).toArray();

        return NextResponse.json({ Region });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}