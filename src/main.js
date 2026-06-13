let head = document.querySelector(".calc-head");
//=======================
let nums = document.querySelectorAll("#num");
//========================
let operations = document.querySelectorAll(".method");
//========================
let equal = document.querySelector(".equal");
//========================
let btnDelete = document.querySelector(".delete");
//=========================
let clear = document.querySelector(".clear");
//=========================
let checkdot = document.getElementById("dot");
let firstValue;
let operation;

nums.forEach((num) => {
  num.addEventListener("click", () => {
    let numValue = num.innerHTML;
    head.innerHTML += numValue;
  });
});

function deleteLastNum() {
  head.innerHTML = head.innerHTML.toString().slice(0, -1);
}
btnDelete.addEventListener("click", deleteLastNum);

function clearAll() {
  head.innerHTML = "";
}
clear.addEventListener("click", clearAll);

operations.forEach((operat) => {
  operat.addEventListener("click", () => {
    firstValue = head.innerHTML;
    operation = operat.innerHTML;
    head.innerHTML = "";
  });
});
equal.addEventListener("click", () => {
  let firstNum = parseFloat(firstValue);
  let currentOperation = operation;
  let secondNum = head.innerHTML;
  let totalValue;
  if (firstNum.toString() === "" || currentOperation === "" || head.innerHTML === "")
    return;
  if (currentOperation === "+") {
    totalValue = firstNum + parseFloat(secondNum);
  } else if (currentOperation === "%") {
    if (parseFloat(secondNum) === 0) {
      head.innerHTML ="Error"
    } else {
      totalValue = firstNum / parseFloat(secondNum);
    }
  } else if (currentOperation == "\u00D7" /*\u00D7*/) {
    totalValue = firstNum * parseFloat(secondNum);
  } else if (currentOperation === "-") {
    totalValue = firstNum - parseFloat(secondNum);
  }
  head.innerHTML = totalValue.toLocaleString("en-US");
  firstNum = "";
  operation = "";
});
function dot() {
  if (head.innerHTML === "") {
    head.innerHTML = "0.";
  } else if (head.innerHTML.includes(".")) {
    return;
  } else {
    head.innerHTML += ".";
  }
}
checkdot.addEventListener("click", () => {
  dot();
});
