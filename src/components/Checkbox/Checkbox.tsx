import { FC } from "react";
import checkmark from "@assets/icons/checkmark.svg";
import React from 'react';
export type CheckboxProps = {
  isChecked: boolean;
  onClick?: () => void;
};
const Checkbox: FC<CheckboxProps> = ({ isChecked, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-4 h-4 w-[20px] h-[20px] rounded-full border border-gray-300 flex justify-center items-center"
    >
      {isChecked && <img src={checkmark} className="w-[20px]" />}
    </div>
  );
};

export default Checkbox;
