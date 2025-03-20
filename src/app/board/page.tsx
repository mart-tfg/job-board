'use client'

import { useEffect, useState } from 'react'
import { useLoading } from '@/context/LoadingContext'
import CardJob from './component/cardjob'
import { Job } from '../../types/jobTypes' // ใช้ types ที่เราเตรียมไว้
import { useGlobalComponent } from '@/providers/GlobalComponents'

export default function Board() {
  const {
    Button,
    Input,
    Label,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
  } = useGlobalComponent()
  const { setIsLoading } = useLoading()
  const [jobs, setJobs] = useState<Job[]>([])
  const [formData] = useState({
    job_name: '',
    location: '',
    job_type: ''
  })
  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('/api/jobs')
        const data: Job[] = await response.json()
        setJobs(data)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchJobs()
  }, [setIsLoading])
  const componentSearch = () => {
    return (
      <div className="bg-white w-full p-6 md:pt-14 md:pb-14 md:pl-60 md:pr-40 rounded-2xl flex justify-center">
        <div className="w-full flex flex-col lg:flex-row gap-4 ">
          {/* Job Search Section */}
          <div className="w-full lg:w-1/2">
            <Label className="text-[#2d3f4b] text-lg">ค้นหางาน</Label>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                className="mt-2 w-full md:w-[250px]"
                name="job_name"
                value={formData.job_name}
              />
              <Select>
                <SelectTrigger
                  className="mt-2 w-full md:w-[250px]"
                  name="job_type"
                >
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Location & Submit Button */}
          <div className="w-full lg:w-1/2">
            <Label className="text-[#2d3f4b] text-lg">สถานที่</Label>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                className="mt-2 w-full md:w-[250px]"
                name="location"
                value={formData.location}
              />
              <Button
                type="submit"
                className="cursor-pointer bg-[#043262] flex items-center justify-center w-full md:w-[120px] mt-2 text-lg"
              >
                ค้นหา
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#043262] text-[#2d3f4b] p-8 flex flex-col gap-8">
      {componentSearch()}
      <h1 className="text-[#ffffff] text-2xl font-bold">
        ตำแหน่งงานแนะนำสำหรับคุณ
      </h1>
      <CardJob jobs={jobs} />
    </div>
  )
}
