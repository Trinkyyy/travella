// src/hooks/usePhrases.ts
import { useEffect, useState } from 'react';
import PHRASES from '@/data/phrases';

export function usePhrases(type: string) {
  const [phrases, setPhrases] = useState<string[]>([]);

  useEffect(() => {
    setPhrases(PHRASES[type] || PHRASES['vacation']);
  }, [type]);

  return phrases;
}
