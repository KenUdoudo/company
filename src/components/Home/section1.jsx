const Section1 = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-y-[20px]">
            <p className="text-[38px] font-[600]">Transforming Lives Through <br /> Hope and Education</p>
            <p className="px-[80px] text-[14px] font-inter font-[500]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repudiandae numquam autem nostrum dolor maiores sapiente eaque aliquam adipisci nam quam soluta expedita dicta, voluptate vel at nisi dolores voluptates.</p>
            <div className='flex flex-row justify-center items-center gap-[4px] rounded-full px-[10px] py-[3px] bg-green-300 cursor-pointer'>
                <p className='text-[13px] font-roboto font-[500]'>Donate Now</p>
                <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-green-100'></div>
            </div>
        </div>
    );
}
 
export default Section1;