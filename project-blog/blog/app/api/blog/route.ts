import prisma from "@/prisma";
import { NextResponse } from "next/server";

async function main() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("Database Error");
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  console.log("POST");
};