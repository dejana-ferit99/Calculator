var results = document.getElementById('results');

function appendSymbol(symbol) {
    const resultInput = document.getElementById('results');
    resultInput.value += symbol;
    results.innerHTML = resultInput.value;
    console.log(symbol);
}
function Result(){
  var num1 = document.getElementById('results').value;
  var num2 = eval(num1);
  document.getElementById('results').value =  num2;
}
function Clear(){
  var input = document.getElementById('results');
  input.value='';
}

