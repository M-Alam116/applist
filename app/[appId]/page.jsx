"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Rating from "../components/Rating";
import Review from "../components/Review";
import Loader from "../components/Loader";
import { appsData } from "../data/data";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

export default function AppDetailsPage({ params }) {
  const [loading, setLoading] = useState(false);

  const { appId } = params;
  const data = appsData.find((app) => app.id === parseInt(appId));

  const handleInstallClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Redirect to google.com
      window.location.href = "https://www.google.com";
    }, 5000);
  };

  useEffect(() => {
    if (!loading) {
    }
  }, [loading]);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="bg-cover bg-no-repeat bg-top object-cover h-[20rem] md:h-[25rem] mb-[-2rem]"
        style={{ backgroundImage: `url(${data.bigImage})` }}
      ></div>
      <Link href="/">
        <div className="bg-[#5e5964] w-[40px] h-[40px] rounded-full fixed z-10 top-[1rem] right-[1rem] flex items-center justify-center">
          <RxCross2 className="text-[24px] text-white font-[900]" />
        </div>
      </Link>
      <div className="px-[20px] flex flex-col gap-[3rem] py-[3rem] bg-[--secondaryColor] w-full rounded-t-[2rem]">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[28px] font-[700] text-white">{data.name}</h1>
          <p className="text-[16px] font-[500] text-white opacity-60">
            {data.description}
          </p>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-[2rem]">
          <div className="flex items-center gap-[1rem]">
            <Image src="/images/applogo.jpg" width={70} height={70} alt="" />
            <div className="flex flex-col gap-[5px]">
              <h2 className="text-[14px] font-[500] text-[--pulper] uppercase">
                mobile edition
              </h2>
              <h1 className="text-[18px] font-[600] text-white">{data.name}</h1>
              <h2 className="text-[14px] font-[500] text-white opacity-60 uppercase">
                android & ios
              </h2>
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <button
              className="flex mx-auto sm:mx-0 text-[14px] font-[700] text-white uppercase bg-[--pulper] p-[15px] rounded-full w-fit"
              onClick={handleInstallClick}
            >
              install
            </button>
          )}
        </div>

        <Rating />
        <Review />
      </div>
    </div>
  );
}
