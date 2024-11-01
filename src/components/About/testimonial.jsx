const Testimonial = () => {
    return (
        <div className="mt-[60px]">
            <p className="text-[40px] font-[700] text-center">Testimonials</p>

            <div className="flex flex-col md:flex-row justify-center mt-[20px] gap-[20px]">
                <p className="text-[20px] font-[600] w-full md:w-[50%]"><span className="italic font-[400] ">As a two-time beneficiary of the foundation programs, I’ve felt and seen the positive impact that PLEF can bring about with just a little recognition & reward to people who’ve been starved of it.</span> – Egbon Cedric</p>
                <p className="text-[20px] font-[600] w-full md:w-[50%]"><span className="italic font-[400] ">It has been a pleasure to be a two-time beneficiary of the Piunoshaba Life Empowerment Foundation. The academic support aid I received not only empowered me but also gave me the confidence to pursue my academic goals with renewed determination. I am deeply grateful to the foundation for their unwavering support and for making a significant impact on my educational journey. </span> – Okagbare Emmanuel</p>

            </div>
        </div>
    );
}
 
export default Testimonial;