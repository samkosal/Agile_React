//  receives: a single artist object as a prop
//   renders: name, genre, bio, then one AlbumItem per album

function ArtistCard({name, genre, bio, albums}) {
return (
    <div>
        <h1>{name}</h1> 
        <p> {genre} </p>
        <p> {bio}</p>

        (albums.map((album) => (
            <AlbumItem key ={album.id} album = {album} />
        )))
    
    </div>

)
}

function AlbumItem({ album})  {
    return (
        <div> (album.title)</div>
    )
}