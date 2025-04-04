import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
    "/awardprogram/image (1).jpg",
    "/awardprogram/image (2).jpg",
    "/awardprogram/image (3).jpg",
    "/awardprogram/image (4).jpg",
    "/awardprogram/image (5).jpg",
    "/awardprogram/image (6).jpg",
    "/awardprogram/image (7).jpg",
    "/awardprogram/image (8).jpg",
    "/awardprogram/image (9).jpg",
    "/awardprogram/image (10).jpg",
    "/awardprogram/image (11).jpg",
    "/awardprogram/image (12).jpg",
    "/awardprogram/image (13).jpg",
    "/awardprogram/image (14).jpg",
    "/awardprogram/image (15).jpg",
    "/awardprogram/image (16).jpg",
    "/awardprogram/image (17).jpg",
    "/awardprogram/image (18).jpg",
    "/awardprogram/image (19).jpg",
    "/awardprogram/image (20).jpg",
    "/awardprogram/image (21).jpg",
    "/awardprogram/image (22).jpg",
    "/awardprogram/image (23).jpg",
    "/awardprogram/image (24).jpg",
    "/awardprogram/image (25).jpg",
    "/awardprogram/image (26).jpg",
    "/awardprogram/image (27).jpg",
    "/awardprogram/image (28).jpg",
    "/awardprogram/image (29).jpg",
    "/awardprogram/image (30).jpg",
    "/awardprogram/image (31).jpg",
    "/awardprogram/image (32).jpg",
    "/awardprogram/image (33).jpg",
    "/awardprogram/image (34).jpg",
    "/awardprogram/image (35).jpg",
    "/awardprogram/image (36).jpg",
    "/awardprogram/image (37).jpg",
    "/awardprogram/image (38).jpg",
    "/awardprogram/image (39).jpg",
];

const Secondgallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleDownload = (image) => {
        const link = document.createElement("a");
        link.href = image;
        link.download = image.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="p-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        className="cursor-pointer rounded-lg shadow-md hover:shadow-xl transition duration-200"
                        onClick={() => {
                            setPhotoIndex(index);
                            setIsOpen(true);
                        }}
                    />
                ))}
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                    toolbarButtons={[
                        <button
                            key="download"
                            onClick={() => handleDownload(images[photoIndex])}
                            className="bg-blue-500 text-white px-2 py-2 rounded-md mt-[30px]"
                        >
                            Download
                        </button>,
                    ]}
                />
            )}
        </div>
    );
};

 
export default Secondgallery;