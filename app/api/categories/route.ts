import { readFileSync } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  const file = readFileSync("data/blog.json");
  const data = JSON.parse(file.toString()).categories;

  return NextResponse.json(data);
}
