const body = document.body;
const formUser = document.querySelector("#formInput");
const btn = document.querySelector("#btn-smt");
const hasil = document.querySelector("#hasil");

btn.addEventListener("click", function () {
  let input = formUser.value.trim();

  let checkChar = function (a) {
    if (a.includes(",")) {
      console.error("Error: Tidak Dapat Memuat 2 Nama");
      return;
    }
    if (a.includes(" ")) {
      console.error("Error: Tidak Dapat Memuat Spasi");
      return;
    }
    if (!isAlphabet(a)) {
      console.error("Error: Input Harus Berupa Huruf Saja");
      return;
    }
    let array = a.split("");
    hasil.innerHTML = "Hasil: " + array.length;
  };

  checkChar(input);
});

const isAlphabet = (str) => {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!(char >= "A" && char <= "Z") && !(char >= "a" && char <= "z")) {
      return false;
    }
  }
  return true;
};
