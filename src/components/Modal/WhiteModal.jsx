import React from "react";

export default function WhiteModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Popup Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 relative z-10 max-w-[900px]">
        {/* <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button> */}
        {children}
      </div>
    </div>
  );
}
