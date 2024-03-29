import React from "react";
import { DropdownProvider, useDropdown } from "./DropdownContext";

const DropdownButton = () => {
  const {selectedItem,toggleDropdown} = useDropdown();
  return <button onClick={toggleDropdown}>{selectedItem || 'Dropdown Button'}</button>;
};

const DropdownMenu = ({ items }) => {
  const {isOpen,selectItem} = useDropdown();
  if(!isOpen) return false;
  return (
    <ul>
      {items.map((item) => (
        <li key={item} onClick={()=>selectItem(item)}>{item}</li>
      ))}
    </ul>
  );
};

const Dropdown = ({ items }) => {
  return (
    <DropdownProvider>
      <div>
        <DropdownButton />
        <DropdownMenu items={items} />
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
