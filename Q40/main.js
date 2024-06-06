function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        album: album_title,
    };
    if (tracks !== undefined) {
        album.tracks == tracks;
    }
    return album;
}
var album1 = make_album("kaifee khalil", "khani suno 2.0");
var album2 = make_album("Atif Asalam", "Hona tha pyar");
var album3 = make_album("Talha Anjum", "Why not meri jan");
console.log(album1);
console.log(album2);
console.log(album3);
