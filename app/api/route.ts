import { NextResponse } from "next/server"
import type { NextApiRequest } from 'next'
import dbConnect from '@/app/utils/mongodb'
import mongoose from "mongoose";

export async function GET(request: any) {
  try {
    await dbConnect();
    console.log("Xd")
    const collection = mongoose.connection.db.collection('power');
    const data = await collection.find({
      "Var": "biofuels_cons_ej",
      "Country": { $in: ["Colombia", "Brazil"] }
    })
      .project({
        "Country": 1,
        "Year": 1,
        "Var": 1,
        "Value": 1
      }).toArray();
    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
 