const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passEl1 = document.getElementById("pass-el1");
let passEl2 = document.getElementById("pass-el2");
let passBtn = document.getElementById("passBtn");
let clearBtn = document.getElementById("clearBtn");

passBtn.addEventListener("click", function () {
  for (let i = 0; i < 15; i++) {
    let randompass1 = Math.floor(Math.random() * characters.length);
    let randompass2 = Math.floor(Math.random() * characters.length);

    passEl1.value += characters[randompass1];
    passEl2.value += characters[randompass2];
  }
});
clearBtn.addEventListener("click", function () {
  passEl1.value = "";
  passEl2.value = "";
});

function copyPassword() {
  let copyText = passEl1;
  if (copyText.value) {
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("copied password:" + copyText.value);
  }
}
