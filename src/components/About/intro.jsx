import intro from './website.svg'

const Intro = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-[20px] mt-[40px]">
            <div className="flex flex-col items-start gap-[25px]">
                <p className="text-[30px] md:text-[40px] text-center md:text-left">Hey! <br /><span className="font-[700]">Welcome to PLEF! 😊</span> </p>
                <p className="text-[20px] text-center md:text-left">What&apos;s PLEF? It&apos;s short for Piuonoshaba Life Empowerment Foundation. </p>
                <p className="text-[20px] text-center md:text-left">The foundation is committed to empowering Nigerian youths through life to make them truly become the leaders of tomorrow! </p>
            </div>
            <img src={ intro } className='w-full md:w-[40%] lg:w-[50%]'/>
        </div>
    );
}
 
export default Intro;