
import Player from'@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
 console.log(iframe);
 console.log(player);






player.on('timeupdate',
  throttle(() => {
  player.getCurrentTime().then(sec => {
    localStorage.setItem("current-time", JSON.stringify(sec));
    console.log(sec)
  });
}, 1000),
);

const startTime= 
JSON.parse(localStorage.getItem('current-time'));
console.log(startTime);
player.setCurrentTime(startTime);

    function videoStart(startTime){
        console.log(startTime);
    }