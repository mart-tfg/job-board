import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), "public/data/jobDetail.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const jobsDetail = JSON.parse(jsonData);

  const job = jobsDetail[params.id];

  if (!job) {
    return NextResponse.json({ error: "job not found" }, { status: 404 });
  }

  return NextResponse.json(job);
}
