
  let display = document.getElementById("displayresult");
  let buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click",function() {
      let btnValue = button.textContent;

      if (btnValue === "C") {
        display.value = "";
      } else if (btnValue === "=") {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Error";
        }
      } else {
        display.value += btnValue;
      }
    });
  });

