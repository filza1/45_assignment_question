
function make_album(artist_name:string, album_title:string, tracks?:number){
      let album:{artist:string, album:string, tracks?:number} = {
        artist:artist_name,
        album:album_title,
      };
   if(tracks !== undefined){
    album.tracks == tracks;
   }
   return album;

}
let album1 = make_album("kaifee khalil","khani suno 2.0");
let album2= make_album("Atif Asalam","Hona tha pyar");
let album3 = make_album("Talha Anjum","Why not meri jan");

console.log(album1);
console.log(album2);
console.log(album3);
