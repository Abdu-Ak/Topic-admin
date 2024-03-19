import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { email, password } = await req.json();

  console.log(email, password);
  try {
    if (
      email === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const payload = {
        email: email,
      };

     let token = jwt.sign(payload, process.env.JWT_SECRET);

      return new NextResponse(
        JSON.stringify({ msg: "Login successful",token }),
        { status: 200 }
      );
    } else {
      // Authentication failed
      return new NextResponse(JSON.stringify({ msg: "Invalid credentials" }), {
        status: 401,
      });
    }
  } catch (error) {
    return new NextResponse(JSON.stringify({ msg: "Failed to Login" }), {
      status: 500,
    });
  }
};
