"use client"; // เพิ่มบรรทัดนี้ที่ด้านบนของไฟล์

import { useGlobalComponent } from "@/providers/GlobalComponents";
import Image from "next/image";
import logoJob from "@/assets/img/logo.png";
import { useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import { useEffect } from "react";

export default function Register() {
  const { Button, Input, Label } = useGlobalComponent();
  const { setIsLoading } = useLoading(); // ใช้ setIsLoading เพื่อจัดการสถานะการโหลด

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [setIsLoading]);

  // State to store the form data as an object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    // Here you can handle the registration logic, e.g., send formData to an API
    console.log("Registration Data:", formData);
  };

  return (
    <div className="min-h-[100vh] bg-[ #ffffff] sm:bg-[#043262] flex justify-center items-center text-[#2d3f4b]">
      <div className="bg-[white] pl-5 pr-5 pb-4 w-[50vh]  flex justify-center items-center flex-col rounded-2xl">
        <Image src={logoJob} alt="Logo" width={150} height={150} />
        <form onSubmit={handleSubmit} className="w-[100%] text-center">
          <div className="w-[100%]">
            <Label className="text-[#2d3f4b]">Full Name</Label>
            <Input
              className="mt-[8px]"
              type="text"
              name="name" // Add name to identify the field
              value={formData.name} // Use formData for value
              onChange={handleChange} // Use handleChange for all fields
              required
            />
          </div>
          <div className="mt-4 w-[100%]">
            <Label className="text-[#2d3f4b]">Email</Label>
            <Input
              className="mt-[8px]"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4 w-[100%]">
            <Label className="text-[#2d3f4b]">Password</Label>
            <Input
              className="mt-[8px]"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4 w-[100%]">
            <Label className="text-[#2d3f4b]">Confirm Password</Label>
            <Input
              className="mt-[8px]"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="mt-8 cursor-pointer bg-[#043262]">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
