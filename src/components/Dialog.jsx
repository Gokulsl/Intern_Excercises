import React from 'react';

const Dialog = ({ isOpen, onClose, title, children, confirmText = "Confirm", cancelText = "Cancel", onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        {/* Dialog Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            &times;
          </button>
        </div>

        {/* Dialog Body */}
        <div className="p-4">
          {children}
        </div>

        {/* Dialog Footer */}
        <div className="flex justify-end p-4 border-t">
          <button 
            onClick={onClose}
            className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            {cancelText}
          </button>
          <button 
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
