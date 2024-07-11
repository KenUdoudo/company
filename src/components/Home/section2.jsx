const Section2 = () => {
  return (
    <div className=" mt-[50px]">
      <div className="text-center">
        <p className="text-[28px] font-semibold">
          Building The Nigerian capacity
        </p>
        <p className="text-[13px]">
          Our human resources exceeds our natural resources and they lay dormant
          awaiting exploration.
        </p>
      </div>

      <div className="flex flex-row justify-center px-[20px] lg:px-[50px] mt-[30px]">
        <div className="border-[2px] rounded-l-[15px] flex flex-col justify-center items-center text-center bg-gray-100 gap-[5px] px-[20px] py-[20px]">
          <p className="text-[20px] md:text-[28px] font-semibold bg-[#E9E9E9] px-[15px] rounded-md">
            67%
          </p>
          <p className="text-[8px] md:text-[13px]">
            of entrepreneurs are youths
          </p>
        </div>
        <div className="border-[2px] flex flex-col justify-center items-center text-center bg-gray-100 gap-[5px] px-[20px] py-[20px]">
          <p className="text-[20px] md:text-[28px] font-semibold bg-[#E9E9E9] px-[15px] rounded-md">
            80%
          </p>
          <p className="text-[8px] md:text-[13px]">
            Of Nigerian Youths are tech-Savvy
          </p>
        </div>
        <div className="border-[2px] rounded-r-[15px] flex flex-col justify-center items-center text-center bg-gray-100 gap-[5px] px-[20px] py-[20px]">
          <p className="text-[20px] md:text-[28px] font-semibold bg-[#E9E9E9] px-[15px] rounded-md">
            68%
          </p>
          <p className="text-[8px] md:text-[13px]">
            completed secondary education
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
