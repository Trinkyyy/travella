'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const PHRASES: Record<string, string[]> = {
  vacation: [
    'Where is the beach?',
    'I’d like a room with a sea view.',
    'What are the top tourist spots?',
    'Can you take a photo of us?',
  ],
  business: [
    'Where is the conference hall?',
    'Let’s schedule a meeting.',
    'Do you have Wi-Fi here?',
    'Here is my business card.',
  ],
  backpacking: [
    'Where can I find a hostel?',
    'Is this route safe to hike?',
    'How much is the local bus fare?',
    'Can I refill my water bottle here?',
  ],
};

export default function CheatSheet() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'vacation';
  const [phrases, setPhrases] = useState<string[]>([]);

  useEffect(() => {
    setPhrases(PHRASES[type] || PHRASES['vacation']);
  }, [type]);

  return (
    <main className="flex flex-col items-center justify-center p-8 min-h-screen bg-gradient-to-br from-yellow-100 via-white to-blue-100">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">🗣 Language Cheat Sheet</h1>
      <p className="text-lg text-gray-700 mb-8">
        Travel type: <span className="font-semibold capitalize">{type}</span>
      </p>

      <ul className="space-y-4 text-lg max-w-xl w-full bg-white p-6 rounded-xl shadow-md">
        {phrases.map((phrase, i) => (
          <li key={i} className="border-b pb-2 last:border-none">{phrase}</li>
        ))}
      </ul>

      <button
        onClick={() => window.history.back()}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        🔙 Back
      </button>
    </main>
  );
}
