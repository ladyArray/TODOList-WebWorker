const btnStart = document.querySelector("#btnStart");
const btnStop = document.querySelector("#btnStop");

let worker1;
let worker2;

function start(){
  worker1 = new Worker("task1.js");
  worker1.onmessage = function(e){
    task1.innerHTML = e.data;
  }
  worker2 = new Worker("task2.js");
  worker2.onmessage = function(e){
  task2.innerHTML = e.data;
}
}

function stop(){
  worker1.terminate();
  worker2.terminate();
}

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
