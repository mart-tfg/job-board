import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public/data/jobs.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const jobs = JSON.parse(jsonData);

  return NextResponse.json(jobs);
}
