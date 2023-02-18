var time = document.getElementById("time");
var start= document.getElementById("start-btn");
var stop= document.getElementById("stop-btn");
var reset= document.getElementById("reset-btn");
var starttime;
var totaltime = 0;
var timeout;

stop.disabled = true;
reset.disabled = true;
  
function displaytime() {
  var count = new Date(Date.now() - starttime + totaltime);
  var H = String(count.getHours()-9).padStart(1,'0');
  var M = String(count.getMinutes()).padStart(1,'0');
  var S = String(count.getSeconds()).padStart(1,'0');
  var MS = String(count.getMilliseconds()).padEnd(1,'0');
  
  time.textContent = `${H}:${M}:${S}.${MS}`;
  timeout =  setTimeout("displaytime()",10);
}
start.addEventListener('click',startb,false);
  function startb() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
    starttime = Date.now();
    displaytime();
  }
stop.addEventListener('click',stopb,false);
  function stopb() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
    totaltime += Date.now() - starttime;
    clearTimeout(timeout);
  }
reset.addEventListener('click',resetb,false);
  function resetb() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
    time.textContent = '0:0:0.0';
    totaltime = 0;
  }