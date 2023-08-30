import { readFileSync } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const file = readFileSync("data/blog.json");
  const data = JSON.parse(file.toString()).posts;

  return NextResponse.json(data);
}
