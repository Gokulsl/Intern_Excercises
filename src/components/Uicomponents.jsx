import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdownmenu";
import Textfield from "./Textfield";
import Chip from "./Chip";
import Typography from "./Typography";
import Dialog from "./Dialog";
import Loading from "./Loading";
import ComponentCard from "./Card";

const UIComponents = () => {
  const [checkboxState, setCheckboxState] = useState({
    webDev: false,
    backendDev: false,
    cyberSecurity: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckboxState((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const [selected, setSelected] = useState("");
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [input1, setInput1] = useState("");

  const [chips, setChips] = useState(["React", "Tailwind", "JavaScript"]);
  const handleRemove = (chip) => setChips(chips.filter((c) => c !== chip));

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleConfirm = () => {
    alert("Confirmed!");
    closeDialog();
  };

  return (
    <div className="bg-gradient-to-br  from-purple-500 to-purple-700  min-h-screen flex flex-col items-center p-10 pb-20">
      <h1 className="text-4xl font-mont font-bold text-white pb-13 pt-4"> UI Components Showcase </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        
        {/* Buttons */}
        <ComponentCard title="Button">
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button text="Primary" variant="primary" onClick={() => alert("Primary Clicked")} />
            <Button text="Secondary" variant="secondary" onClick={() => alert("Secondary Clicked")} />
            <Button text="Outline" variant="outline" onClick={() => alert("Outlined Clicked")} />
            <Button text="Disabled" variant="disabled" disabled />
          </div>
        </ComponentCard>

        {/* Checkboxes */}
        <ComponentCard title="Checkbox">
          <div className="flex flex-col gap-4">
            <Checkbox label="Web Development" checked={checkboxState.webDev} onChange={() => handleCheckboxChange("webDev")} />
            <Checkbox label="Backend Development" checked={checkboxState.backendDev} onChange={() => handleCheckboxChange("backendDev")} />
            <Checkbox label="Cyber Security" checked={checkboxState.cyberSecurity} disabled />
          </div>
        </ComponentCard>

        {/* Dropdowns */}
        <ComponentCard title="Dropdown">
          <div className="flex flex-col gap-2">
            <Dropdown options={options} title="Click me" value={selected} onChange={setSelected} className="w-40 bg-orange-300 " />
            <Dropdown options={options} title="Click me" disabled className="w-40 bg-gray-200" />
          </div>
        </ComponentCard>

        {/* Textfields */}
        <ComponentCard title="Textfield">
          <div className="flex flex-col gap-2 w-full ms-5">
          <Textfield 
    label="Name" 
    required 
    value={input1} 
    className="bg-slate-200 text-gray-700"
    placeholder="Enter your name" 
    onChange={(e) => setInput1(e.target.value)} 
/>

            <Textfield label="Age" placeholder="Enter your age" className="bg-slate-200 text-gray-700" disabled  />
          </div>
        </ComponentCard>

        {/* Chips */}
        <ComponentCard title="Chip">
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <Chip key={chip} label={chip} onRemove={() => handleRemove(chip)} color="purple" />
            ))}
            <Chip label="Static Chip" color="red" />
          </div>
        </ComponentCard>

        {/* Typography */}
        <ComponentCard title="Typography">
          <div className="text-center">
            <Typography variant="body2" className="text-slate-300 mb-1">This is a Heading 1</Typography>
            <Typography variant="h4" className="text-slate-300">This is a Heading 1</Typography>
            <Typography variant="h2" className="text-slate-300 mt-2">This is a Heading 2</Typography>
          </div>
        </ComponentCard>

        {/* Dialog */}
        <ComponentCard title="Dialog">
          <button
            onClick={openDialog}
            className="px-6 py-2 bg-purple-600 text-white cursor-pointer rounded-lg hover:bg-purple-400 mt-2"
          >
            Open Dialog
          </button>
          <Dialog isOpen={isDialogOpen} onClose={closeDialog} title="Confirm Action" confirmText="Yes" cancelText="No" onConfirm={handleConfirm}>
            <p>Are you sure you want to proceed?</p>
          </Dialog>
        </ComponentCard>

        {/* Loading */}
        <ComponentCard title="Loading">
          <div className="text-center">
            <Loading message="Loading data..." size={"w-10 h-10"}color="border-orange-500" />
          </div>
        </ComponentCard>
      </div>
    </div>
  );
};

export default UIComponents;
