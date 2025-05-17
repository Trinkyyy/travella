// src/components/CheatSheetPreview.tsx
import React from 'react';
import PhraseCard from './PhraseCard';

interface CheatSheetPreviewProps {
  type: string;
  phrases: string[];
}

export default function CheatSheetPreview({
  type,
  phrases,
}: CheatSheetPreviewProps) {
  return (
    <section className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        🗂 Cheat Sheet for <span className="capitalize">{type}</span>
      </h2>
      <ul className="space-y-3">
        {phrases.map((phrase, index) => (
          <PhraseCard key={index} phrase={phrase} />
        ))}
      </ul>
    </section>
  );
}
