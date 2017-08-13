// Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

 // Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 var albumArtifact = {
   title: 'Artifact',
   artist: 'Sound Tribe Sector 9',
   label: '1320 Records',
   year: '2005',
   albumArtUrl: 'assets/images/album_covers/artifact.png',
   songs: [
     {title: 'musical story, yes', duration: '0:28'},
     {title: 'Better Day', duration: '4:49'},
     {title: 'By The Morning Sun', duration: '3:35'},
     {title: 'Tokyo', duration: '7:03'},
     {title: 'ARTiFACT', duration: '2:12'},
     {title: 'Native End', duration: '4:31'},
     {title: 'ReEmergence', duration: '5:01'},
     {title: 'People', duration: '4:19'},
     {title: 'GLOgli', duration: '5:20'},
     {title: 'Today', duration: '4:31'},
     {title: 'Tonight the Ocean Swallowed the Moon', duration: '2:51'},
     {title: 'Forest Hu', duration: '0:50'},
     {title: 'Somesing', duration: '6:49'},
     {title: 'Trinocular', duration: '4:44'},
     {title: 'Vibyl', duration: '3:00'},
     {title: '8 & a extra', duration: '1:28'},
     {title: 'Possibilites', duration: '3:45'},
     {title: 'Peoples part II', duration: '4:02'},
     {title: 'first mist over Clear Lake', duration: '0:56'},
     {title: 'Music, Us', duration: '3:11'},
     {title: 'Bonus: Tokyo (radio edit)', duration: '4:04'},
   ]
 };


 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

      return template;
 };

 var albumTitle = document.getElementsByClassName('album-view-title')[0];
 var albumArtist = document.getElementsByClassName('album-view-artist')[0];
 var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
 var albumImage = document.getElementsByClassName('album-cover-art')[0];
 var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

 var setCurrentAlbum = function(album) {
     // #1


     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);

     // #3
     albumSongList.innerHTML = '';

     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };


 window.onload = function() {
     setCurrentAlbum(albumPicasso);

     var albums = [albumPicasso, albumMarconi, albumArtifact];
     var index = 1;

     albumImage.addEventListener("click", function(event) {
       setCurrentAlbum(albums[index]);
       index++;
       if (index == albums.length) {
         index = 0;
       }
     });
 };
