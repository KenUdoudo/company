import application from './application.svg';
import apps from './apps.svg';
import heart from './heart.svg';
import likepost from './likepost.svg';
const Story = () => {
    return (
        <div className="flex justify-between items-start gap-[20px] mt-[20px]">
            <div className="w-[50%] relative">
                <img src={ application } className='w-[25%] bg-[#FFD4A1] ml-[30px] p-[20px] rounded-md'/>
                <img src={ apps } className='w-[40%] bg-[#FFD4A1] mt-[30px] p-[20px] rounded-md'/>
                <img src={ likepost } className='w-[50%] bg-[#FFD4A1] absolute right-[5%] top-[25%] p-[20px] rounded-md'/>
                <img src={ heart } className='w-[20%] bg-[#FFD4A1] absolute right-[30%] bottom-[-30%] p-[20px] rounded-md'/>
            </div>
        </div>
    );
}
 
export default Story;