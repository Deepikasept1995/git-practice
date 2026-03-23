const display = document.getElementById("display");
const operators = ["+", "-", "*", "/", "%"];

function appendValue(value) {
  const current = display.value;
  const lastChar = current[current.length - 1];

  const isValueOperator = operators.includes(value);
  const isLastCharOperator = operators.includes(lastChar);

  if (current === "" && isValueOperator) {
    return;
  }

  if (isValueOperator && isLastCharOperator) {
    return;
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const lastChar = display.value[display.value.length - 1];

    if (operators.includes(lastChar)) {
      return;
    }

    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}