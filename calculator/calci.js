let display = document.getElementById('operations');

function insertdata(data) {
  display.data += data;
}

function clear() {
  display.data = '';
}

function Result() {
  
    display.data = eval(display.data);
}
