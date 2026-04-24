import ArtistCard from '../ArtistCard/ArtistCard.jsx';
import './ArtistList.css';

export default function ArtistList(prop) {
    const artist = prop.data.artists;
    return (
        <section className="artist-list">
            <h2 className="artist-list-title">Our Artists</h2>
            <div className="artist-list-grid">
                {artist.map((entry) => (
                    <ArtistCard key={entry.id} artist={entry} />
                ))}
            </div>
        </section>
    );
}