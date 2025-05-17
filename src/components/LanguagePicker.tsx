// src/components/LanguagePicker.tsx
import React, { useState } from 'react';

const languages = ['English', 'Spanish', 'French', 'German', 'Japanese'];

export default function LanguagePicker() {
  const [selected, setSelected] = useState('English');

  return (
    <div className="mb-6 w-full max-w-xs">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        🌐 Select Language
      </label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}