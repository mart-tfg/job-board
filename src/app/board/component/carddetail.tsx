"use client";
import { useLoading } from "@/context/LoadingContext";
import { useEffect } from "react";
import { useGlobalComponent } from "@/providers/GlobalComponents";

export default function CardDetail() {
  const {
    // Button,
    // Input,
    // Label,
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
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]);

  return (
    <div className=" w-[100%] md:block hidden">
      <Card className=" h-[90vh]">
        <CardHeader>
          <CardTitle>
            Software Developer (Web/Mobile/Back-End/Full Stack)
          </CardTitle>
          <CardDescription>
            Playtorium Solutions Company Limited
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            บริษัท เพลย์ทอเรียม โซลูชันส์ จำกัด เป็นผู้ให้บริการด้าน Digital
            Platform และเป็น Digital Transformation Partner ที่มีความชำนาญด้าน
            Software Development, Software Testing และ Data Integration and
            Analytics พร้อมด้วยทีมงานที่มีศักยภาพและประสบการณ์ อย่างทีม
            Data/BI/AI Engineers สำหรับการตัดสินใจเชิงธุรกิจ
          </p>
        </CardContent>
        <CardFooter>
          <p>8 วันที่ผ่านมา</p>
        </CardFooter>
      </Card>
    </div>
  );
}
