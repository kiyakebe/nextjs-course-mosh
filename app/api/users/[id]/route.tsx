import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

// GET
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) return NextResponse.json({ error: "User not found" });

  return NextResponse.json(user);
}

// PUT
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const user = prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User Doesn't exist" }, { status: 404 });
  }

  prisma.user.update({
    data: {
      name: body.name,
      email: body.email,
      isActive: false,
    },
    where: {
      id: parseInt(params.id),
    },
  });

  return NextResponse.json({ message: "Updated user ", body }, { status: 200 });
}

// Delete
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = parseInt(params.id);

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return NextResponse.json({ error: "User doesn't exist" }, { status: 404 });
  }

  const deletedUser = await prisma.user.delete({
    where: { id: userId },
  });

  return NextResponse.json(deletedUser, {status: 200})

}

// PUT
// validate the request body
// If invalid return 400 erro
// Fetch the user with the given id
// If doesn't exist return 404 error
// update the user and
// retunr updated user
