"use client";

import { useLoading } from "@/context/LoadingContext";
import { useEffect, useState } from "react";
import { useGlobalComponent } from "@/providers/GlobalComponents";
import CardDetail from "./../component/carddetail";
import Image from "next/image";



interface Job {
  id: number;
  jobTitle: string;
  subTitle: string;
  desc: string;
  timeAgo: string;
  logo: string;
}

interface CardJobProps {
  jobs: Job[];
}

export default function CardJob({ jobs }: CardJobProps) {
  const [job_detail, setJobs_Detail] = useState<Job | null | undefined>(null);
  const { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } = useGlobalComponent();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, [setIsLoading]);

  const fetchJobDetail = async (id: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/job/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Job = await response.json();
      setJobs_Detail(data);
    } catch (error) {
      console.error("Error fetching job detail:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full gap-8">
      <div className="flex flex-col gap-8 w-full">
        {jobs.map((job) => (
          <Card key={job.id} className="cursor-pointer" onClick={() => fetchJobDetail(job.id)}>
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  <CardTitle><div className="text-[24px]">{job.jobTitle}</div></CardTitle>
                  <CardDescription>{job.subTitle}</CardDescription>
                </div>
                <div>
                  <Image src={job.logo} alt="Logo" width={50} height={50} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{job.desc}</p>
            </CardContent>
            <CardFooter>
              <p>{job.timeAgo}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <CardDetail job_detail={job_detail} />
    </div>
  );
}
