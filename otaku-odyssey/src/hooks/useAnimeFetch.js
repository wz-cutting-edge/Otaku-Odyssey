import { useState, useEffect, useCallback } from 'react';
import { fetchAnime } from '../utils/anilistAPI.js';

export function useAnimeFetch({ bannedGenres = [], bannedTags = [], bannedYears = [] } = {}) {
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAnime = useCallback(async () => {
    setLoading(true);
    setError(null);
    let retries = 0;
    const maxRetries = 10;
    try {
      while (retries < maxRetries) {
        const randomPage = Math.floor(Math.random() * 100) + 1;
        const result = await fetchAnime({
          page: randomPage,
          perPage: 1,
          bannedGenres,
          bannedTags
        });
        const animeResult = result[0];
        const year = animeResult?.startDate?.year;
        if (!bannedYears.includes(year)) {
          setAnime(animeResult);
          return;
        }
        retries++;
      }
      setError('No anime found that is not banned by year.');
      setAnime(null);
    } catch (err) {
      setError(err.message);
      setAnime(null);
    } finally {
      setLoading(false);
    }
  }, [bannedGenres, bannedTags, bannedYears]);

  useEffect(() => {
    getAnime();
  }, []);

  return { anime, loading, error, refetch: getAnime };
}