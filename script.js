const billAmount = document.querySelector("#billAmount");
const tipPer = document.querySelector("#tipPer");
const result = document.querySelector("#result");
const calculate = document.querySelector("#calculate");

calculate.onclick = function () {
  const tipValue = parseFloat(tipPer.value);
  const billValue = parseFloat(billAmount.value);

  const sonuc = billValue + billValue * (tipValue / 100);
  result.innerHTML = sonuc +"$";
};
