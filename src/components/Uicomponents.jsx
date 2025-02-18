import React, { useState, useEffect } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdownmenu";
import Textfield from "./Textfield";
import Chip from "./Chip";
import Typography from "./Typography";
import Dialog from "./Dialog";
import Loading from "./Loading";

const Uicomponents = () => {
    // states for checkbox and dropdown
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

const [selected, setSelected] = useState("");
// options for dropdown
    const options = [
      { value: "", label: "Select an option" },
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ];
   // for chip component
   const [chips, setChips] = useState(["React", "Tailwind", "JavaScript"]);

   const handleRemove = (chip) => {
     setChips(chips.filter((c) => c !== chip));
   };
   //for dialog component
   const [isDialogOpen, setIsDialogOpen] = useState(false);

   const openDialog = () => setIsDialogOpen(true);
   const closeDialog = () => setIsDialogOpen(false);
 
   const handleConfirm = () => {
     alert("Confirmed!");
     closeDialog();
   };
   
     const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second loading time
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-around items-center bg-cyan-400 min-h-screen p-5">
        <div className="p-10 border-2 border-black bg-white w-80 h-60 rounded-lg shadow-lg">
          <h1 className="text-center pb-2 font-bold">Button</h1>
          <div className="grid grid-cols-2">
            <Button
              text="Primary"
              variant="primary"
              className="m-2"
              onClick={() => alert("Primary Button Clicked")}
            />
            <Button
              text="Sec"
              variant="secondary"
              className="m-2"
              onClick={() => alert("Secondary Button Clicked")}
            />
            <Button
              text="Outline"
              variant="outline"
              className="m-2"
              onClick={() => alert("Outlined Button Clicked")}
            />
            <Button text="Disabled" variant="disabled" disabled className="m-2" />
          </div>
        </div>
        <div className="p-10 border-2 border-black bg-white w-80 h-60 rounded-lg shadow-lg">
          <h1 className="text-center pb-2 font-bold">Checkbox</h1>
          <div className="grid grid-cols-1">
            <Checkbox
              label="Web development"
              name="primary"
              checked={checked1}
              onChange={()=>{setChecked1(!checked1)}}
              className="m-2"
            />
            <Checkbox
              label="Backend development"
              name="secondary"
              checktype="secondary"
              checked={checked2}
              onChange={() => {setChecked2(!checked2)}}
              className="m-2"
            />
            <Checkbox
              label="Cyber security"
              name="secondary"
              checktype="secondary"
              checked={checked3}
              disabled
              onChange={() => {setChecked3(!checked3)}}
              className="m-2"
            />
          </div>
        </div>
        <div className="p-10 border-2 border-black bg-white w-80 h-60 rounded-lg shadow-lg">
          <h1 className="text-center pb-2 font-bold">Dropdown</h1>
          <div className="grid grid-cols-1">
          <Dropdown options={options} selected={selected} onChange={setSelected} className="w-60 text-gray-400 mt-3 " />
          <Dropdown options={options} selected={selected} onChange={setSelected} disabled className="w-60 text-gray-400 mt-2 " />
      </div>
      </div>
        <div className="p-10 border-2 border-black bg-white w-80 h-60 rounded-lg shadow-lg">
          <h1 className="text-center pb-2 font-bold">Textfield</h1>
          <div className="grid grid-cols-1">
            <Textfield label="Name" placeholder="Enter your name" className="m-2" />
            <Textfield label="Age" placeholder="-- No need --" className="m-2" disabled />
      </div>
      </div>
        <div className="p-10 border-2 border-black bg-white w-80 h-60 rounded-lg shadow-lg">
          <h1 className="text-center pb-2 font-bold">Chip</h1>
          <div className="grid grid-cols-1">
          {chips.map((chip) => (
        <Chip key={chip} label={chip} onRemove={() => handleRemove(chip)} color="blue" />
      ))}
      <Chip label="Static Chip" color="red" />
      </div>
      </div>
        <div className="p-10 border-2 border-black bg-white w-80 h-60 rounded-lg shadow-lg">
          <h1 className="text-center pb-4 font-bold ">Typography</h1>
          <div className="grid grid-cols-1">
          <Typography variant="h6" className="text-center">
        This is a Heading 1
      </Typography>
      <Typography variant="h2" className="text-center mt-2">
        This is a Heading 2
      </Typography>
      </div>
      </div>
        <div className="p-10 border-2 border-black bg-white w-80 h-60 rounded-lg shadow-lg">
          <h1 className="text-center pb-10 font-bold">Dialog</h1>
          <div className="grid grid-cols-1">
          <button
        onClick={openDialog}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Open Dialog
      </button>
          <Dialog 
        isOpen={isDialogOpen} 
        onClose={closeDialog}
        title="Confirm Action"
        confirmText="Yes"
        cancelText="No"
        onConfirm={handleConfirm}
      >
        <p>Are you sure you want to proceed?</p>
      </Dialog>
      </div>
      </div>
        <div className="p-10 border-2 border-black bg-white w-80 h-60 rounded-lg shadow-lg">
          <h1 className="text-center pb-2 font-bold">Loading</h1>
          <div className="grid grid-cols-1 text-center mt-10">
          {isLoading ? (
        <Loading message="Please wait, data is loading..." color="border-green-500" />
      ) : (
        <div className="text-xl font-bold">Content Loaded!</div>
      )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Uicomponents;
