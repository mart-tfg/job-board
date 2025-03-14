"use client";

import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import { useGlobalComponent } from "@/providers/GlobalComponents";
import CardDetail from "./../component/carddetail";
import Image from "next/image";
import { Job } from "../../../types/jobTypes"; // ใช้ types ที่เราเตรียมไว้

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

interface CardJobProps {
  jobs: Job[];
}

export default function CardJob({ jobs }: CardJobProps) {
  const [job_detail, setJobs_Detail] = useState<Job | null | undefined>(null);
  const {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    ScrollArea,
  } = useGlobalComponent();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, [setIsLoading]);

  const fetchJobDetail = async (id: string) => {
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
    <div>
      {/* Mobile and Tablet View */}
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <div className="flex w-full gap-8">
              <div className="flex flex-col gap-8 w-full text-start">
                {jobs.map((job) => (
                  <Card
                    key={job.id}
                    className="cursor-pointer"
                    onClick={() => fetchJobDetail(job.id.toString())}
                  >
                    <CardHeader>
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>
                            <div className="text-[24px]">{job.jobTitle}</div>
                          </CardTitle>
                          <CardDescription>{job.subTitle}</CardDescription>
                        </div>
                        <div>
                          <Image
                            src={job.logo}
                            alt="Logo"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{job.desc}</p>
                    </CardContent>
                    <CardFooter>
                      <CardDescription>{job.timeAgo}</CardDescription>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </SheetTrigger>
          <SheetContent className="rounded-l-2xl">
            <SheetHeader>
              <ScrollArea className="h-[87vh] w-full rounded-md mt-8">
                <CardDetail job_detail={job_detail} />
              </ScrollArea>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="flex w-full gap-8">
          <ScrollArea className="h-[100vh] w-full rounded-md pr-4">
            <div className="flex flex-col gap-8 text-start">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="cursor-pointer"
                  onClick={() => fetchJobDetail(job.id.toString())}
                >
                  <CardHeader>
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>
                          <div className="text-[24px]">{job.jobTitle}</div>
                        </CardTitle>
                        <CardDescription>{job.subTitle}</CardDescription>
                      </div>
                      <div>
                        <Image
                          src={job.logo}
                          alt="Logo"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{job.desc}</p>
                  </CardContent>
                  <CardFooter>
                    <CardDescription>{job.timeAgo}</CardDescription>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="h-[100vh] w-full rounded-md pr-4">
            <CardDetail job_detail={job_detail} />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}