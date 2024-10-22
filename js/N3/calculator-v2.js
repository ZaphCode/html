const btnContainer = document.getElementById("btn-container");
const historyContainer = document.getElementById("history");
const display = document.getElementById("display");
let resetMode = false;
let operationString = "";

const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  "C",
  "=",
  "+",
];

for (let btn of buttons) {
  const button = document.createElement("button");
  button.innerText = btn;
  button.className =
    "bg-slate-300 hover:bg-gray-400 text-gray-800 font-bold py-3 m-1 px-4 rounded";

  button.addEventListener("click", () => {
    if (btn === "=") {
      makeOperation();
    } else if (btn === "C") {
      reset();
    } else {
      addOperation(btn);
    }

    display.innerText = operationString;
  });

  btnContainer.appendChild(button);
}

function makeOperation() {
  try {
    const result = eval(operationString);
    const p = document.createElement("p");
    p.innerText = operationString + " = " + result;
    historyContainer.appendChild(p);
    operationString = result;
  } catch (error) {
    operationString = "Error";
    resetMode = true;
  }
}

function reset() {
  operationString = "";
}

function addOperation(btn) {
  if (resetMode) {
    operationString = "";
    resetMode = false;
  }
  operationString += btn;
}
