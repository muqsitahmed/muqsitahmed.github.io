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
    {songName: "Faded", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Jai-HO", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Sare-jahan-se-accha", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "man-ama-de-am", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tajdar-e-haram", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Mortal", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Geeta-govindam", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Jashne e bahara", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Mahesh", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tum hi ho", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
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
// Function to move forward 10 seconds
function forward10Seconds() {
    audioElement.currentTime += 10;
}

// Function to move backward 10 seconds
function backward10Seconds() {
    audioElement.currentTime -= 10;
}
// Add event listeners for forward and backward buttons
document.getElementById('forwardButton').addEventListener('click', forward10Seconds);
document.getElementById('backwardButton').addEventListener('click', backward10Seconds);


// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
// Update Seekbar and Song Duration
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

    // Update Song Duration
    const durationMinutes = Math.floor(audioElement.duration / 60);
    const durationSeconds = Math.floor(audioElement.duration % 60);
    const formattedDuration = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
    document.getElementById('songDuration').textContent = formattedDuration;

    // Update Current Running Duration
    const currentMinutes = Math.floor(audioElement.currentTime / 60);
    const currentSeconds = Math.floor(audioElement.currentTime % 60);
    const formattedCurrentDuration = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
    document.getElementById('currentDuration').textContent = formattedCurrentDuration;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});


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
// Add an event listener to each song item to play the corresponding song
songItems.forEach((element, index) => {
    element.addEventListener('click', () => {
        playSong(index);
    });
});
