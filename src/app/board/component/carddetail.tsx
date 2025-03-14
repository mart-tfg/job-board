"use client";
import { useLoading } from "@/context/LoadingContext";
import { useEffect } from "react";
import { Job } from "../../../types/jobTypes"; // ใช้ types ที่เราเตรียมไว้
import { useGlobalComponent } from "@/providers/GlobalComponents";
import Image from "next/image";
interface CardDetailProps {
  job_detail: Job | null | undefined;
}

export default function CardDetail({ job_detail }: CardDetailProps) {
  const {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Card,
  } = useGlobalComponent();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, [setIsLoading]);

  return (
    <div className="w-[100%]">
      {job_detail ? (
        <Card className="min-h-[100vh]">
          <CardHeader>
            <Image src={job_detail.logo} alt="Logo" width={1000} height={100} />
            <CardTitle>
              <div className="text-[24px] mt-4">{job_detail.jobTitle}</div>
            </CardTitle>
            <CardDescription>{job_detail.companyName}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{job_detail.description}</p>
            <CardTitle>
              <h3 className="text-lg font-semibold mt-4">Location</h3>
              <CardDescription>{job_detail.location}</CardDescription>
            </CardTitle>
            <CardTitle>
              <h3 className="text-lg font-semibold mt-4">Salary</h3>
              <CardDescription>{job_detail.salary}</CardDescription>
            </CardTitle>
            <CardTitle>
              {/* {job_detail.responsibilities} */}
              {job_detail.responsibilities.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg ">Responsibility</h3>
                  <ul className="list-disc pl-5 mt-2">
                    {job_detail.responsibilities.map((data, index) => (
                      <li key={index}>
                        <CardDescription>
                          <div className="font-normal"></div>
                          {data.desc}
                        </CardDescription>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardTitle>
            <CardTitle>
              {/* {job_detail.responsibilities} */}
              {job_detail.qualifications_and_skills.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">
                    Qualifications and Skills
                  </h3>
                  <ul className="list-disc pl-5 mt-2">
                    {job_detail.qualifications_and_skills.map((data, index) => (
                      <li key={index}>
                        <CardDescription>
                          <div className="font-normal"></div>
                          {data.desc}
                        </CardDescription>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardTitle>
            <CardTitle>
              {/* {job_detail.responsibilities} */}
              {job_detail.benefits.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Benefit</h3>
                  <ul className="list-disc pl-5 mt-2">
                    {job_detail.benefits.map((data, index) => (
                      <li key={index}>
                        <CardDescription>
                          <div className="font-normal"></div>
                          {data.desc}
                        </CardDescription>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardTitle>
          </CardContent>
          <CardFooter>
            <p>{job_detail.data_ago}</p>
          </CardFooter>
        </Card>
      ) : (
        <div></div>
      )}
    </div>
  );
}
