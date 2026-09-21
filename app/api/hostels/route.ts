    import { NextResponse } from 'next/server';
    import { connectDB } from '@/lib/mongooDb';
    import Hostel from '@/models/hostel';

    // export async function GET() {
    // try {
    //     await connectDB();

    //     const hostels = await Hostel.find();

    //     return NextResponse.json(hostels);
    // } catch (error) {
    //     return NextResponse.json(
    //     { message: 'Failed to fetch hostels' },
    //     { status: 500 }
    //     );
    // }
    // }

    export async function GET(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    // Get query parameters
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    // Calculate how many documents to skip
    const skip = (page - 1) * limit;

    // Search condition
    const filter = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    // Get total count
    const totalHostels = await Hostel.countDocuments(filter);

    // Get paginated data
    const hostels = await Hostel.find(filter)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    // Calculate total pages
    const totalPages = Math.ceil(totalHostels / limit);

    return NextResponse.json({
      data: hostels,
      pagination: {
        currentPage: page,
        limit,
        totalHostels,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    });
  } catch (error) {
    console.error("Get hostels error:", error);

    return NextResponse.json(
      { message: "Failed to fetch hostels" },
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