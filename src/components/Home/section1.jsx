import { HiArrowUpRight } from "react-icons/hi2";
import { IoIosSunny } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
const Section1 = () => {
  return (
    <div className="mt-[40px]">
      <div className="flex flex-col justify-center items-center text-center gap-y-[20px]">
        <p className="text-[38px] font-[600]">
          Incentivizing Academic Excellence <br className="hidden md:block" /> &
          Capacity Building
        </p>
        <p className="px-[80px] text-[14px]">
          PLEF is incentivizing academic & vocational excellence to build the
          capacity of Nigerian Youths.
        </p>
        <div className="flex flex-row justify-center items-center gap-[4px] rounded-full px-[13px] py-[10px] bg-[#F7941D] cursor-pointer mt-[10px]">
          <p className="text-[13px] font-[500]">Join the movement</p>
          <div className="h-[25px] w-[25px] rounded-full border-[1px] bg-[#FFD4A1] flex justify-center items-center">
            <HiArrowUpRight />
          </div>
        </div>
      </div>

      <div className="mt-[30px] md:mt-0 px-[20px] lg:px-[50px] gap-x-[20px] flex flex-col md:flex-row justify-center items-center md:h-[500px]">
        <div className="w-[90%] md:w-[25%] h-[300px] md:h-[350px] gap-[5px] flex flex-col justify-normal items-center">
          <div className="h-[60%] lg:h-[80%] w-full border-[2px] bg-[#FFD4A1] rounded-md"></div>
          <div className="h-[20%] w-full">
            <div className="flex flex-row justify-start items-center gap-[4px] rounded-full px-[7px] py-[7px] bg-gray-100 cursor-pointer">
              <div className="h-[35px] w-[35px] rounded-full border-[1px] bg-[#F7941D] flex justify-center items-center">
                <HiSparkles />
              </div>
              <p className="text-[13px] font-roboto font-[500]">
                Rekindling Excellence
              </p>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[25%] md:h-[350px] flex flex-col-reverse md:flex-col justify-normal items-center gap-[10px] mt-[0px] md:mt-[40px] lg:mt-[260px]">
          <div className="w-full flex flex-row justify-start items-center gap-[4px] rounded-full px-[10px] py-[7px] bg-gray-100">
            <p className="text-[13px] text-nowrap">
              Unlocking the Nigerian Youth potential.
            </p>
          </div>
          <div className="bg-[#FFD4A1] rounded-md px-[20px] py-[15px]">
            <p className="text-[28px] font-semibold">70%</p>
            <p className="text-[13px]">
              of Nigerians are youths but plagued with high levels of
              unemployment, poor education, lack of resources.
            </p>
          </div>
        </div>

        <div className="w-[90%] md:w-[25%] h-[290px] lg:h-[350px] flex flex-col justify-normal items-center gap-[10px] mt-[50px] md:mt-[3%] lg:mt-[5%]">
          <div className="h-[73%] w-full bg-[#FFD4A1] rounded-md flex flex-col justify-center items-center text-center px-[20px] py-[20px]">
            <div className="h-[50px] w-[50px] flex justify-center items-center">
              <IoIosSunny className="h-[35px] w-[35px]" />
            </div>
            <p className="font-semibold pt-[20px]">Invest in the Youth.</p>
            <p className="text-[13px]">
              Empower the passionate youngsters to fulfill their dreams.
              Activate local human capital.
            </p>
          </div>
          <div className="flex flex-row justify-center items-center space-x-1 rounded-full px-[7px] py-[7px] bg-gray-100 w-full">
            <p className="text-[13px]">Invest in the Youth</p>
            <HiArrowUpRight />
          </div>
        </div>

        <div className="w-[90%] md:w-[25%] h-[300px] lg:h-[400px] flex flex-col-reverse md:flex-col justify-normal items-center gap-[10px]">
          <div className="flex flex-row justify-center items-center space-x-1 rounded-full px-[7px] py-[7px] bg-gray-100 w-full">
            <p className="text-[13px]">Spark up Nigeria.</p>
            <HiArrowUpRight />
          </div>
          <div className="h-[75%] w-full bg-[#FFD4A1] rounded-md flex flex-col justify-center text-[13px] px-[20px] md:px-[10px] lg:px-[25px] py-[10px]">
            <div className="h-[55%] w-full bg-[#F7941D] rounded-md"></div>
            <p className="pt-[15px] font-semibold">Ignite the minds</p>
            <p>of Nigerians to exhume its buried potential.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
