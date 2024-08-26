const Metrics = () => {
    return (
        <div className="mt-[80px]">
            <p className="text-[30px] md:text-[40px] font-[700] text-center">We are an <span className="italic font-[400] ">Open</span> Company</p>
            <p className="text-center md:px-[90px]">Since 2013, we&apos;ve been open with Buffer&apos;s finances and our team&apos;s salaries, among many other metrics. We share openly because we believe in the power of transparency to build trust, hold us accountable to a high standard, and push our industry forward.</p>

            <div className="flex justify-center mt-[30px] gap-[20px]">
                <div className="flex flex-col gap-[10px] p-[20px] w-[30%] bg-[#d0e3ff] rounded-[25px]">
                    <p className="text-[30px] font-[600]">$1.58M</p>
                    <div className="flex flex-col gap-[10px]">
                    <p className="text-[20px] font-[600]">MRR</p>
                    <p className="text-[20px] font-[400]">Monthly Recurring Revenue</p></div>
                </div>
                <div className="flex flex-col gap-[10px] p-[20px] w-[30%] bg-[#ffd7e3] rounded-[25px]">
                    <p className="text-[30px] font-[600]">148,310</p>
                    <div className="flex flex-col gap-[10px]">
                    <p className="text-[20px] font-[600]">MAU</p>
                    <p className="text-[20px] font-[400]">Monthly Active Users</p></div>
                </div>
                <div className="flex flex-col gap-[10px] p-[20px] w-[30%] bg-[#d0e3ff] rounded-[25px]">
                    <p className="text-[30px] font-[600]">$18</p>
                    <div className="flex flex-col gap-[10px]">
                    <p className="text-[20px] font-[600]">MRR</p>
                    <p className="text-[20px] font-[400]">Monthly Recurring Revenue</p></div>
                </div>
            </div>
        </div>
    );
}
 
export default Metrics;