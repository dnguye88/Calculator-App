//Calculator Functions

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

//Delete the last value input into the display
function deleteValue() {
  display.value = display.value.slice(0, -1);
}
