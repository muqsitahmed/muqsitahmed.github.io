THIS IS A SPOTIFY CLONE MADE USING HTML , CSS,JS SPECIAL THANKS TO CODE WITH HARRY AND HACKER RANK TO MAKE THE CONCEPTS CLEAR# muqsitahmed.github.io

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spotify - Your favourite music is here</title>
        <link rel="stylesheet" href="style.css">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
body{
    background-color: rgba(133, 5, 5, 0.808);
}

*{
    margin: 0;
    padding: 0;
}

nav{
    font-family: 'Ubuntu', sans-serif;
}

nav ul{
    display: flex;
    align-items: center;
    list-style-type: none;
    height: 65px;
    background-color: black;
    color: white;
}

nav ul li{
    padding: 0 12px;
}
.brand img{
    width: 44px;
    padding: 0 8px;
}

.brand {
    display: flex;
    align-items: center;
    font-weight: bolder;
    font-size: 1.3rem;
}

.container{
    min-height: 72vh;
    background-color: black;
    color: white;
   font-family: 'Varela Round', sans-serif;
   display: flex;
   margin: 23px auto;
   width: 70%;
   border-radius: 12px;
   padding: 34px;
   background-image: url('bg.jpg');
}



.bottom{
    position: sticky;
    bottom: 0;
    height: 130px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
}

.icons{
    margin-top: 14px; 
    
}
.icons i{
    cursor: pointer;
    padding: 10px;
}

#myProgressBar{
    width: 80vw; 
    cursor: pointer;
}

.songItemContainer{
    margin-top: 74px;
}

.songItem{
    height: 50px;
    display: flex;
    background-color: white;
    
    color: black;
    margin: 12px 0;
    justify-content: space-between;
    align-items: center;
    border-radius: 34px;
}

.songItem img{
    width: 43px;
    margin: 0 23px;
    border-radius: 34px;
}

.timestamp{
    margin: 0 23px;
}

.timestamp i{
    cursor: pointer;
}

.songInfo{
    position: absolute;
    left: 10vw;
    font-family: 'Varela Round', sans-serif;
}

.songInfo img{
    opacity: 0;
    transition: opacity 0.4s ease-in;
}

@media only screen and (max-width: 1100px) {
    body {
      background-color: red;
    }
  }
  /* You can add CSS to style the seekbar-container and seekbar-text elements as needed. */
.seekbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%; /* Adjust the width as needed */
    margin: 0 auto; /* Center the seekbar */
    
}

.seekbar-text {
    font-size: 14px; /* Adjust the font size as needed */
    color: #198171; /* Adjust the color as needed */
}
        </style>
        </head>
<body>
</body>
</html>
