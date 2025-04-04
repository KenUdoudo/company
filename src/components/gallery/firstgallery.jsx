import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
    "/christmasphotos/Image1.jpg",
    "/christmasphotos/Image2.jpg",
    "/christmasphotos/Image3.jpg",
    "/christmasphotos/Image4.jpg",
    "/christmasphotos/Image5.jpg",
    "/christmasphotos/Image6.jpg",
    "/christmasphotos/Image7.jpg",
    "/christmasphotos/Image8.jpg",
    "/christmasphotos/Image9.jpg",
];

const Firstgallery = () => {
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

 
export default Firstgallery;