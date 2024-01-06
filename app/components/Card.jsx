import Image from "next/image";
import { LuDownload } from "react-icons/lu";
import { BsLightningChargeFill } from "react-icons/bs";
import Link from "next/link";
export default function Card({ data }) {
  const { name, image, description, version, size, id } = data;
  return (
    <Link
      href={`/${id}`}
      className="w-full sm:max-w-[300px] flex justify-between"
    >
      <div
        className="w-full sm:max-w-[300px] flex flex-col justify-between rounded-[1rem] pt-[1rem] group cursor-pointer"
        style={{
          background:
            "linear-gradient(90deg,#1b121d 0,#120f2f 50%,#1b121d 100%)",
        }}
      >
        <div className="">
          <div className="flex items-center gap-[5px] mb-[5px] pl-[1rem]">
            <span className="w-[8px] h-[8px] rounded-full bg-[--pulper]"></span>
            <p className="uppercase text-[10px] sm:text-[14px] font-[400] text-[--pulper] tracking-wide">
              updated
            </p>
          </div>
          <div className="flex flex-col items-center gap-[1rem] px-[1rem]">
            <div className="relative flex justify-center">
              <Image
                src={image}
                width={200}
                height={200}
                alt=""
                className="rounded-[15px] group-hover:scale-105 transition-all duration-300 w-full sm:w-[200px] sm:h-[200px] object-cover"
              />
              <span className="uppercase text-[10px] sm:text-[12px] font-[600] bg-[--pulper] text-white py-[5px] px-[10px] rounded-full absolute bottom-[-12px]">
                mod
              </span>
            </div>
            <h1 className="text-[14px] sm:text-[16px] font-[500] text-white opacity-60 tracking-wide text-center">
              {name}
            </h1>
            <p className="text-[10px] sm:text-[12px] font-[400] text-white opacity-60">
              {description.substring(0, 150)}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-[3rem] bg-[#201629] items-center p-[12px]">
          <div className="flex flex-col items-center gap-[5px]">
            <BsLightningChargeFill className="text-[--pulper] text-[20px]" />
            <p className="text-[8px] sm:text-[10px] font-[400] text-white">
              {version}
            </p>
          </div>
          <div className="flex flex-col items-center gap-[5px]">
            <LuDownload className="text-[--pulper] text-[20px]" />
            <p className="text-[8px] sm:text-[10px] font-[400] text-white">
              {size}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
