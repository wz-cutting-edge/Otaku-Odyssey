import React from 'react';

const HistoryList = ({ images = [] }) => {
    return (
        <div>
            {images.length === 0 ? (
                <p>No history yet.</p>
            ) : (
                images.map((img, idx) => (
                    <div className="history-list-item" key={idx}>
                        <img
                            src={img.coverImage?.large}
                            alt={img.title?.romaji || 'Anime'}
                            width={100}
                        />
                        <div>{img.title?.romaji}</div>
                    </div>
                ))
            )}
        </div>
    );
};

export default HistoryList;