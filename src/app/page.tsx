'use client'; // needed for client-side navigation

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const travelTypes = [
    { label: '🏖 Vacation', value: 'vacation' },
    { label: '💼 Business', value: 'business' },
    { label: '🎒 Backpacking', value: 'backpacking' },
  ];

  const handleGenerate = () => {
    if (!selected) return alert('Please select a travel type first!');
    router.push(`/cheat-sheet?type=${selected}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-yellow-100 p-8">
      <h1 className="text-5xl font-bold text-blue-800 mb-4">🌍 Travella</h1>
      <p className="text-xl text-gray-700 mb-8 text-center max-w-xl">
        Get quick language cheat sheets based on your travel style – whether you're sightseeing, on a business trip, or backpacking!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
        {travelTypes.map((t) => (
          <button
            key={t.value}
            onClick={() => setSelected(t.value)}
            className={`p-6 rounded-xl shadow-md text-lg font-medium ${
              selected === t.value
                ? 'bg-blue-600 text-white'
                : 'bg-white hover:bg-blue-100 text-gray-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <button
        onClick={handleGenerate}
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Generate Cheat Sheet
      </button>
    </main>
  );
}
