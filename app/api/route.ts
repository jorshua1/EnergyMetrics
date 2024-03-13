import { NextResponse } from "next/server"
import type { NextApiRequest } from 'next'
import dbConnect from '@/app/utils/mongodb'
import mongoose from "mongoose";

export async function GET(request: any) {
  try {
    await dbConnect();
    console.log("Xd")
    const collection = mongoose.connection.db.collection('power');
    const data = await collection.find({Country:'Colombia',Year:2012}).toArray();
    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export function POST(req: NextApiRequest, { params }: any) {
  return NextResponse.json({ mensaje: ` "POST" ` })
}
export function PUT(req: NextApiRequest, { params }: any) {
  return NextResponse.json({ mensaje: ` "PUT" ` })
}
export function DELETE(req: NextApiRequest, { params }: any) {
  return NextResponse.json({ mensaje: ` "DELETE" ` })
}
// 