import intro from './website.svg'

const Intro = () => {
    return (
        <div className="flex justify-between items-center gap-[20px] mt-[40px]">
            <div className="flex flex-col items-start gap-[25px]">
                <p className="text-[40px]">Hey! <br /><span className="font-[700]">We&apos;re PLEFoundation 😊</span> </p>
                <p className="text-[20px]">We&apos;re an optimistic and gratitude-filled group of remote workers scattered around the world and dedicated to creating a product our customers will use and love.</p>
                <p className="text-[20px]">Read on to learn more about Buffer’s story and history and see the full Buffer team.</p>
            </div>
            <img src={ intro }/>
        </div>
    );
}
 
export default Intro;