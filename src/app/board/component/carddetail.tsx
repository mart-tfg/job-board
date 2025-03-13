"use client";
import { useLoading } from "@/context/LoadingContext";
import { useEffect } from "react";
import { useGlobalComponent } from "@/providers/GlobalComponents";

interface Job {
  id: number;
  title: string;
  sub_title: string;
  desc: string;
  data_ago: string;
}

interface CardDetailProps {
  job: Job | null; // Job detail passed as prop, or null if not selected
}

export default function CardDetail({ job }: CardDetailProps) {
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
      setIsLoading(false); // Simulating loading for 1 second
    }, 1000);
  }, [setIsLoading]);

  // if (!job) {
  //   return <div className="w-[100%] md:block hidden">Select a job to view details</div>;
  // }

  return (
    <div className="w-[100%] md:block hidden">
    {job ? (
      <Card className="h-[90vh]">
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
    ) : (
      <div></div> 
    )}
  </div>
  
  );
}
