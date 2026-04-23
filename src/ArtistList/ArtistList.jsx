import ArtistCard from '../ArtistCard/ArtistCard.jsx'

export default function ArtistList(prop) {
    const artist = prop.data.artists;
    const artistEntry = artist.map((entry) =>{
        return (
            <>
                <ArtistCard key={entry.id} artist={entry} />
            </>
        )
    })

    return artistEntry;

}