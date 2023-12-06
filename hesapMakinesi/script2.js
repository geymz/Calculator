const calculator = document.querySelector('.calculator');

const result = document.getElementById("input-sayi");
const num = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");

const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

let sayac = 0;

num.forEach((no) => {
  no.addEventListener("click", () => {
    result.value += no.value;
  });
});

operator.forEach((ope) => {
  ope.addEventListener("click", () => {
    sayac++;
    result.value += ope.value;
/*     if (sayac >= 1) {
      ope.disabled = true;
      sayac = 0;
    }

    function testingOpe() {
      if ((result.value = num.value)) {
        ope.disabled = false;
      }
    } */
  });
});

equal.addEventListener("click", () => {
  result.value = eval(result.value);
  
  if (result.value == 1837837) {
    calculator.style.position = "absolute";
    calculator.style.top = "23%";
    calculator.style.left = "40%";
    calculator.style.transform = "rotate(180deg)";
  }

  if (result.value == 5318008) {
    calculator.style.position = "absolute";
    calculator.style.top = "23%";
    calculator.style.left = "40%";
    calculator.style.transform = "rotate(180deg)";
  }

});

clear.addEventListener("click", () => {
  result.value = "";
});
