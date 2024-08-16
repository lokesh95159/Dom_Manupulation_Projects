let button = document.querySelector(".mode");
let body = document.querySelector("body");
let title = document.querySelector("results");
let mode = "dark";
button.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    body.classList.add(mode);
    body.classList.remove("light");
    button.innerText = "Light";
  } else {
    mode = "light";
    body.classList.add(mode);
    body.classList.remove("dark");
    button.innerText = "Dark";
  }
});
const list = [
  [9, 9, 9],
  [9, 9, 9],
  [9, 9, 9],
];
let check = (list) => {
  let l0 = 0,
    l1 = 0,
    r0 = 0,
    r1 = 0;
  for (let i = 0; i < 3; i++) {
    let row0 = 0,
      row1 = 0,
      col0 = 0,
      col1 = 0;
    for (let j = 0; j < 3; j++) {
      if (list[i][j] === 0) row0++;
      if (list[i][j] === 1) row1++;
      if (list[j][i] === 0) col0++;
      if (list[j][i] === 1) col1++;
    }
    if (row0 === 3 || col0 === 3) return 0;
    if (row1 === 3 || col1 === 3) return 1;
    if (list[i][i] === 0) l0++;
    if (list[i][i] === 1) l1++;
    if (list[i][2 - i] === 0) r0++;
    if (list[i][2 - i] === 1) r1++;
  }
  if (l0 === 3 || r0 === 3) return 0;
  if (l1 === 3 || r1 === 3) return 1;
  return 9;
};

let reset = (list) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      list[i][j] = 9;
    }
  }
  track = 0;
};

let boxele = document.querySelectorAll(".box");
let resbox = document.querySelector(".resbox");
let track = 0;

boxele.forEach((box, index) => {
  box.addEventListener("click", () => {
    let row = Math.floor(index / 3);
    let col = index % 3;
    if (list[row][col] === 9) {
      if (track % 2 === 0) {
        list[row][col] = 0;
        box.innerText = "X";
      } else {
        list[row][col] = 1;
        box.innerText = "O";
      }
      track += 1;
      let che = check(list);
      if (che === 0) {
        resbox.innerHTML = "<h2 style='margin-top: 3rem'>X is the winner</h2>";
        reset(list);
        boxele.forEach((box) => {
          box.innerText = "";
        });
      } else if (che === 1) {
        resbox.innerHTML = "<h2 style='margin-top: 3rem'>O is the winner</h2>";
        reset(list);
        boxele.forEach((box) => {
          box.innerText = "";
        });
      } else if (track === 9) {
        resbox.innerHTML = "<h2 style='margin-top: 3rem'>Match is Tie</h2>";
        reset(list);
        boxele.forEach((box) => {
          box.innerText = "";
        });
      }
    }
  });
});

let res = document.querySelector(".stop");
res.addEventListener("click", () => {
  reset(list);
  boxele.forEach((box) => {
    box.innerText = "";
    resbox.innerText = "";
  });
  track = 0;
});

let resu = document.querySelector(".results");
resu.addEventListener("click", () => {
  reset(list);
  boxele.forEach((box) => {
    box.innerText = "";
    resbox.innerText = "";
  });
  track = 0;
});
