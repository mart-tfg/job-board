// src/app/page.tsx (หรือไฟล์ที่เรียกใช้ useGlobalComponent)
"use client"; // เพิ่มบรรทัดนี้ที่ด้านบนของไฟล์

import { useGlobalComponent } from "@/providers/GlobalComponents";

export default function Login() {
  const { Button, Input, Label } = useGlobalComponent();

  return (
    <div className="min-h-[100vh] bg-[#7e929b] text-[white] flex justify-center items-center">
      <div className="bg-[white] pl-5 pr-5 pt-2 pb-2 w-[50vh] h-[50vh] flex justify-center items-center flex-col">
        <div className="w-[100%]">
          <Label className="text-[#2d3f4b]">Email</Label>
          <Input className="mt-[8px]" />
        </div>
        <div className="mt-4 w-[100%]">
          <Label className="text-[#2d3f4b]">Password</Label>
          <Input className="mt-[8px]" />
        </div>
      </div>
      <Button>Click me</Button>
    </div>
  );
}
