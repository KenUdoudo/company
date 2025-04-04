import { Link } from "react-router-dom";

const GalleryOptions = () => {
    return (
        <div className="mt-[20px]">
            <p className="text-[40px] font-[700]">Gallery</p>

            <div className="flex flex-col w-full px-[20px] mt-[30px] gap-[20px]">
                <Link to="/plefoundationawardprogram"> <p className="border-4 pl-[10px] text-[19px] border-[#F7941D] font-[600] py-[10px] hover:bg-[#F7941D] hover:text-white">PLEF Foundation Award Program</p></Link>
                <Link to="/christmasprogramphotos"> <p className="border-4 pl-[10px] text-[19px] border-[#F7941D] font-[600] py-[10px] hover:bg-[#F7941D] hover:text-white">Christmas Program</p></Link>
            </div>
        </div>
    );
}
 
export default GalleryOptions;