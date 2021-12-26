
import Player from'@vimeo/player';
import throttle from "lodash/throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
 console.log(iframe);
 console.log(player);


const idPlayer = new Vimeo.Player('vimeo-player');


// const onPlay = function(idPlayer) {
//     {
//         duration: 61.857
//         percent: 0
//         seconds: 0
//     }
    
//     // data is an object containing properties specific to that event
// };

// player.on('timeupdate', throttle () => {
//     player.getTime().then((sec)=>{
//         console.log(sec);

//     localStorage.setItem("videoplayer-current-time",JSON.stringify(sec));
// }),
// },1000);

// const startTime= 
// JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0;
// console.log(startTime);
// player.getTime(startTime);

//     function videoStart(startTime){
//         console.log(startTime);
//     }