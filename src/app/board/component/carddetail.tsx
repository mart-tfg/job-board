"use client";
import { useLoading } from "@/context/LoadingContext";
import { useEffect } from "react";
import { useGlobalComponent } from "@/providers/GlobalComponents";
import Image from "next/image";

interface responsibilities {
  desc: string;
}

interface qualifications_and_skills {
  desc: string;
}
interface Job {
  id: number;
  jobTitle: string;
  sub_title: string;
  description: string;
  data_ago: string;
  salary: string;
  logo: string;
  companyName: string;
  responsibilities: responsibilities[];
  qualifications_and_skills: qualifications_and_skills[]
}

interface CardDetailProps {
  job_detail: Job | null | undefined;
}

export default function CardDetail({ job_detail }: CardDetailProps) {
  const { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } = useGlobalComponent();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, [setIsLoading]);

  return (
    <div className="w-[100%] md:block hidden">
      {job_detail ? (
        <Card className="min-h-[90vh]">
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
              <CardDescription>{job_detail.companyName}</CardDescription>
            </CardTitle>
            <CardTitle>
              <h3 className="text-lg font-semibold mt-4">Salary</h3>
              <CardDescription>{job_detail.salary}</CardDescription>
            </CardTitle>
            <CardTitle>
              {/* {job_detail.responsibilities} */}
              {job_detail.responsibilities.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Responsibility</h3>
                  <ul className="list-disc pl-5 mt-2">
                    {job_detail.responsibilities.map((data, index) => (
                      <li key={index}>
                        <p className="font-normal">{data.desc}</p>
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
                  <h3 className="text-lg font-semibold">Qualifications and Skills</h3>
                  <ul className="list-disc pl-5 mt-2">
                    {job_detail.qualifications_and_skills.map((data, index) => (
                      <li key={index}>
                        <p className="font-normal">{data.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardTitle>
            {/* แสดง benefits */}
            {/* {job_detail.benefits.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Benefits:</h3>
                <ul className="list-disc pl-5">
                  {job_detail.benefits.map((benefit, index) => (
                    <li key={index}>
                      <strong>{benefit.title}:</strong> {benefit.description}
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
          </CardContent>
          <CardFooter>
            <p>{job_detail.data_ago}</p>
          </CardFooter>
        </Card>
      ) : (
        <div>Select a job to view details</div>
      )}
    </div>
  );
}
