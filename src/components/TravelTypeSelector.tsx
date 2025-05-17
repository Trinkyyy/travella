// src/components/TravelTypeSelector.tsx
import React from 'react';

type TravelType = {
  label: string;
  value: string;
};

type Props = {
  selected: string | null;
  onSelect: (value: string) => void;
};

const travelTypes: TravelType[] = [
  { label: '🏖 Vacation', value: 'vacation' },
  { label: '💼 Business', value: 'business' },
  { label: '🎒 Backpacking', value: 'backpacking' },
];

export default function TravelTypeSelector({ selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-4">
      {travelTypes.map((type) => (
        <button
          key={type.value}
          onClick={() => onSelect(type.value)}
          className={`p-6 rounded-xl shadow-md text-lg font-medium transition duration-200 ease-in-out focus:outline-none 
            ${
              selected === type.value
                ? 'bg-blue-600 text-white ring-2 ring-offset-2 ring-blue-500'
                : 'bg-white text-gray-800 hover:bg-blue-100'
            }`}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}