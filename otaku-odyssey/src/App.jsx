import { useState } from 'react';
import './App.css';
import HistoryList from './components/HistoryList.jsx';
import AnimeCard from './components/AnimeCard.jsx';
import BanList from './components/BanList.jsx';
import DiscoverButton from './components/DiscoverButton.jsx';
import { useAnimeFetch } from './hooks/useAnimeFetch.js';

function App() {
  const [history, setHistory] = useState([]);
  const [bannedGenres, setBannedGenres] = useState([]);
  const [bannedTags, setBannedTags] = useState([]);
  const [bannedYears, setBannedYears] = useState([]);
  const { anime, loading, error, refetch } = useAnimeFetch({ bannedGenres, bannedTags, bannedYears });

  const addToHistory = (anime) => {
    setHistory((prev) => (prev.some((a) => a.id === anime.id) ? prev : [anime, ...prev]));
  };

  const handleDiscover = () => {
    if (anime) addToHistory(anime);
    refetch();
  };

  return (
    <div className="parent">
      <div className="history">
        <h3>History</h3>
        <HistoryList images={history} />
      </div>

      <div className="generator">
        <h2>AniGamba</h2>
        <p>Roll For Anime</p>
        <DiscoverButton onClick={handleDiscover} loading={loading} />
        {anime && (
          <AnimeCard
            anime={anime}
            onBanGenre={(genre) =>
              setBannedGenres((prev) =>
                prev.includes(genre) ? prev : [...prev, genre]
              )
            }
            onBanTag={(tag) =>
              setBannedTags((prev) =>
                prev.includes(tag) ? prev : [...prev, tag]
              )
            }
            onBanYear={(year) =>
              setBannedYears((prev) =>
                prev.includes(year) ? prev : [...prev, year]
              )
            }
          />
        )}
        {error && <div>{error}</div>}
      </div>

      <div className="banList">
        <h3>Ban List</h3>
        <BanList
          bannedGenres={bannedGenres}
          setBannedGenres={setBannedGenres}
          bannedTags={bannedTags}
          setBannedTags={setBannedTags}
          bannedYears={bannedYears}
          setBannedYears={setBannedYears}
        />
      </div>
    </div>
  );
}

export default App;