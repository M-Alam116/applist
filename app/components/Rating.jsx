import { AiOutlineStar } from "react-icons/ai";
export default function Rating() {
  return (
    <div className="flex flex-col gap-[1rem]">
      <h1 className="text-[20px] font-[600] text-white opacity-60 uppercase tracking-widest">
        user ratings
      </h1>
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[5px]">
          <AiOutlineStar className="text-[--pulper] text-[22px]" />
          <h1 className="text-[18px] font-[700] text-white opacity-60">5</h1>
        </div>
        <div className="bg-[--primaryColor] w-full h-[0.7rem] rounded-full">
          <div className="bg-[--pulper] w-[90%] h-full rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[5px]">
          <AiOutlineStar className="text-[--pulper] text-[22px]" />
          <h1 className="text-[18px] font-[700] text-white opacity-60">4</h1>
        </div>
        <div className="bg-[--primaryColor] w-full h-[0.7rem] rounded-full">
          <div className="bg-[--pulper] w-[50%] h-full rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[5px]">
          <AiOutlineStar className="text-[--pulper] text-[22px]" />
          <h1 className="text-[18px] font-[700] text-white opacity-60">3</h1>
        </div>
        <div className="bg-[--primaryColor] w-full h-[0.7rem] rounded-full">
          <div className="bg-[--pulper] w-[30%] h-full rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[5px]">
          <AiOutlineStar className="text-[--pulper] text-[22px]" />
          <h1 className="text-[18px] font-[700] text-white opacity-60">2</h1>
        </div>
        <div className="bg-[--primaryColor] w-full h-[0.7rem] rounded-full">
          <div className="bg-[--pulper] w-[10%] h-full rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[5px]">
          <AiOutlineStar className="text-[--pulper] text-[22px]" />
          <h1 className="text-[18px] font-[700] text-white opacity-60">1</h1>
        </div>
        <div className="bg-[--primaryColor] w-full h-[0.7rem] rounded-full">
          <div className="bg-[--pulper] w-[5%] h-full rounded-full"></div>
        </div>
      </div>
    </div>
  );
}