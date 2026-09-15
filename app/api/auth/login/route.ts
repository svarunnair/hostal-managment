import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Admin from "@/models/admin";
import { connectDB } from "@/lib/mongooDb";

export async function POST(request: Request) {
  try {
    await connectDB();

    const { username, password } = await request.json();

    console.log("Username received:", username);
    console.log("Password received:", password);

    const admin = await Admin.findOne({ username });

    console.log("Admin found:", admin);

    if (!admin) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      admin.password
    );

    console.log("Password valid:", isPasswordValid);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}