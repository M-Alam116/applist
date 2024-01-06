import Image from "next/image";
import Rating from "../components/Rating";
import Review from "../components/Review";
export default function AppDetailsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[url(/images/bg1.jpg)] bg-cover bg-no-repeat bg-top object-cover h-[20rem] md:h-[25rem] mb-[-2rem]"></div>
      <div className="px-[20px] flex flex-col gap-[3rem] py-[3rem] bg-[--secondaryColor] w-full rounded-t-[2rem]">
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[28px] font-[700] text-white">
            Nulls Clash v15.547.8
          </h1>
          <p className="text-[16px] font-[500] text-white opacity-60">
            Clash of Clans is a real-time strategy game that combines many
            complex elements, such as building, defending, and deploying squads.
            Each detail makes an immense contribution to this game and gradually
            creates new gameplay, giving players a lot of amusement and
            stimulation even if they become late-game players. Above all, clans
            are the most prominent content, where everyone is hilarious and
            create many great moments together on the vast battlefields.
          </p>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-[2rem]">
          <div className="flex items-center gap-[1rem]">
            <Image src="/images/applogo.jpg" width={70} height={70} alt="" />
            <div className="flex flex-col gap-[1.5rem]">
              <h2 className="text-[16px] font-[500] text-[--pulper] uppercase">
                mobile edition
              </h2>
              <h2 className="text-[16px] font-[500] text-white opacity-60 uppercase">
                android & ios
              </h2>
            </div>
          </div>
          <button className="flex mx-auto sm:mx-0 text-[14px] font-[700] text-white uppercase bg-[--pulper] p-[15px] rounded-full w-fit">
            install
          </button>
        </div>

        <Rating />
        <Review />
      </div>
    </div>
  );
}
