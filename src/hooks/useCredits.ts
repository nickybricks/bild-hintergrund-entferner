import { useState, useEffect, useCallback } from 'react';

const CREDITS_KEY = 'hd_credits';
const TOKEN_KEY = 'credits_token';

export function useCredits() {
  const [credits, setCredits] = useState<number>(() => {
    const stored = localStorage.getItem(CREDITS_KEY);
    return stored ? parseInt(stored, 10) : 0;
  });

  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem(TOKEN_KEY)
  );

  useEffect(() => {
    localStorage.setItem(CREDITS_KEY, String(credits));
  }, [credits]);

  useEffect(() => {
    if (token) localStorage.setItem(TOKEN_KEY, token);
  }, [token]);

  const consumeCredit = useCallback(() => {
    setCredits((c) => Math.max(0, c - 1));
  }, []);

  const addCredits = useCallback((amount: number, newToken?: string) => {
    setCredits((c) => c + amount);
    if (newToken) setToken(newToken);
  }, []);

  return { credits, token, consumeCredit, addCredits };
}
