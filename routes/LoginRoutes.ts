import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Admin from "@/models/admin";
import { connectDB } from "@/lib/mongooDb";

export async function POST(request: Request) {
  try {
    // 1. Connect to MongoDB
    await connectDB();

    // 2. Get data from request
    const { username, password } = await request.json();

    // 3. Validate input
    if (!username || !password) {
      return NextResponse.json(
        {
          message: "Username and password are required",
        },
        {
          status: 400,
        }
      );
    }

    // 4. Find admin by username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return NextResponse.json(
        {
          message: "Invalid username or password",
        },
        {
          status: 401,
        }
      );
    }

    // 5. Compare password
    const isPasswordValid = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: "Invalid username or password",
        },
        {
          status: 401,
        }
      );
    }

    // 6. Login successful
    return NextResponse.json(
      {
        message: "Login successful",
        admin: {
          id: admin._id,
          username: admin.username,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}