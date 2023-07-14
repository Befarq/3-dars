let suz = document.getElementById("suz");
let inputEl = document.getElementById("user-word");
let ochko = document.querySelector("span");
let timeEl = document.getElementById("time");
let modal = document.getElementById("modal");
let points = 0;
let userTime = 10;
let randomWord;
let userName = "";
let forma = document.getElementById("forma");
let fon = document.createElement("div");
fon.id = "fon";
document.body.style.overflowY = "hidden";
document.body.append(fon);
modal.style.display = "inline-block";
let button_1 = document.createElement("button");
button_1.textContent = `Let's GO`;
let button_2 = document.createElement("button");
let ismi = document.createElement("input");
ismi.type = "text";
ismi.placeholder = "Ismingiz";
forma.append(ismi);
ismi.focus();
forma.append(button_1);
button_1.addEventListener(
  "click",
  (game = (e) => {
    e.preventDefault();
    userName = ismi.value;
    fon.style.display = "none";
    modal.style.display = "none";
    forma.innerHTML = ``;
    const timeInterval = setInterval(() => {
      if (userTime > 0) {
        timeEl.textContent = `${userTime}S`;
        userTime--;
      } else {
        clearInterval(timeInterval);
        fon.style.display = "block";
        modal.style.display = "flex";
        let youLoose = document.createElement("h1");
        youLoose.textContent = `${userName},You Loose`;
        let ball = document.createElement("h3");
        ball.textContent = points;
        forma.append(youLoose);
        forma.append(button_1);
        button_1.textContent = `Yana o'ynash`;
        button_1.addEventListener("click", () => {
          userTime = 10;
          points = 0;
          inputEl.focus();
        });
        forma.append(button_2);
        button_2.textContent = `Chiqish`;
        button_2.addEventListener("click", () => {
          window.close();
        });
      }
    }, 1000);
  })
);
inputEl.focus();

const suzAlmash = () => {
  randomWord = words[Math.trunc(Math.random() * words.length)];
  suz.textContent = randomWord;
};

suzAlmash();
inputEl.addEventListener("input", (e) => {
  if (inputEl.value == randomWord) {
    points++;
    ochko.textContent = points;
    suzAlmash();
    inputEl.value = "";
    userTime += 3;
  }
});
