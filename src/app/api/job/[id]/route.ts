import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const filePath = path.join(process.cwd(), "public/data/jobDetail.json");

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const jobsDetail = JSON.parse(jsonData);

    const job = jobsDetail[params.id];

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch  {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
