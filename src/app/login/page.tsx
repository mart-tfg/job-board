"use client";

import { useGlobalComponent } from "@/providers/GlobalComponents";
import Image from "next/image";
import logoJob from "@/assets/img/logo.png";
import { useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { Button, Input, Label } = useGlobalComponent();
  const { setIsLoading } = useLoading();
  const router = useRouter();

  useEffect(() => {
    // เคลียร์ cookies เมื่อเข้ามาที่หน้า login
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]);

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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      formData.email === "buyoopak@gmail.com" &&
      formData.password === "1234"
    ) {
      // Set token in cookies on successful login
      document.cookie = "token=mocked-token; path=/"; // Set a mock token

      // Redirect to dashboard
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-[100vh] bg-[ #ffffff] sm:bg-[#043262] flex justify-center items-center text-[#2d3f4b]">
      <div className="bg-[white] pl-5 pr-5 pb-4 w-[50vh]  flex justify-center items-center flex-col rounded-2xl">
        <Image src={logoJob} alt="Logo" width={150} height={150} />
        <form onSubmit={handleSubmit} className="w-[100%] text-center">
          <div className="w-[100%]">
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
          <Button type="submit" className="mt-8 cursor-pointer bg-[#043262]">
            Log in
          </Button>
          <div className="mt-8">{"Don't have an account? Sign up"}</div>
        </form>
      </div>
    </div>
  );
}
