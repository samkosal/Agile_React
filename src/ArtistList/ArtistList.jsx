import ArtistCard from 'src/ArtistCard/ArtistCard.jsx'

export default function ArtistList(prop) {
    const artistEntry = prop.artists.map((entry) =>{
        return (
            <>
                <ArtistCard 
                    id={entry.id}
                    name={entry.name}
                    genre={entry.genre}
                    bio={entry.bio}
                    albums={entry.albums}
                />
            </>
        )
    })

}