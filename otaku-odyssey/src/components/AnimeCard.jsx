import React from 'react';

const AnimeCard = ({ anime, onBanGenre, onBanTag, onBanYear }) => {
    if (!anime) return null;

    const year = anime.startDate?.year;

    return (
        <div className="anime-card">
            <h2>{anime.title?.romaji || anime.title?.english || 'Untitled'}</h2>
            <img
                className="anime-card-img"
                src={anime.coverImage?.large}
                alt={anime.title?.romaji || 'Anime cover'}
                width={200}
            />
            <div>
                <strong>Genres:</strong>
                {anime.genres?.map((genre) => (
                    <button
                        key={genre}
                        onClick={() => onBanGenre(genre)}
                        title={`Ban ${genre}`}
                    >
                        🚫 {genre}
                    </button>
                ))}
            </div>
            <div>
                <strong>Tags:</strong>
                {anime.tags?.map((tag) => (
                    <button
                        key={tag.name}
                        onClick={() => onBanTag(tag.name)}
                        title={`Ban ${tag.name}`}
                    >
                        🚫 {tag.name}
                    </button>
                ))}
            </div>
            <div>
                <strong>Year:</strong>
                {year && (
                    <button
                        onClick={() => onBanYear(year)}
                        title={`Ban ${year}`}
                    >
                        🚫 {year}
                    </button>
                )}
            </div>
        </div>
    );
};

export default AnimeCard;