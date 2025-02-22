import { useState } from "react";
import { Trash } from "lucide-react";

type FlexItem = {
  id: number;
  order: number;
  width: number;
  height: number;
  flexGrow: number;
  flexShrink: number;
  flexBasis: string;
  alignSelf: string;
  showSettings: boolean;
};


const Flexplayground: React.FC = () => {
  const [flexDirection, setFlexDirection] = useState<React.CSSProperties["flexDirection"]>("row");
  const [flexWrap, setFlexWrap] = useState<React.CSSProperties["flexWrap"]>("wrap");
  const [alignItems, setAlignItems] = useState<React.CSSProperties["alignItems"]>("flex-start");
  const [alignContent, setAlignContent] = useState<React.CSSProperties["alignContent"]>("flex-start");
  const [justifyContent, setJustifyContent] = useState<React.CSSProperties["justifyContent"]>("flex-start");
  const [activeTab, setActiveTab] = useState<string>("container");
  const [items, setItems] = useState<FlexItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<FlexItem | null>(null);
  
  const handleItemClick = (itemId: number) => {
    if (selectedItem?.id === itemId) {
      setSelectedItem(null);
      setActiveTab("container");
    } else {
      const item = items.find((item) => item.id === itemId) || null;
      setSelectedItem(item);
      setActiveTab("items");
    }
  };
  

  const addItem = () => {
    const newItem: FlexItem = {
      id: Date.now(),
      order: 0,
      width: 130,
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

  const deleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  };

  const updateItem = (id: number, field: keyof FlexItem, value: any) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );

    if (selectedItem?.id === id) {
      setSelectedItem((prev) => (prev ? { ...prev, [field]: value } : null));
    }
  };
  return (
    <div className="flex h-screen bg-white pb-5">
      {/* Sidebar */}
      <div className="w-1/3 p-4 border-2 bg-gradient-to-br from-purple-500 to-purple-700 overflow-y-auto">
        <div className="flex gap-3 mt-5 mb-4">
          <button
            className={`flex-1 p-3 rounded font-bold ${
              activeTab === "container"
                ? "bg-gray-800 cursor-pointer text-white font-bold border-2 border-slate-300"
                : "bg-gray-600 text-white cursor-pointer font-semibold"
            }`}
            onClick={() => setActiveTab("container")}
          >
            Container
          </button>
          <button
            className={`flex-1 p-3 rounded font-bold ${
              activeTab === "items"
              ? "bg-gray-800 text-white cursor-pointer font-bold border-2 border-slate-300"
              : "bg-gray-600 text-white cursor-pointer font-semibold"
          }`}
            onClick={() => setActiveTab("items")}
          >
            Items
          </button>
        </div>

        {activeTab === "container" ? (
          <div className="shadow rounded p-3 h-200">
            <button
              className="p-4 px-20 cursor-pointer ms-23 mt-3 mb-3 bg-gray-800 text-white font-bold hover:bg-gray-600 rounded-lg transition-all"
              onClick={addItem}
            >
              Add Item
            </button>

            <p className="bg-gray-800 font-medium text-gray-100 p-6 my-5">
              Edit properties of the flex container here. Click an item to the
              right to edit its properties.
            </p>

            <h2 className="text-lg text-gray-900 font-bold my-4">Container Settings</h2>
            <label className="block text-gray-900 mb-4">flex-direction</label>
            <select
              className="w-full p-2 bg-gray-200 text-gray-900 border rounded mb-3"
              value={flexDirection}
              onChange={(e) => setFlexDirection(e.target.value as React.CSSProperties["flexDirection"])}
            >
              <option value="row">row</option>
              <option value="row-reverse">row-reverse</option>
              <option value="column">column</option>
              <option value="column-reverse">column-reverse</option>
            </select>

            <label className="blocktext-slate-200 text-gray-900 mb-4 mt-4">flex-wrap</label>
            <select
              className="w-full p-2 text-gray-900 bg-gray-200 border rounded mt-4 mb-3"
              value={flexWrap}
              onChange={(e) => setFlexWrap(e.target.value as React.CSSProperties["flexWrap"])}
            >
              <option value="wrap">wrap</option>
              <option value="nowrap">no-wrap</option>
              <option value="wrap-reverse">wrap-reverse</option>
            </select>

            <label className="block text-gray-900 mb-2 mt-3">justify-content</label>
            <select
              className="w-full p-2 mt-2 mb-3 text-gray-900 bg-gray-200 border rounded"
              value={justifyContent}
              onChange={(e) => setJustifyContent(e.target.value)}
            >
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="space-around">space-around</option>
              <option value="space-between">space-between</option>
            </select>

            <label className="block text-gray-900 mb-4 mt-2">align-items</label>
            <select
              className="w-full p-2 border text-gray-900 bg-gray-200 rounded mb-3"
              value={alignItems}
              onChange={(e) => setAlignItems(e.target.value)}
            >
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="flex-end">flex-end</option>
              <option value="stretch">stretch</option>
            </select>

            <label className="block text-gray-900 mt-2 mb-4">align-content</label>
            <select
              className="w-full p-2 text-gray-900 bg-gray-200 border rounded mb-20 "
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
            <h2 className="text-lg font-bold text-gray-900 mb-2">Edit Item</h2>

            <label className="block text-gray-900 mb-2">Order</label>
            <input
              type="number"
              defaultValue={0}
              className="w-full p-2 text-gray-900 bg-gray-200 border rounded mb-3"
              onChange={(e) =>
                updateItem(selectedItem.id, "order", Number(e.target.value))
              }
            />

            <label className="block text-gray-900 mb-2">Width (px)</label>
            <input
              type="number"
              value={selectedItem.width}
              className="w-full p-2 text-gray-900 bg-gray-200 border rounded mb-3"
              onChange={(e) =>
                updateItem(selectedItem.id, "width", Number(e.target.value))
              }
            />

            <label className="block text-gray-900 mb-2">Height (px)</label>
            <input
              type="number"
              value={selectedItem.height}
              className="w-full text-gray-900 bg-gray-200 p-2 border rounded"
              onChange={(e) =>
                updateItem(selectedItem.id, "height", Number(e.target.value))
              }
            />
            {/* Flex Grow */}
            <label className="block text-gray-900 mb-2 mt-2">Flex Grow</label>
            <input
              type="number"
              value={selectedItem.flexGrow}
              className="w-full text-gray-900 bg-gray-200 p-2 border rounded mb-3"
              onChange={(e) =>
                updateItem(selectedItem.id, "flexGrow", Number(e.target.value))
              }
            />

            {/* Flex Shrink */}
            <label className="block text-gray-900 mb-2">Flex Shrink</label>
            <input
              type="number"
              value={selectedItem.flexShrink}
              className="w-full text-gray-900 bg-gray-200 p-2 border rounded mb-3"
              onChange={(e) =>
                updateItem(
                  selectedItem.id,
                  "flexShrink",
                  Number(e.target.value)
                )
              }
            />

            <label className="block text-gray-900 mb-2">Align Self</label>
            <select
              className="w-full p-2 text-gray-900 bg-gray-200 border rounded"
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
          <p className="text-gray-200 font-medium bg-gray-800 p-6 my-5">
            Click a flex item to edit its styles.
          </p>
        )}
      </div>

      {/* Main Flex Container */}
      <div
        className="w-2/3  border-2 m-2 border-black p-4 overflow-hidden flex items-center justify-center flex-wrap"
        style={{
          flexDirection: flexDirection,
          flexWrap: flexWrap ,
          justifyContent: justifyContent ,
          alignItems: alignItems ,
          alignContent: alignContent ,
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center bg-purple-200 justify-center border rounded-lg shadow-md cursor-pointer relative  ${
              selectedItem?.id === item.id ? 'border-2 border-purple-800' : ''
            }`}

            style={{
              width: `${item.width}px`,
              height: `${item.height}px`,
              order: item.order,
              alignSelf: item.alignSelf,
              flexGrow: item.flexGrow,
              flexShrink: item.flexShrink,
              flexBasis: item.flexBasis,
              margin: "12px",
              transition: "all 0.3s ease",
            }}
            onClick={() => handleItemClick(item.id)}
          >
            <span>Item {index}</span>
            <div className="absolute right-1 top-1 mt-2 flex flex-col items-center">

    <button
      className="text-red-600 mt-2 hover:text-red-800 cursor-pointer transition-all duration-300"
      onClick={(e) => {
        e.stopPropagation();
        deleteItem(item.id);
      }}
    >
      <Trash className="w-6 h-6 mx-1 shadow-lg transform transition duration-300 hover:scale-110 hover:bg-red-200 border border-blue-100 rounded-full hover:text-red-500" />
    </button>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Flexplayground;
