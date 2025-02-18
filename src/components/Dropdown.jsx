import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-center gap-x-1.5 rounded cursor-pointer px-3 py-2 font-semibold text-gray-900 bg-white shadow-xs hover:bg-gray-300"
      >
        Exercises
        <ChevronDownIcon className="mr-1 w-5 h-5 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition-opacity">
          <div className="py-1">
          
              <h1
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-600"
            ><Link className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-60" to='/flexplayground' onClick={() => setIsOpen(false)}>
              Flex
            </Link ></h1>
            <h1
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-600"
            ><Link className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-60" to='/listing'  onClick={() => setIsOpen(false)}>
              Listing
            </Link></h1>
            <h1
              className="block px-4 py-2 text-black text-sm hover:bg-gray-100 hover:text-gray-600"
            ><Link to='/Ui' className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-60"  onClick={() => setIsOpen(false)}>
              Ui Components
            </Link></h1>
          </div>
        </div>
      )}
    </div>
  );
}
