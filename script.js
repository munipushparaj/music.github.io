console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "yetupone", filePath: "songs/1.mp3", coverPath: "Piano Music Notes Clipart Transparent PNG Hd, Music Note Wing Icon Design Template Vector Isolated, Music Icons, Note Icons, Template Icons PNG Image For Free Download.jpeg"},
    {songName: "Bangala katatham-pk", filePath: "songs/10.mp3", coverPath: "images/mu1.jpg"},
    {songName: "Jalsa-pk", filePath: "songs/2.mp3", coverPath: "Piano Music Notes Clipart Transparent PNG Hd, Music Note Wing Icon Design Template Vector Isolated, Music Icons, Note Icons, Template Icons PNG Image For Free Download.jpeg"},
    {songName: "mustafa", filePath: "songs/3.mp3", coverPath: "images/mu1.jpg"},
    {songName: "tuli-tuli-u1", filePath: "songs/4.mp3", coverPath: "Piano Music Notes Clipart Transparent PNG Hd, Music Note Wing Icon Design Template Vector Isolated, Music Icons, Note Icons, Template Icons PNG Image For Free Download.jpeg"},
    {songName: "thum hi ho-arijith", filePath: "songs/5.mp3", coverPath: "images/mu1.jpg"},
    {songName: "gallo thelinattundhey-pk", filePath: "songs/6.mp3", coverPath: "Piano Music Notes Clipart Transparent PNG Hd, Music Note Wing Icon Design Template Vector Isolated, Music Icons, Note Icons, Template Icons PNG Image For Free Download.jpeg"},
    {songName: "wave", filePath: "songs/12.mp3", coverPath: "images/mu1.jpg"},
     {songName: "nidarekala-ssk", filePath: "songs/8.mp3", coverPath: "images/mu1.jpg"},
    {songName: "nuvvu leka-ssk", filePath: "songs/9.mp3", coverPath: "Piano Music Notes Clipart Transparent PNG Hd, Music Note Wing Icon Design Template Vector Isolated, Music Icons, Note Icons, Template Icons PNG Image For Free Download.jpeg"},
    {songName: "gallo thelinattundhy-ssk", filePath: "songs/11.mp3", coverPath: "images/mu1.jpg"},
     ]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})