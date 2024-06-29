import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { name: "Milk", price: 12 },
    { name: "Milk", price: 12 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  const session = await getServerSession(authOptions)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json(
    <h3>Hello { session && session.user!.name }</h3>
    { message: "success", body: { id: 1, name: body.name, price: body.price } },
    { status: 201 }
  );
}
