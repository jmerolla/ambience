 let isPlaying = false;
 //let themeImage = document.querySelector(".imgDisplay");
 //let playpause_btn = document.querySelector(".playPauseButton"); 
 let trackIndex = 0;

 // Create the audio element for the player 
let curr_track = document.createElement('audio'); 

 let trackList = [ 
    { 
      name: "Rain", 
      imgTag: '<img src="images/rainonwindow2-Alisonabra.jpg" alt="rain on a window">',
      path: "sounds/zapsplat_nature_rain_med_heavy_with_gentle_drips_13877.mp3",
    }, 
    { 
      name: "Fire", 
      imgTag: '<img src="images/campfire-afternoon-sunlight.jpg" alt="campfire">', 
      path: "Enthusiast.mp3",
    }, 
    { 
      name: "Water", 
      imgTag: '<img src="images/underwater-roblundeen.jpg" alt="coral reef">', 
      path: "Shipping_Lanes.mp3",
    },
    { 
      name: "Sunrise", 
      imgTag: '<img src="images/morning-bibliothekarin.jpg" alt="morning sunrise">', 
      path: "Shipping_Lanes.mp3",
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