import './AlbumItem.css';

export default function AlbumItem(props) {
  return (
    <ul className="album-list">
      {props.albums.map((album, idx) => (
        <li key={idx} className="album-item">
          <span className="album-title">{album.title}</span>
          <span className="album-year">{album.year}</span>
        </li>
      ))}
    </ul>
  );
}


