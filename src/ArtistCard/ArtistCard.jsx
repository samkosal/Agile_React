//  receives: a single artist object as a prop
import AlbumItem from '../AlbumItem/Albumitem.jsx';
import './ArtistCard.css';

//this prop has access to artist
export default function ArtistCard(props) {
  return (
    <div className="artist-card">
      <div className="artist-card-header">
        <h2 className="artist-card-name">{props.artist.name}</h2>
        <span className="artist-card-genre">{props.artist.genre}</span>
      </div>
      <p className="artist-card-bio">{props.artist.bio}</p>
      <div className="artist-card-albums">
        <h3 className="artist-card-albums-title">Albums</h3>
        <AlbumItem albums={props.artist.albums}/>
      </div>
    </div>
  );
}

