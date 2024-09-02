const Mission = () => {
    return (
        <div className="mt-[100px] md:mt-[180px] lg:mt-[130px]">
            <p className="text-[40px] font-[700]">Our Mission & Vision</p>

            <div className="flex flex-col md:flex-row justify-center mt-[20px] gap-[20px]">
                <div className="flex flex-col items-start w-full md:w-[50%] p-[20px] gap-[20px] rounded-[25px] bg-[#e9e9e9]">
                    <p className="text-[25px] font-[700]">Vision</p>
                    <p>A self-reliant Nigeria where every young person is empowered to dream big, innovate, and become a catalyst for national and global transformation. To be the driving force behind the development of globally competitive leaders and professionals who will shape the future of our nation.</p>
                </div>
                <div className="flex flex-col items-start w-full md:w-[50%] p-[20px] gap-[20px] rounded-[25px] bg-[#e9e9e9]">
                    <p className="text-[25px] font-[700]">Mission</p>
                    <p>Empower Nigerian youth, via incentives & community, to achieve academic and vocational excellence, fostering a culture of excellence, innovation, entrepreneurship, and lifelong learning. We are committed to enhancing access to education, building a stronger vocational training ecosystem, and recognizing the efforts of those who strive for excellence.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Mission;