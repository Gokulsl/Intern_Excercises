import React from 'react';
type DialogProps = {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
}
const Dialog = ({ isOpen, onClose, title, children, confirmText = "Confirm", cancelText = "Cancel", onConfirm }:DialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white rounded-lg shadow-lg w-96 relative">
        {/* Dialog Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 cursor-pointer">
            &times;
          </button>
        </div>

        {/* Dialog Body */}
        <div className="p-4 text-gray-800">
          {children}
        </div>

        {/* Dialog Footer */}
        <div className="flex justify-end p-4 border-t">
          <button 
            onClick={onClose}
            className="px-4 py-2 mr-2 bg-gray-300 cursor-pointer text-gray-700 rounded-md hover:bg-gray-400"
          >
            {cancelText}
          </button>
          <button 
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-md hover:bg-blue-600"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
