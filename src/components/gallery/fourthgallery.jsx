import { useState } from "react";
import Modal from "react-modal";

const mediaGroups = {
  "Government Secondary School, Maraba, Abuja": [
    "/girlsdignityinitiative/gssmaraba/image (1).jpg",
    "/girlsdignityinitiative/gssmaraba/image (2).jpg",
    "/girlsdignityinitiative/gssmaraba/image (3).jpg",
    "/girlsdignityinitiative/gssmaraba/image (4).jpg",
  ],

  "Government Secondary School, Gwarimpa, Abuja": [
    "/girlsdignityinitiative/gssgwarimpa/image (1).jpg",
    "/girlsdignityinitiative/gssgwarimpa/image (2).jpg",
    "/girlsdignityinitiative/gssgwarimpa/image (3).jpg",
    "/girlsdignityinitiative/gssgwarimpa/image (4).jpg",
    "/girlsdignityinitiative/gssgwarimpa/image (5).jpg",
  ],

  "Junior Secondary School, Nassarawa": [
    "/girlsdignityinitiative/jssnassarawa/image (1).jpg",
    "/girlsdignityinitiative/jssnassarawa/image (2).jpg",
    "/girlsdignityinitiative/jssnassarawa/image (3).jpg",
  ],
};

const isVideo = (url) => url.match(/\.(mp4|webm|ogg)$/i);

Modal.setAppElement("#root");

const Fourthgallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mediaIndex, setMediaIndex] = useState(0);

  // Flatten all media for modal navigation
  const allMedia = Object.values(mediaGroups).flat();

  const handleDownload = (media) => {
    const link = document.createElement("a");
    link.href = media;
    link.download = media.split("/").pop();

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const nextMedia = () =>
    setMediaIndex((prev) => (prev + 1) % allMedia.length);

  const prevMedia = () =>
    setMediaIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);

  return (
    <div className="p-5 space-y-12">
      {/* Dynamic Gallery Sections */}
      {Object.entries(mediaGroups).map(([groupTitle, mediaList]) => (
        <div key={groupTitle}>
          <h2 className="text-2xl font-bold mb-4 text-center">
            {groupTitle}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mediaList.map((src) => {
              const globalIndex = allMedia.indexOf(src);

              return (
                <div
                  key={src}
                  className="cursor-pointer"
                  onClick={() => {
                    setMediaIndex(globalIndex);
                    setIsOpen(true);
                  }}
                >
                  {isVideo(src) ? (
                    <video
                      src={src}
                      className="w-full rounded-lg shadow-md hover:shadow-xl transition duration-200"
                    />
                  ) : (
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="w-full rounded-lg shadow-md hover:shadow-xl transition duration-200"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

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
            <button
              onClick={prevMedia}
              className="px-4 py-2 bg-gray-700 rounded"
            >
              Previous
            </button>

            <button
              onClick={() => handleDownload(allMedia[mediaIndex])}
              className="px-4 py-2 bg-blue-500 rounded"
            >
              Download
            </button>

            <button
              onClick={nextMedia}
              className="px-4 py-2 bg-gray-700 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Fourthgallery;