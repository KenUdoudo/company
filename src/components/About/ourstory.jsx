import group1 from './Four.png';
import group2 from './Three.png';
import rufos from './Two.png';
import emma from './One.png';
const Story = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-[20px] my-[50px]">
            <div className="w-full lg:w-[50%] relative">
                <img src={ group1 } className='w-[35%] ml-[30px] rounded-md'/>
                <img src={ group2 } className='w-[45%] mt-[30px] rounded-md'/>
                <img src={ emma } className='w-[50%] absolute right-[0%] top-[25%] rounded-md'/>
                <img src={ rufos } className='w-[40%] absolute right-[10%] bottom-[-40%] rounded-md'/>
            </div>
            <div className='w-full lg:w-[50%] flex flex-col items-start gap-[20px]'>
                <p className="text-[40px] font-[700]"><span className="italic font-[400] ">Our</span> Story</p>
                <p className="text-[16px]">Formerly named Rufus Aid, now named after the founder, Piuonoshaba Omo Rufus, PLEF was founded with a singular vision: to invest in Nigeria’s greatest asset—its youth. It started with Mr Omo-Rufus single-handedly funding academic awards for students in the Royal Ambassadors – a worldwide Baptist missionary paramilitary organisation for boys between the ages of 10 and 24 whose vision is to touch the lives of boys and impact the eternity of men – after passing through the ranks himself.</p>
                <p className="text-[16px]">Since the first awards distribution in 2019, to over 10 boys in the Royal Ambassadors, the number of beneficiaries and reward categories have continued to grow to accommodate more boys and their wards, who have demonstrated their commitment to excellence in academics, vocation, teaching & parenting.</p>
                <p className="text-[16px]">The foundation was born from a deep passion for supporting academic and vocational excellence and proving its worth. We can equip the next generation with the tools and resources for youngsters to focus on excellence again. We focus on building capacity from the ground up—creating a culture of excellence and inspiring the next generation to dream big.</p>
            </div>
        </div>
    );
}
 
export default Story;