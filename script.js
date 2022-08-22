//initializing the variables

let songIndex = 0;
let audioElement = new Audio ('songs/1.mp3');
let masterPlay = document.getElementById ('masterPlay');
let Previous = document.getElementById ('Previous');
let Next = document.getElementById ('Next');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let masterLastTime = document.getElementById('masterLastTime');
let songs = [
    {SongName: "Save your tears" , filepath: 'songs/1.mp3', endtime: "03:36"},
    {SongName: "Blinding lights" , filepath: 'songs/2.mp3', endtime: "03:19"},
    {SongName: "Star Boy" , filepath: 'songs/3.mp3', endtime: "03:47"},
    {SongName: "Call out my name" , filepath: 'songs/4.mp3', endtime: "03:48"},
    {SongName: "Take my breath" , filepath: 'songs/5.mp3', endtime: "03:44"},
]

//handel play/pause click
masterPlay.addEventListener ('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove ('fa-circle-play');
        masterPlay.classList.add ('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove ('fa-circle-pause');
        masterPlay.classList.add ('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Event Listeners on timeupdate
audioElement.addEventListener ('timeupdate', ()=>{
    //updating the seekbar
    progress = parseInt ((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

    //sekking the audio with the manually changed progressbar
    myProgressBar.addEventListener ('change', ()=>{
        audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100); //from the above formula
    })
})

//Next and Previous functionalities

document.getElementById('Next').addEventListener('click', ()=>{
    if(songIndex >=5 ){
        songIndex = 0;
    }
    else{
        songIndex = songIndex + 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].SongName;
    masterLastTime.innerText = songs[songIndex].endtime;
    masterPlay.classList.remove ('fa-circle-play');
    masterPlay.classList.add ('fa-circle-pause');
})

document.getElementById('Previous').addEventListener('click', ()=>{
    if(songIndex <=0 ){
        songIndex = 0;
    }
    else{
        songIndex = songIndex - 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].SongName;
    masterPlay.classList.remove ('fa-circle-play');
    masterPlay.classList.add ('fa-circle-pause');
})