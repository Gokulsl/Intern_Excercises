import React, { useState } from "react";
import Button from "../common/Button";
import Checkbox from "../common/CheckBox";
import Dropdown from "../common/DropDownMenu";
import Textfield from "../common/TextField";
import Chip from "../common/Chip";
import Typography from "../common/TypoGraphy";
import Dialog from "../common/Dialog";
import Loading from "../common/Loading";
import ComponentCard from "../common/Card";

interface CheckboxState {
  webDev: boolean;
  backendDev: boolean;
  cyberSecurity: boolean;
}

interface Option {
  value: string;
  to: string;
  label: string;
}

const UiComponents: React.FC = () => {
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    webDev: false,
    backendDev: false,
    cyberSecurity: false,
  });

  const handleCheckboxChange = (name: keyof CheckboxState) => {
    setCheckboxState((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const options: Option[] = [
    { value: "", label: "Select an option",to:"" },
    { value: "option1", label: "Option 1",to:"" },
    { value: "option2", label: "Option 2",to:"" },
    { value: "option3", label: "Option 3",to:"" },
  ];
  
  const [selected, setSelected] = useState<string>(options[0]?.value || "");
  const [input1, setInput1] = useState<string>("");
  const [chips, setChips] = useState<string[]>(["React", "Tailwind", "JavaScript"]);
  const handleRemove = (chip: string) => setChips(chips.filter((c) => c !== chip));
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleConfirm = () => {
    alert("Confirmed!");
    closeDialog();
  };

  return (
    <div className="bg-gradient-to-br from-purple-500 to-purple-700 min-h-screen flex flex-col items-center p-10 pb-20">
      <h1 className="text-4xl font-mont font-bold text-white pb-13 pt-4">
        UI Components Showcase
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {/* Buttons */}
        <ComponentCard title="Button">
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button variant="primary" onClick={() => alert("Primary Clicked")}>
              Primary
            </Button>
            <Button variant="secondary" onClick={() => alert("Secondary Clicked")}>
              Secondary
            </Button>
            <Button variant="outline" onClick={() => alert("Outlined Clicked")}>
              Outline
            </Button>
            <Button variant="disabled" disabled>
              Disabled
            </Button>
          </div>
        </ComponentCard>

        {/* Checkboxes */}
        <ComponentCard title="Checkbox">
          <div className="flex flex-col gap-4">
            <Checkbox
              label="Web Development"
              checked={checkboxState.webDev}
              onChange={() => handleCheckboxChange("webDev")}
            />
            <Checkbox
              label="Backend Development"
              checked={checkboxState.backendDev}
              onChange={() => handleCheckboxChange("backendDev")}
            />
            <Checkbox label="Cyber Security" checked={checkboxState.cyberSecurity} disabled />
          </div>
        </ComponentCard>

        {/* Dropdowns */}
        <ComponentCard title="Dropdown">
          <div className="flex flex-col gap-2">
            <Dropdown
              options={options}
              title="Click me"
              value={selected}
              onChange={setSelected}
              className="w-40 bg-orange-300  hover:bg-orange-200"
            />
            <Dropdown options={options} title="Click me" disabled className="w-40 bg-orange-100 text-gray-300" />
          </div>
        </ComponentCard>

        {/* Textfields */}
        <ComponentCard title="Textfield">
          <div className="flex flex-col gap-2 w-full ms-5">
            <Textfield
              label="Name"
              value={input1}
              className="bg-slate-200 required text-gray-700"
              placeholder="Enter your name"
              onChange={(e) => setInput1(e.target.value)}
            />
            <Textfield label="Age" placeholder="Enter your age" className="bg-slate-200 text-gray-700" disabled />
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
            <Typography variant="h2" className="text-slate-300 mb-1">
              This is a Heading 1
            </Typography>
            <Typography variant="h3" className="text-slate-300 mt-2">
              This is a Heading 2
            </Typography>
            <Typography variant="body2" className="text-slate-300">
              This is body text
            </Typography>
          </div>
        </ComponentCard>

        {/* Dialog */}
        <ComponentCard title="Dialog">
          <button
            onClick={openDialog}
            className="px-6 py-2 bg-purple-600 text-white cursor-pointer rounded-lg hover:bg-purple-400 mt-2 mb-2"
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
        </ComponentCard>

        {/* Loading */}
        <ComponentCard title="Loading">
          <div className="text-center">
            <Loading message="Loading data..." size="w-10 h-10" color="border-orange-500" />
          </div>
        </ComponentCard>
      </div>
    </div>
  );
};

export default UiComponents;