
let number = 200;

function count(){
  setTimeout(() => {
    number += 5;
    postMessage("Adios, " + number);
    count();
  }, 1000);
}

count();
