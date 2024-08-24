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
                <p className="text-[16px]">Buffer started as a Startup Sprint project in November 2010 to solve a problem our Founder and CEO Joel Gascoigne was experiencing — he wanted to space out when his tweets were sent. The idea gained hundreds of users within the first few months and eventually grew to add social networks, to go beyond purely publishing to social media into analytics, engagement, and even to building micro sites. Today, Buffer is one of the most well-known social media marketing tools serving small businesses, creators, and individuals.</p>
                <p className="text-[16px]">The Buffer team was initially just a few people working on a project they believed in, and steadily started growing after the founders joined an accelerator in August 2011. Over the next few years, Buffer teammates joined from wherever they were based as Buffer’s founders traveled and built Buffer. In 2013, we decided to commit to being a fully remote and distributed team, giving up our office space. That decision marked just one example of the Buffer team choosing our own path with how we operate as we build Buffer. We also share the whole <span className='text-[#F7941D] cursor-pointer'>team’s salaries</span>, part of our value of transparency, and our whole company works a <span className='text-[#F7941D] cursor-pointer'>four-day work week.</span></p>
                <p className="text-[16px]">All that to say, Buffer is a product built to help our customers get off the ground and grow via organic marketing, and the Buffer team is an optimistic and gratitude-filled group of remote workers scattered around the world and dedicated to creating a product our customers will use and love.</p>
            </div>
        </div>
    );
}
 
export default Story;