function calculate() {
  const a = parseFloat(prompt("Ingrese el siguiente número: "));
  const operation = prompt("Elija la operación (+, -, *, /): ");
  const b = parseFloat(prompt("Ingrese el segundo número: "));

  // Forma fácil y rápida para toda la familia
  // const operations = {
  //   "+": sum,
  //   "-": subtract,
  //   "*": multiply,
  //   "/": divide,
  // };

  // if (!(operation in operations)) return alert("Operación no válida");
  // const result = operations[operation](num1, num2);

  // if (result) {
  //   console.log("Resultado:", result);
  //   alert(`El resultado es ${result}`);
  // }

  let result;

  switch (operation) {
    case "+":
      result = sum(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
      alert("Operación no válida");
      break;
  }

  if (result) {
    console.log("Resultado:", result);
    alert(`El resultado es ${result}`);
  }
}

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) return alert("No se puede dividir entre 0");
  return a / b;
};
