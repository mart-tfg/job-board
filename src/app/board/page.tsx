"use client";

import { useLoading } from "@/context/LoadingContext";
import { useEffect, useState } from "react";
import CardJob from "./component/cardjob";

interface Job {
  id: number;
  jobTitle: string;
  subTitle: string;
  desc: string;
  timeAgo: string;
  logo: string;
}

export default function Board() {
  const { setIsLoading } = useLoading();
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs"); // เปลี่ยนเป็น API endpoint ของคุณ
        const data: Job[] = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [setIsLoading]);

  return (
    <div className="min-h-screen bg-[#043262] text-[#2d3f4b] p-8 flex flex-col gap-8">
      <h1 className="text-[#ffffff] text-2xl font-bold">
        ตำแหน่งงานแนะนำสำหรับคุณ
      </h1>
      <CardJob jobs={jobs} />
    </div>
  );
}
