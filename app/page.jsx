import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Card from "./components/Card";
import { appsData } from "./data/data";
export default function Home() {
  return (
    <div className="pb-[3rem]">
      {/* ============== Search Bar ============ */}
      <div className="bg-[--secondaryColor] w-full flex flex-col items-center py-[2rem] gap-[5px] mb-[2rem]">
        <div className="">
          <Image src="/images/logo.png" width={100} height={50} alt="logo" />
        </div>
        <h1 className="text-[--primaryColor] text-[32px] font-[900]">
          UFO TWERK
        </h1>
        <div className="flex items-center gap-[1rem] bg-[--primaryColor] rounded-full py-[1rem] px-[2rem]">
          <FaSearch className="text-[--pulper]" />
          <input
            type="text"
            placeholder="Search for apps..."
            className="bg-transparent h-full outline-none border-none text-white placeholder:text-[--pulper]"
          />
        </div>
      </div>

      {/* ============= apps list ================ */}
      <div className="container flex flex-wrap justify-center gap-[1.5rem]">
        {appsData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
