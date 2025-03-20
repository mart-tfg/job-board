'use client'
import { useLoading } from '@/context/LoadingContext'
import { useEffect } from 'react'
import { Job } from '../../../types/jobTypes' // ใช้ types ที่เราเตรียมไว้
import { useGlobalComponent } from '@/providers/GlobalComponents'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { TextSearch } from 'lucide-react'
import { Bookmark } from 'lucide-react'
interface CardDetailProps {
  job_detail: Job | null | undefined
}

export default function CardDetail({ job_detail }: CardDetailProps) {
  const {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Card,
    Button
  } = useGlobalComponent()
  const { setIsLoading } = useLoading()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }, [setIsLoading])

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
              <CardTitle className="mt-4 flex gap-4">
                <Button className="bg-[#043262] text-[16px] w-[100px] cursor-pointer">
                  สมัคร
                </Button>
                <Button className="!bg-[#8fb2d7] text-[16px] w-[100px] flex cursor-pointer">
                  บันทึก <Bookmark size={15} className="text-center ml-[2px]" />
                </Button>
              </CardTitle>
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
        <div className=" bg-[white] h-[100vh] p-8">
          <div className="flex gap-4 items-start h-[20%]">
            <div>
              <ArrowLeft size={35} />
            </div>
            <div className="text-start">
              <div className="text-[24px]">เลือกงาน</div>
              <div className="text-gray-500">แสดงรายละเอียดที่นี่</div>
            </div>
          </div>
          <div className="flex items-center h-[70%] justify-center">
            <TextSearch size={100} color="#043262" />
          </div>
        </div>
      )}
    </div>
  )
}
