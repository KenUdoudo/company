const Metrics = () => {
    return (
        <div className="mt-[100px] md:mt-[180px] lg:mt-[80px]">
            <p className="text-[30px] md:text-[40px] font-[700] text-center"><span className="italic font-[400] ">Our</span> Achievements</p>
            <p className="text-center md:px-[90px]">We’ve taken a few steps to empower the youth & drive positive change and there’ll
            be more.</p>

            <div className="flex flex-col md:flex-row justify-center mt-[30px] gap-[20px]">
                <div className="flex flex-row md:flex-col gap-[20px] md:gap-[10px] p-[20px] w-full md:w-[30%] bg-[#d0e3ff] rounded-[25px] items-center">
                    <p className="text-[30px] font-[600]">100+ Student Awards</p>
                    <div className="flex flex-col gap-[10px]">
                    <p className="text-[20px] font-[400]">Awarded to students in both academic and vocational fields, supporting their educational journey.</p></div>
                </div>
                <div className="flex flex-row md:flex-col gap-[20px] md:gap-[10px] p-[20px] w-full md:w-[30%] bg-[#ffd7e3] rounded-[25px] items-center">
                    <p className="text-[30px] font-[600]">10+ Teacher Awards</p>
                    <div className="flex flex-col gap-[10px]">
                    <p className="text-[20px] font-[400]">Recognized & rewarded top teachers across some select schools in Nigeria.</p></div>
                </div>
                <div className="flex flex-row md:flex-col gap-[20px] md:gap-[10px] p-[20px] w-full md:w-[30%] bg-[#ead8fc] rounded-[25px] items-center">
                    <p className="text-[30px] font-[600]">50 Widows Supported</p>
                    <div className="flex flex-col gap-[10px]">
                    <p className="text-[20px] font-[400]">Recognize single mothers/guardians for their diligent efforts in raising & guiding their wards.</p></div>
                </div>
            </div>
        </div>
    );
}
 
export default Metrics;