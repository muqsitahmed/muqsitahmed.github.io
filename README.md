THIS IS A SPOTIFY CLONE MADE USING HTML , CSS,JS SPECIAL THANKS TO CODE WITH HARRY AND HACKER RANK TO MAKE THE CONCEPTS CLEAR# muqsitahmed.github.io

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spotify - Your favourite music is here</title>
        <link rel="stylesheet" href="style.css">
        </head>
<body>
    <nav>
        <ul>
            <li class="brand"><img src="logo.png" alt="Spotify"> Spotify</li>
            <li>Home</li>
            <li>About</li>
        </ul>
    </nav>
   

    <div class="container">
        <div class="songList">
            <h1>Best of Last -Decade Songs</h1>
            <div class="songItemContainer">
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">03:32 <i id="0" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">02:59 <i id="1" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">02:55<i id="2" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">09:08 <i id="3" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">10:27 <i id="4" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">03:50 <i id="5" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">03:23 <i id="6" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">01:00 <i id="7" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">02:18 <i id="8" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img alt="1">
                    <span class="songName">Let me Love You</span>
                    <span class="songlistplay"><span class="timestamp">00:58 <i id="9" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
            </div>
        </div>
        <div class="songBanner"></div>
    </div>

    <div class="bottom">
        <span id="songDuration" class="seekbar-text">0:00</span>
        <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100">
        <span id="currentDuration" class="seekbar-text">0:00</span>
        <div class="icons">
            <i class="fas fa-3x fa-backward" id="backwardButton"></i>
            <i class="fas fa-3x fa-step-backward" id="previous"></i>
            <i class="far fa-3x fa-play-circle" id="masterPlay"></i>
            <i class="fas fa-3x fa-step-forward" id="next"></i>           
            <i class="fas fa-3x fa-forward" id="forwardButton"></i>
        </div>
                <div class="songInfo">
                    <img src="playing.gif" width="42px" alt="" id="gif"> <span id="masterSongName">MY-Playlist</span>
                </div>
            </div>//
            

        </div>
        <div class="songInfo">
            <img src="playing.gif" width="42px" alt="" id="gif"> <span id="masterSongName">MY-Playlist</span>
        </div>
    </div>
    
    <script src="script.js"></script>
    <script src="https://kit.fontawesome.com/26504e4a1f.js" crossorigin="anonymous"></script>
</body>
</html>
