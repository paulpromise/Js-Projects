const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passwdFiledOne = document.getElementById("passOne");
let passwdFiledTwo = document.getElementById("passTwo");

function passwdButton() {
  let passwdOne = "";
  let passwdTwo = "";
  for (let i = 0; i < 16; i++) {
    let randomPasswdOne = Math.floor(Math.random() * characters.length);
    passwdOne += passwdFiledOne.textContent = characters[randomPasswdOne];
    passwdFiledOne.textContent = passwdOne;

    let randomPasswdTwo = Math.floor(Math.random() * characters.length);
    passwdTwo += passwdFiledTwo.textContent = characters[randomPasswdTwo];
    passwdFiledTwo.textContent = passwdTwo;
  }
}
