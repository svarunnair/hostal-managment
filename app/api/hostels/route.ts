    import { NextResponse } from 'next/server';
    import { connectDB } from '@/lib/mongooDb';
    import Hostel from '@/models/hostel';

    export async function GET() {
    try {
        await connectDB();

        const hostels = await Hostel.find();

        return NextResponse.json(hostels);
    } catch (error) {
        return NextResponse.json(
        { message: 'Failed to fetch hostels' },
        { status: 500 }
        );
    }
    }


    export async function POST(request: Request) {
    try {
        await connectDB();

        const body = await request.json();

        const hostel = await Hostel.create(body);

        return NextResponse.json(hostel, {
        status: 201
        });
    } catch (error) {
        return NextResponse.json(
        { message: 'Failed to create hostel' },
        { status: 500 }
        );
    }
    }