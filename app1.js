const btn = document.querySelector("#button");
// const div=document.querySelector("#prg")
const input = document.querySelector("#textarea");
const span = document.querySelector("#span");
const p = document.querySelector("#p");

// const divText=div.innerText;
vowelCounter = (input) => {
  let count = 0;
  let arr = input.value.toLowerCase().split("");
  for (let i in arr) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "ı" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "ö" ||
      arr[i] === "u" ||
      arr[i] === "ü"
    ) {
      count += 1;
    }
  }
  return count;
};

btn.addEventListener("click", () => {
  if (!input.value) {
    alert("Please enter a centence");
  } else {
    vowelCounter(input);
  }

  p.textContent = `There are ${vowelCounter(input)} vowels in `;

  span.textContent = ` "${input.value}".`;

  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (e) => {
    if(e.code==="Enter"||e.code === "NumpadEnter"){
        btn.click();
    }
})
   