"use client";
// import { useAuth } from "@/context/AuthContext";
import { useLoading } from "@/context/LoadingContext";
import { useEffect } from "react";
import CardJob from "./component/cardjob";
import CardDetail from "./component/carddetail";

export default function Board() {
  // const { token, logout } = useAuth();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]);

  return (
    <div className="min-h-[100vh] bg-[#c0eed5] not-first:text-[#2d3f4b] p-8 flex flex-col gap-8">
      <div className="text-[#043262] text-[28px] font-bold">
        ตำแหน่งงานแนะนำสำหรับคุณ
      </div>
      <div className="flex w-full gap-8">
        {/* <div></div> */}
        <CardJob />
        <CardDetail />
      </div>
    </div>
  );
}
