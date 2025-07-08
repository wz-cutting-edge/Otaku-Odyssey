import React from 'react';

const DiscoverButton = ({ onClick, loading }) => (
    <button onClick={onClick} disabled={loading}>
        {loading ? 'Rolling...' : 'Discover Anime'}
    </button>
);

export default DiscoverButton;