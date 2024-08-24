import intro from './website.svg'

const Intro = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-[20px] mt-[40px]">
            <div className="flex flex-col items-start gap-[25px]">
                <p className="text-[30px] md:text-[40px] text-center md:text-left">Hey! <br /><span className="font-[700]">We&apos;re PLEFoundation 😊</span> </p>
                <p className="text-[20px] text-center md:text-left">We&apos;re an optimistic and gratitude-filled group of remote workers scattered around the world and dedicated to creating a product our customers will use and love.</p>
                <p className="text-[20px] text-center md:text-left">Read on to learn more about Buffer’s story and history and see the full Buffer team.</p>
            </div>
            <img src={ intro } className='w-full md:w-[40%] lg:w-[50%]'/>
        </div>
    );
}
 
export default Intro;