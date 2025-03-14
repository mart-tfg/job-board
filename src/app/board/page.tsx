"use client";

import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import CardJob from "./component/cardjob";
import { Job } from "../../types/jobTypes"; // ใช้ types ที่เราเตรียมไว้

export default function Board() {
  const { setIsLoading } = useLoading();
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/jobs");
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
      <h1 className="text-[#ffffff] text-2xl font-bold">ตำแหน่งงานแนะนำสำหรับคุณ</h1>
      <CardJob jobs={jobs} />
    </div>
  );
}
