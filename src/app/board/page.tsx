"use client"; // เพิ่มบรรทัดนี้ที่ด้านบนของไฟล์
import { useAuth } from "@/context/AuthContext";

export default function DashBoard() {
  const { token, logout } = useAuth();

  return (
    <div className="min-h-[100vh] bg-[#043262] flex justify-center items-center text-[#2d3f4b]">
      dfgdfgdfg
    </div>
  );
}
