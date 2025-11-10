const display = document.getElementById("display");
const themeSwitch = document.getElementById("themeSwitch");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert("Invalid Expression");
  }
}

// Theme Toggle
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeSwitch.checked);
});
