import Image from "next/image";
import { LuDownload } from "react-icons/lu";
import { BsLightningChargeFill } from "react-icons/bs";
export default function Card({ data }) {
  const { name, image, type, version, size } = data;
  return (
    <div className="w-full max-w-[200px] flex flex-col justify-between rounded-[1rem] p-[1rem] bg-[--secondaryColor] group cursor-pointer">
      <div className="">
        <div className="flex items-center gap-[5px] mb-[5px]">
          <span className="w-[8px] h-[8px] rounded-full bg-[--pulper]"></span>
          <p className="uppercase text-[12px] font-[400] text-[--pulper] tracking-wide">
            updated
          </p>
        </div>
        <div className="flex flex-col items-center gap-[1rem]">
          <div className="relative flex justify-center">
            <Image
              src={image}
              width={150}
              height={150}
              alt=""
              className="rounded-[15px] group-hover:scale-105 transition-all duration-300"
            />
            <span className="uppercase text-[12px] font-[600] bg-[--pulper] text-white py-[5px] px-[10px] rounded-full absolute bottom-[-12px]">
              mod
            </span>
          </div>
          <h1 className="text-[16px] font-[500] text-white opacity-60 tracking-wide text-center">
            {name}
          </h1>
          <p className="text-[12px] font-[400] text-white tracking-wide text-center">
            {type}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-[3rem]">
        <div className="flex flex-col items-center gap-[5px]">
          <BsLightningChargeFill className="text-[--pulper] text-[20px]" />
          <p className="text-[10px] font-[400] text-white">{version}</p>
        </div>
        <div className="w-[2px] h-[3rem] bg-white opacity-40"></div>
        <div className="flex flex-col items-center gap-[5px]">
          <LuDownload className="text-[--pulper] text-[20px]" />
          <p className="text-[10px] font-[400] text-white">{size}</p>
        </div>
      </div>
    </div>
  );
}
