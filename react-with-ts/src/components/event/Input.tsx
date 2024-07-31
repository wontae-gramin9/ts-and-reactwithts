import React from "react";

// CONTROLLED ELEMENT
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, handleChange }: InputProps) {
  return <input type="text" value={value} onChange={handleChange}></input>;
}
