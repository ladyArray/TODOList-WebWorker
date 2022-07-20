
let number = 100;

function count(){
  setTimeout(() => {
    number += 5;
    postMessage("Hola, " + number);
    count();
  }, 1000);
}

count();
