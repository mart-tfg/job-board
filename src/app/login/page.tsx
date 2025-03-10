"use client"; // เพิ่มบรรทัดนี้ที่ด้านบนของไฟล์

import { useGlobalComponent } from "@/providers/GlobalComponents";
import Image from "next/image";
import logoJob from "@/assets/img/logo.jpg";
import { useState } from "react";


export default function Login() {
  const { Button, Input, Label } = useGlobalComponent();

  // State to store the form data as an object
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    // Here you can handle the login logic, e.g., send formData to an API
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-[100vh] bg-[ #ffffff] sm:bg-[#7e929b] flex justify-center items-center text-[#2d3f4b]">
      <div className="bg-[white] pl-5 pr-5 pb-2 w-[50vh] h-[50vh] flex justify-center items-center flex-col rounded-2xl">
        <Image src={logoJob} alt="Logo" width={150} height={150} />
        <form onSubmit={handleSubmit} className="w-[100%] text-center">
          <div className="w-[100%]">
            <Label className="text-[#2d3f4b]">Email</Label>
            <Input
              className="mt-[8px]"
              type="email"
              name="email" // Add name to identify the field
              value={formData.email} // Use formData for value
              onChange={handleChange} // Use handleChange for both fields
              required
            />
          </div>
          <div className="mt-4 w-[100%]">
            <Label className="text-[#2d3f4b]">Password</Label>
            <Input
              className="mt-[8px]"
              type="password"
              name="password" // Add name to identify the field
              value={formData.password} // Use formData for value
              onChange={handleChange} // Use handleChange for both fields
              required
            />
          </div>
          <Button type="submit" className="mt-8 cursor-pointer">
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
}
