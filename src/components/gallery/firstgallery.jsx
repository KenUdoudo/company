import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
    "/christmasphotos/image (1).jpg",
    "/christmasphotos/image_(2).jpg",
    "/christmasphotos/image (3).jpg",
    "/christmasphotos/image (4).jpg",
    "/christmasphotos/image (5).jpg",
    "/christmasphotos/image (6).jpg",
    "/christmasphotos/image (7).jpg",
    "/christmasphotos/image (8).jpg",
    "/christmasphotos/image (9).jpg",
    "/christmasphotos/image (10).jpg",
    "/christmasphotos/image (11).jpg",
    "/christmasphotos/image (12).jpg",
    "/christmasphotos/image (13).jpg",
    "/christmasphotos/image (14).jpg",
    "/christmasphotos/image (15).jpg",
    "/christmasphotos/image (16).jpg",
    "/christmasphotos/image (17).jpg",
    "/christmasphotos/image (18).jpg",
    "/christmasphotos/image (19).jpg",
    "/christmasphotos/image (20).jpg",
    "/christmasphotos/image (21).jpg",
    "/christmasphotos/image (22).jpg",
    "/christmasphotos/image (23).jpg",
    "/christmasphotos/image (24).jpg",
    "/christmasphotos/image (25).jpg",
    "/christmasphotos/image (26).jpg",
    "/christmasphotos/image (27).jpg",
    "/christmasphotos/image (28).jpg",
    "/christmasphotos/image (29).jpg",
    "/christmasphotos/image (30).jpg",
    "/christmasphotos/image (31).jpg",
    "/christmasphotos/image (32).jpg",
    "/christmasphotos/image (33).jpg",
    "/christmasphotos/image (34).jpg",
    "/christmasphotos/image (35).jpg",
    "/christmasphotos/image (36).jpg",
    "/christmasphotos/image (37).jpg",
    "/christmasphotos/image (38).jpg",
    "/christmasphotos/image (39).jpg",
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