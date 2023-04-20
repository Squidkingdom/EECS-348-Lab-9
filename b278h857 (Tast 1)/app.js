const timer = document.querySelector('#timer');

const settings = document.querySelector('#settings');

settings.addEventListener('click', () => {
  var x = document.getElementById("setblock");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});


function saveColor(color){
  document.cookie = "color="+color;
}

function loadColor(){
  let x = document.cookie;
  if(x.includes('color=')){
    updateColor(x.split('color=')[1]);
    document.querySelector('#grid-color').value = x.split('color=')[1];
  }
}

function updateColor(color) {
  timer.style.color = color;
  saveColor(color);
}

function updateTextSize(size) {
  timer.style.fontSize = size+'px';
}
function updateClock() {
  const now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();

  hours = String(hours).padStart(2,"0")
  minutes = String(minutes).padStart(2,"0")
  

  const time = `${hours}:${minutes}`;
 
  timer.innerHTML = time;
}

setInterval(updateClock(), 6000);
updateClock();