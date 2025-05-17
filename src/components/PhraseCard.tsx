// src/components/PhraseCard.tsx
import React from 'react';

interface PhraseCardProps {
  phrase: string;
}

export default function PhraseCard({ phrase }: PhraseCardProps) {
  return (
    <li className="px-4 py-3 bg-white rounded-xl shadow hover:shadow-lg transition-all text-gray-800 border-b last:border-none">
      {phrase}
    </li>
  );
}
