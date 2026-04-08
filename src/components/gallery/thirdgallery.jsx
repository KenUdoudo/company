import { useState } from "react";
import Modal from "react-modal";

const mediaItems = [
  "/back2school/image (1).jpg",
  "/back2school/image (2).jpg",
  "/back2school/image (3).jpg",
  "/back2school/image (4).jpg",
  "/back2school/image (5).jpg",
  "/back2school/image (6).jpg",
  "/back2school/image (7).jpg",
  "/back2school/image (8).jpg",
  "/back2school/image (9).jpg",
  "/back2school/image (10).jpg",
  "/back2school/image (11).jpg",
  "/back2school/image (12).jpg",
  "/back2school/image (13).jpg",
  "/back2school/image (14).jpg",
  "/back2school/image (15).jpg",
  "/back2school/image (16).jpg",
  "/back2school/image (17).jpg",
  "/back2school/image (18).jpg",
  "/back2school/image (19).jpg",
  "/back2school/image (20).jpg",
  "/back2school/image (21).jpg",
  "/back2school/image (22).jpg",
  "/back2school/image (23).jpg",
  "/back2school/image (24).jpg",
  "/back2school/image (25).jpg",
  "/back2school/image (26).jpg",
  "/back2school/image (27).jpg",
  "/back2school/image (28).jpg",
  "/back2school/image (29).jpg",
  "/back2school/image (30).jpg",
  "/back2school/image (31).jpg",
  "/back2school/image (32).jpg",
  "/back2school/image (33).jpg",
  "/back2school/image (34).jpg",
  "/back2school/image (35).jpg",
  "/back2school/image (36).jpg",
  "/back2school/image (37).jpg",
  "/back2school/image (38).jpg",
  "/back2school/image (39).jpg",
  "/back2school/image (39).jpg",
"/back2school/image (40).jpg",
"/back2school/image (41).jpg",
"/back2school/image (42).jpg",
"/back2school/image (43).jpg",
"/back2school/image (44).jpg",
"/back2school/image (45).jpg",
"/back2school/image (46).jpg",
"/back2school/image (47).jpg",
"/back2school/image (48).jpg",
"/back2school/image (49).jpg",
"/back2school/image (50).jpg",
"/back2school/image (51).jpg",
"/back2school/image (52).jpg",
"/back2school/image (53).jpg",
"/back2school/image (54).jpg",
"/back2school/image (55).jpg",
"/back2school/image (56).jpg",
"/back2school/image (57).jpg",
"/back2school/image (58).jpg",
"/back2school/image (59).jpg",
"/back2school/image (60).jpg",
"/back2school/image (61).jpg",
"/back2school/image (62).jpg",
"/back2school/image (63).jpg",
"/back2school/image (64).jpg",
"/back2school/image (65).jpg",
"/back2school/image (66).jpg",
"/back2school/image (67).jpg",
"/back2school/image (68).jpg",
"/back2school/image (69).jpg",
"/back2school/image (70).jpg",
"/back2school/image (71).jpg",
"/back2school/image (72).jpg",
"/back2school/image (73).jpg",
"/back2school/image (74).jpg",
"/back2school/image (75).jpg",
"/back2school/image (76).jpg",
"/back2school/image (77).jpg",
"/back2school/image (78).jpg",
"/back2school/image (79).jpg",
"/back2school/image (80).jpg",
"/back2school/image (81).jpg",
"/back2school/image (82).jpg",
"/back2school/image (83).jpg",
"/back2school/image (84).jpg",
"/back2school/image (85).jpg",
"/back2school/image (86).jpg",
  "/back2school/video (1).mp4",
  "/back2school/video (2).mp4",
  "/back2school/video (3).mp4",
  "/back2school/video (4).mp4",
  "/back2school/video (5).mp4",
];

const isVideo = (url) => url.match(/\.(mp4|webm|ogg)$/i);
Modal.setAppElement("#root");

const Thirdgallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);

  const images = mediaItems.filter((item) => !isVideo(item));
  const videos = mediaItems.filter((item) => isVideo(item));
  const allMedia = [...images, ...videos];

  const handleDownload = (media) => {
    const link = document.createElement("a");
    link.href = media;
    link.download = media.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const nextMedia = () =>
    setMediaIndex((mediaIndex + 1) % allMedia.length);
  const prevMedia = () =>
    setMediaIndex((mediaIndex + allMedia.length - 1) % allMedia.length);

  return (
    <div className="p-5 space-y-10">
      {/* Image Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Back to School Photos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setMediaIndex(index);
                setIsOpen(true);
              }}
            >
              <img
                src={src}
                alt={`Media ${index + 1}`}
                loading="lazy"
                className="w-full rounded-lg shadow-md hover:shadow-xl transition duration-200"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Back to School Videos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((src, index) => {
            const fullIndex = images.length + index; // offset into allMedia
            return (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  setMediaIndex(fullIndex);
                  setIsOpen(true);
                }}
              >
                <video
                  src={src}
                  className="w-full rounded-lg shadow-md"
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        contentLabel="Media Viewer"
        className="fixed inset-0 flex items-center justify-center outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-40"
      >
        <div
          className="relative max-w-[90%] max-h-[90%] bg-black p-4 rounded-lg z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full p-2 text-xl z-50"
          >
            &times;
          </button>

          {isVideo(allMedia[mediaIndex]) ? (
            <video
              src={allMedia[mediaIndex]}
              controls
              autoPlay
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          ) : (
            <img
              src={allMedia[mediaIndex]}
              alt=""
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          )}

          <div className="flex justify-between mt-4 text-white">
            <button onClick={prevMedia} className="px-4 py-2 bg-gray-700 rounded">
              Previous
            </button>
            <button
              onClick={() => handleDownload(allMedia[mediaIndex])}
              className="px-4 py-2 bg-blue-500 rounded"
            >
              Download
            </button>
            <button onClick={nextMedia} className="px-4 py-2 bg-gray-700 rounded">
              Next
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Thirdgallery;
