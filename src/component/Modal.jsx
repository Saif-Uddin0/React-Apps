import React from "react";
import { FaRegClock, FaEye } from "react-icons/fa";

const Modal = ({ singleData }) => {
  const {
    title,
    author,
    date,
    image,
    short_description,
    views,
    read_time,
  } = singleData;

  return (
    <dialog id="my_modal_5" className="modal">
      <div className="modal-box w-11/12 max-w-4xl p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center gap-5 justify-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={image}
              alt={title}
              className="w-full h-64 md:h-80 object-cover rounded-xl"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-left space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-500 text-sm">
              {author} <span className="mx-2">•</span> {date}
            </p>
            <p className="text-gray-600">{short_description}</p>

            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm pt-3">
              <span className="flex items-center gap-1">
                <FaRegClock /> {read_time} Read
              </span>
              <span className="flex items-center gap-1">
                <FaEye /> {views.toLocaleString()} Views
              </span>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn bg-[#D6344F] hover:bg-[#b92c42] text-white">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
