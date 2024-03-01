import { mongoConnect } from "lib/mongo-connect";
import User from "models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await req.json();
  await mongoConnect();
  const newUser = await User.find({ email: user.email });
  // const newUser = await User.create(user);

  return NextResponse.json(newUser);
}
