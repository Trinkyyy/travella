// src/components/TravelTypeButton.tsx
import React from 'react';

interface TravelTypeButtonProps {
  label: string;
  value: string;
  selected: string | null;
  onClick: (value: string) => void;
}

export default function TravelTypeButton({
  label,
  value,
  selected,
  onClick,
}: TravelTypeButtonProps) {
  const isSelected = selected === value;

  return (
    <button
      onClick={() => onClick(value)}
      className={`p-6 rounded-xl shadow-md text-lg font-medium transition ${
        isSelected
          ? 'bg-blue-600 text-white'
          : 'bg-white hover:bg-blue-100 text-gray-800'
      }`}
    >
      {label}
    </button>
  );
}
