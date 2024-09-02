import application from './application.svg';
import apps from './apps.svg';
import heart from './heart.svg';
import likepost from './likepost.svg';
const Story = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-[20px] my-[50px]">
            <div className="w-full lg:w-[50%] relative">
                <img src={ application } className='w-[25%] bg-[#FFD4A1] ml-[30px] p-[20px] rounded-md'/>
                <img src={ apps } className='w-[40%] bg-[#FFD4A1] mt-[30px] p-[20px] rounded-md'/>
                <img src={ likepost } className='w-[50%] bg-[#FFD4A1] absolute right-[5%] top-[25%] p-[20px] rounded-md'/>
                <img src={ heart } className='w-[20%] bg-[#FFD4A1] absolute right-[30%] bottom-[-30%] p-[20px] rounded-md'/>
            </div>
            <div className='w-full lg:w-[50%] flex flex-col items-start gap-[20px]'>
                <p className="text-[40px] font-[700]">Our Story</p>
                <p className="text-[16px]">Named after the founder, Piuonoshaba Omo Rufus, PLEF was founded with a singular vision: to invest in Nigeria’s greatest asset—its youth. It started with Mr Omo-Rufus single-handedly funding academic awards for students in the Royal Ambassadors – a worldwide Baptist missionary paramilitary organisation for boys between the ages of 10 and 24 whose vision is to touch the lives of boys and impact the eternity of men – after passing through the ranks himself. </p>
                <p className="text-[16px]">Since the first award distribution in the Royal Ambassadors, the number of beneficiaries and reward categories have continued to grow to accommodate more boys and their wards, who have demonstrated their commitment to excellence in academics, vocation, teaching & parenting.</p>
                <p className="text-[16px]">The foundation was born out of a deep passion for supporting academic and vocational excellence and proving its worth. We believe we can equip the next generation with the tools and resources for youngsters to focus on excellence again. Our focus is on building capacity from the ground up—creating a culture of excellence and inspiring the next generation to dream big.</p>
            </div>
        </div>
    );
}
 
export default Story;