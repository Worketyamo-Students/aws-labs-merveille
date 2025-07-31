// import React from 'react';

interface Props {
  label: string;
  type: string;
  placeholder: string;
}

const Input = ({ label, type, placeholder }: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-base font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;
