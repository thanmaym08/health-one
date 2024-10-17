import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, age, gender } = await req.json();

    const { db } = await connectToDatabase();
    const result = await db.collection('patients').insertOne({ name, age, gender });

    return NextResponse.json({ message: 'Patient added successfully', patientId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Error adding patient:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
