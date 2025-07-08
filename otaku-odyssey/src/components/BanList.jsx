import React from 'react';

const BanList = ({
    bannedGenres = [],
    setBannedGenres,
    bannedTags = [],
    setBannedTags,
    bannedYears = [],
    setBannedYears,
}) => {
    const handleUnbanGenre = (genre) => {
        setBannedGenres((prev) => prev.filter((g) => g !== genre));
    };

    const handleUnbanTag = (tag) => {
        setBannedTags((prev) => prev.filter((t) => t !== tag));
    };

    const handleUnbanYear = (year) => {
        setBannedYears((prev) => prev.filter((y) => y !== year));
    };

    return (
        <div>
            <div>
                <strong>Genres:</strong>
                {bannedGenres.length === 0 ? (
                    <span> None</span>
                ) : (
                    bannedGenres.map((genre) => (
                        <button
                            key={genre}
                            onClick={() => handleUnbanGenre(genre)}
                            title={`Unban ${genre}`}
                        >
                            {genre} ❌
                        </button>
                    ))
                )}
            </div>
            <div>
                <strong>Tags:</strong>
                {bannedTags.length === 0 ? (
                    <span> None</span>
                ) : (
                    bannedTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => handleUnbanTag(tag)}
                            title={`Unban ${tag}`}
                        >
                            {tag} ❌
                        </button>
                    ))
                )}
            </div>
            <div>
                <strong>Years:</strong>
                {bannedYears.length === 0 ? (
                    <span> None</span>
                ) : (
                    bannedYears.map((year) => (
                        <button
                            key={year}
                            onClick={() => handleUnbanYear(year)}
                            title={`Unban ${year}`}
                        >
                            {year} ❌
                        </button>
                    ))
                )}
            </div>
        </div>
    );
};

export default BanList;