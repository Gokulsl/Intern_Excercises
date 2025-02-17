import { useState } from "react";
import { Pencil, Trash } from "lucide-react";

const MainLayout = () => {
  // container styling usestates
  const [flexDirection, setFlexDirection] = useState("row");
  const [flexWrap, setFlexWrap] = useState("wrap");
  const [alignItems, setAlignItems] = useState("flex-start");
  const [alignContent, setAlignContent] = useState("flex-start");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  // .....

  const [activeTab, setActiveTab] = useState("container");

  const [items, setItems] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);
  
  const handleItemClick = (itemId) => {
    if (selectedItem?.id === itemId) {
      setSelectedItem(null);
      setActiveTab("container");
    } else {
      const item = items.find((item) => item.id === itemId);
      setSelectedItem(item);
      setActiveTab("items");
    }
  };
  

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      order: 0,
      width: 110,
      height: 68,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: "auto",
      alignSelf: "auto",
      showSettings: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setSelectedItem(newItem);
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  };

  const updateItem = (id, field, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );

    if (selectedItem?.id === id) {
      setSelectedItem((prev) => ({ ...prev, [field]: value }));
    }
  };
  return (
    <div className="flex h-screen bg-white overflow-hidden pb-5">
      {/* Sidebar */}
      <div className="w-1/3 p-4 border-r bg-gray-300 overflow-y-auto">
        <div className="flex gap-3 mb-4">
          <button
            className={`flex-1 p-3 rounded font-bold ${
              activeTab === "container"
                ? "bg-slate-100 text-blue-800 font-bold border-4 border-blue-300"
                : "bg-slate-200 text-black font-semibold"
            }`}
            onClick={() => setActiveTab("container")}
          >
            Container
          </button>
          <button
            className={`flex-1 p-3 rounded font-bold ${
              activeTab === "items"
                ? "bg-slate-100 text-blue-800 font-bold border-4 border-blue-300"
                : "bg-slate-200 text-black font-semibold"
            }`}
            onClick={() => setActiveTab("items")}
          >
            Items
          </button>
        </div>

        {activeTab === "container" ? (
          <div className="h-full shadow rounded p-3">
            <button
              className="p-4 px-20 cursor-pointer ms-10 mt-3 bg-blue-500 text-white font-bold hover:bg-blue-600 rounded-lg transition-all"
              onClick={addItem}
            >
              Add Item
            </button>

            <p className="text-blue-900 font-medium bg-blue-200 p-2 my-5">
              Edit properties of the flex container here. Click an item to the
              right to edit its properties.
            </p>

            <h2 className="text-lg font-semibold my-4">Container Settings</h2>
            <label className="block mb-2">flex-direction</label>
            <select
              className="w-full p-2 border rounded mb-3"
              value={flexDirection}
              onChange={(e) => setFlexDirection(e.target.value)}
            >
              <option value="row">row</option>
              <option value="row-reverse">row-reverse</option>
              <option value="column">column</option>
              <option value="column-reverse">column-reverse</option>
            </select>

            <label className="block mb-2">flex-wrap</label>
            <select
              className="w-full p-2 border rounded mb-3"
              value={flexWrap}
              onChange={(e) => setFlexWrap(e.target.value)}
            >
              <option value="wrap">wrap</option>
              <option value="nowrap">no-wrap</option>
              <option value="wrap-reverse">wrap-reverse</option>
            </select>

            <label className="block mb-2">justify-content</label>
            <select
              className="w-full p-2 border rounded"
              value={justifyContent}
              onChange={(e) => setJustifyContent(e.target.value)}
            >
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="space-around">space-around</option>
              <option value="space-between">space-between</option>
            </select>

            <label className="block mb-2 mt-2">align-items</label>
            <select
              className="w-full p-2 border rounded mb-3"
              value={alignItems}
              onChange={(e) => setAlignItems(e.target.value)}
            >
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="stretch">stretch</option>
            </select>

            <label className="block mb-2">align-content</label>
            <select
              className="w-full p-2 border rounded mb-20 "
              value={alignContent}
              onChange={(e) => setAlignContent(e.target.value)}
            >
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="space-around">space-around</option>
              <option value="space-between">space-between</option>
            </select>
          </div>
        ) : selectedItem  ? (
          <div className="shadow rounded p-3 mb-20">
            <h2 className="text-lg font-semibold mb-2">Edit Item</h2>

            <label className="block mb-2">Order</label>
            <input
              type="number"
              defaultValue={0}
              className="w-full p-2 border rounded mb-3"
              onChange={(e) =>
                updateItem(selectedItem.id, "order", Number(e.target.value))
              }
            />

            <label className="block mb-2">Width (px)</label>
            <input
              type="number"
              value={selectedItem.width}
              className="w-full p-2 border rounded mb-3"
              onChange={(e) =>
                updateItem(selectedItem.id, "width", Number(e.target.value))
              }
            />

            <label className="block mb-2">Height (px)</label>
            <input
              type="number"
              value={selectedItem.height}
              className="w-full p-2 border rounded"
              onChange={(e) =>
                updateItem(selectedItem.id, "height", Number(e.target.value))
              }
            />
            {/* Flex Grow */}
            <label className="block mb-2 mt-2">Flex Grow</label>
            <input
              type="number"
              value={selectedItem.flexGrow}
              className="w-full p-2 border rounded mb-3"
              onChange={(e) =>
                updateItem(selectedItem.id, "flexGrow", Number(e.target.value))
              }
            />

            {/* Flex Shrink */}
            <label className="block mb-2">Flex Shrink</label>
            <input
              type="number"
              value={selectedItem.flexShrink}
              className="w-full p-2 border rounded mb-3"
              onChange={(e) =>
                updateItem(
                  selectedItem.id,
                  "flexShrink",
                  Number(e.target.value)
                )
              }
            />

            <label className="block mb-2">Align Self</label>
            <select
              className="w-full p-2 border rounded"
              onChange={(e) =>
                updateItem(selectedItem.id, "alignSelf", e.target.value)
              }
            >
              <option value="auto">auto</option>
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="stretch">stretch</option>
              <option value="baseline">baseline</option>
            </select>
          </div>
        ) : (
          <p className="text-blue-900 font-medium bg-blue-200 p-2 my-5">
            Click a flex item to edit its styles.
          </p>
        )}
      </div>

      {/* Main Flex Container */}
      <div
        className="w-full bg-white p-4 flex items-center justify-center flex-wrap border"
        style={{
          flexDirection,
          flexWrap,
          justifyContent,
          alignItems: alignItems || "flex-start",
          alignContent: alignContent || "flex-start",
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-center border rounded-lg shadow-md cursor-pointer relative p-2 ${
              selectedItem?.id === item.id ? 'border-2 border-green-500' : ''
            }`}
            
            style={{
              width: `${item.width}px`,
              height: `${item.height}px`,
              order: item.order,
              alignSelf: item.alignSelf,
              flexGrow: item.flexGrow,
              flexShrink: item.flexShrink,
              flexBasis: item.flexBasis,
              backgroundColor: "#E0F7FA",
              margin: "12px",
              transition: "all 0.3s ease",
            }}
            onClick={() => handleItemClick(item.id)}
          >
            <span>Item {index}</span>
            <div className="absolute right-1 top-1 mt-2 flex flex-col items-center">
    <button
      className="text-blue-600 mb-1 hover:text-blue-800 transition-all duration-300"
      onClick={(e) => {
        e.stopPropagation();
        setSelectedItem(item);
      }}
    >
      <Pencil className="w-5 h-4 ms-3 cursor-pointer shadow-lg transform transition duration-300 hover:scale-110 border rounded-full border-blue-100 hover:bg-blue-300 hover:text-blue-800" />
    </button>
    <button
      className="text-red-600 mt-1 hover:text-red-800 transition-all duration-300"
      onClick={(e) => {
        e.stopPropagation();
        deleteItem(item.id);
      }}
    >
      <Trash className="w-5 h-4 ms-3 shadow-lg transform transition duration-300 hover:scale-110 hover:bg-red-200 border border-blue-100 rounded-full hover:text-red-500" />
    </button>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default MainLayout;
