import { useState } from "react";
import Modal from "react-modal";

const mediaItems = [
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
    "/christmasphotos/video (1).mp4",
    "/christmasphotos/video (2).mp4",
    "/christmasphotos/video (3).mp4",
    "/christmasphotos/video (4).mp4",
    "/christmasphotos/video (5).mp4",
    "/christmasphotos/video (6).mp4",
    "/christmasphotos/video (7).mp4",
    "/christmasphotos/video (8).mp4",
    "/christmasphotos/video (9).mp4",
    "/christmasphotos/video (10).mp4",
    "/christmasphotos/video (11).mp4",
    "/christmasphotos/video (13).mp4",
    "/christmasphotos/video (14).mp4",
    "/christmasphotos/video (15).mp4",
    "/christmasphotos/video (16).mp4",
    "/christmasphotos/video (17).mp4",
    "/christmasphotos/video (18).mp4",
];

const isVideo = (url) => url.match(/\.(mp4|webm|ogg)$/i);

Modal.setAppElement("#root"); // adjust if needed

const Firstgallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);

  const handleDownload = (media) => {
    const link = document.createElement("a");
    link.href = media;
    link.download = media.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const nextMedia = () =>
    setMediaIndex((mediaIndex + 1) % mediaItems.length);
  const prevMedia = () =>
    setMediaIndex((mediaIndex + mediaItems.length - 1) % mediaItems.length);

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {mediaItems.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => {
              setMediaIndex(index);
              setIsOpen(true);
            }}
          >
            {isVideo(src) ? (
              <video
                src={src}
                className="w-full rounded-lg shadow-md"
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={src}
                alt={`Media ${index + 1}`}
                loading="lazy"
                className="w-full rounded-lg shadow-md hover:shadow-xl transition duration-200"
              />
            )}
          </div>
        ))}
      </div>

      <Modal
  isOpen={isOpen}
  onRequestClose={() => setIsOpen(false)}
  shouldCloseOnOverlayClick={true}
  contentLabel="Media Viewer"
  className="fixed inset-0 flex items-center justify-center outline-none"
  overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-40"
>
  <div
    className="relative max-w-[90%] max-h-[90%] bg-black p-7 z-50"
    onClick={(e) => e.stopPropagation()} // prevent inside click from closing modal
  >
    {/* Close Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute flex justify-center items-center top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full px-[10px] pb-[5px] text-xl z-50"
    >
      &times;
    </button>

    {/* Media */}
    {isVideo(mediaItems[mediaIndex]) ? (
      <video
        src={mediaItems[mediaIndex]}
        controls
        autoPlay
        className="max-w-full max-h-[80vh] rounded-lg"
      />
    ) : (
      <img
        src={mediaItems[mediaIndex]}
        alt=""
        className="max-w-full max-h-[80vh] rounded-lg"
      />
    )}

    {/* Navigation */}
    <div className="flex justify-between mt-4 text-white">
      <button onClick={prevMedia} className="px-4 py-2 bg-gray-700 rounded">
        Previous
      </button>
      <button
        onClick={() => handleDownload(mediaItems[mediaIndex])}
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

export default Firstgallery;