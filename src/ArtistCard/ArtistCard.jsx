//  receives: a single artist object as a prop
//   renders: name, genre, bio, then one AlbumItem per album

function ArtistCard({ artist }) {
  return (
    <div>
      <h1>{artist.name}</h1>
      <p>{artist.genre}</p>
      <p>{artist.bio}</p>

      {artist.albums.map((album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </div>
  );
}

function AlbumItem({ album }) {
  return (
    <div>
      <h3>{album.title}</h3>
    </div>
  );
}

export default ArtistCard;