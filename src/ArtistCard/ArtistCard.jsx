//  receives: a single artist object as a prop

export default function ArtistCard(props) {
  return (
    <div>
      <h1>{props.artist.name}</h1>
      <p>{props.artist.genre}</p>
      <p>{props.artist.bio}</p>
    </div>
  );
}

