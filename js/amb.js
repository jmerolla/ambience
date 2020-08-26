 let isPlaying = false;
 //let themeImage = document.querySelector(".imgDisplay");
 //let playpause_btn = document.querySelector(".playPauseButton"); 
 let trackIndex = 0;

 // Create the audio element for the player 
let curr_track = document.createElement('audio'); 

//TO-DO!!!!!!! Update file paths!!!!!!!!!!!!!!
let logoList = [
  {
    name: "RainLogo",
    logoTag: '<img src="images/Logo/RainLogo.png" alt="Ambience">',
    bgStyle: 'linear-gradient(0deg, #797D62, #9B9B7A, #D9AE94, #F1DCA7, #FFCB69, #D08C60, #997B66, #585123, #723D46, #472D30)',
  },
  {
    name: "FireLogo", 
    logoTag: '<img src="images/Logo/FireLogo.png" alt="Ambience">',
    bgStyle: 'linear-gradient(0deg, #7400bb, #6930c3, #5e60ce, #5390d9, #4ea8de, #48bfe3, #56cfe1, #64dfdf, #4acfbc, #00a475)',
  },
  {
    name: "WaterLogo",
    logoTag: '<img src="images/Logo/WaterLogo.png" alt="Ambience">',
    bgStyle: 'linear-gradient(0deg, #7400bb, #6930c3, #5e60ce, #5390d9, #4ea8de, #48bfe3, #56cfe1, #64dfdf, #4acfbc, #00a475)',
  },
  {
    name: "SunsetLogo",
    logoTag: '<img src="images/Logo/SunsetLogo.png" alt="Ambience">',
    bgStyle: 'linear-gradient(0deg, #7400bb, #6930c3, #5e60ce, #5390d9, #4ea8de, #48bfe3, #56cfe1, #64dfdf, #4acfbc, #00a475)',
  },

]

let trackList = [ 
    { 
      name: "Rain", 
      imgTag: '<img src="images/rainonwindow2-Alisonabra.jpg" alt="rain on a window">',
      path: "sounds/zapsplat_nature_rain_med_heavy_with_gentle_drips_13877.mp3",
    }, 
    { 
      name: "Fire", 
      imgTag: '<img src="images/campfire-afternoon-sunlight.jpg" alt="campfire">', 
      path: "sounds/audio_hero_FireMediumRoarHiss_PE052201_358.mp3",
    }, 
    { 
      name: "Water", 
      imgTag: '<img src="images/underwater-roblundeen.jpg" alt="coral reef">', 
      path: "sounds/zapsplat_nature_ocean_waves_gentle_lap_against_rocks_dist_surf_35568.mp3",
    },
    { 
      name: "Sunrise", 
      imgTag: '<img src="images/morning-bibliothekarin.jpg" alt="morning sunrise">', 
      path: "sounds/gain_walkers_Countryside_Spring_Morning_Birds_Insects_Bumblebee.mp3",
      },
];


function loadTrack(track_index) { 
    // Clear the previous seek timer 
    //clearInterval(updateTimer); 
    resetValues(); 
    
    // Load a new track 
    curr_track.src = trackList[track_index].path; 
    curr_track.load(); 
    //curr_track.loop = true;
    // Update details of the track  
    document.getElementById("imgDisplay").innerHTML = trackList[track_index].imgTag; 
    
    // Set an interval of 1000 milliseconds 
    // for updating the seek slider 
    //updateTimer = setInterval(seekUpdate, 1000); 
    
    // Move to the next track if the current finishes playing 
    // using the 'ended' event 
    curr_track.addEventListener("ended", function(){
      curr_track.play()
    }); 
    
    // Apply a random background color 
    //random_bg_color(); 
} 

  // Functiom to reset all values to their default 
function resetValues() { 
    //curr_time.textContent = "00:00"; 
    //total_duration.textContent = "00:00"; 
    var slider= document.getElementById("playTimeSlider");
    slider.value = 0; 
} 
    
function changeSlide() {
    var slider= document.getElementById("playTimeSlider");
    slider.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + slider.value + '%, #fff ' + slider.value + '%, white 100%)';
  
}
    
function playPauseTrack() { 
   // Switch between playing and pausing 
  // depending on the current state 
  if (!isPlaying){
    playTrack(); 
            
  }else{
    pauseTrack(); 
  };
        
  //isPlaying= !isPlaying;
  console.log(isPlaying);
} 

function playTrack() { 
  // Play the loaded track 
  //curr_track.play(); 
  curr_track.play();
  isPlaying = true; 
        
  // Replace icon with the pause icon 
  document.getElementById("playPauseButton").innerHTML = '<i class="fas fa-pause-circle"></i>';
} 
        
function pauseTrack() { 
  // Pause the loaded track 
   curr_track.pause(); 
   isPlaying = false; 
        
    // Replace icon with the play icon 
    document.getElementById("playPauseButton").innerHTML = '<i class="fas fa-play-circle"></i>';
    } 

// Load the first track in the tracklist 
loadTrack(trackIndex); 

function changeTheme(themeID){
  console.log(themeID);
  var logoId=0;
  document.getElementById("bgColor").removeAttribute('class');
  if(themeID == "fireButton"){
    logoId =1;
    
  }else if (themeID =="underwaterButton"){
    logoId=2;
  }else if (themeID =="sunriseButton"){
    logoId=3; 
  }else{
    logoId=0;
   
    document.getElementById("bgColor").classList.add("rainGrad");

  }
  document.getElementById("logo").innerHTML = logoList[logoId].logoTag;
  document.getElementById("imgDisplay").innerHTML = trackList[logoId].imgTag; 
  document.getElementById("bgColor").classList.add("bgAnimation");
  pauseTrack();
  curr_track.src = trackList[logoId].path;
  playTrack();

 
}