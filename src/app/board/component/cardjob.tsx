"use client";

import { useLoading } from "@/context/LoadingContext";
import { useEffect, useState } from "react";
import { useGlobalComponent } from "@/providers/GlobalComponents";
import CardDetail from "./../component/carddetail";

interface Job {
  id: number;
  title: string;
  sub_title: string;
  desc: string;
  data_ago: string;
}

interface CardJobProps {
  jobs: Job[];
}

export default function CardJob({ jobs }: CardJobProps) {
  const [job_detail, setJobs_Detail] = useState<Job | null>(null); // เปลี่ยนเป็น Job | null
  const {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } = useGlobalComponent();

  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]);

  const fetchJobDetail = async (id: string) => {
    setIsLoading(true); // ตั้งค่า loading ก่อน fetch
    try {
      const response = await fetch(`/api/job/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Job = await response.json(); // เปลี่ยนเป็น Job เดียว
      setJobs_Detail(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching job detail:", error);
      // แสดงข้อความ error ให้ผู้ใช้ทราบ
    } finally {
      setIsLoading(false); // ตั้งค่า loading หลัง fetch เสร็จ
    }
  };

  return (
    <div className="flex w-full gap-8">
      <div className="flex flex-col gap-8 w-full">
        {jobs.map((job) => (
          <Card key={job.id} className="cursor-pointer" onClick={() => fetchJobDetail(job.id.toString())}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.sub_title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{job.desc}</p>
            </CardContent>
            <CardFooter>
              <p>{job.data_ago}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <CardDetail job={job_detail} />
    </div>
  );
}