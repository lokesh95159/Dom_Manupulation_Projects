const cointainer = document.querySelector("coin");
const dropdowns = document.querySelectorAll(".a");
const btn = document.querySelector("form button");
const from_cur = document.querySelector("form select[name='from']");
const to_cur = document.querySelector("form select[name='to']");
const msg = document.querySelector(".msg p");
let f1 = "";
let f2 = "";
function dropd() {
  dropdowns.forEach((select) => {
    for (let currency in countryList) {
      let opt = document.createElement("option");
      opt.value = currency;
      opt.innerText = currency;
      if (select.name === "from" && currency == "USD") {
        opt.selected = true;
      } else if (select.name === "to" && currency == "INR") {
        opt.selected = true;
      }
      select.append(opt);
    }
  });
}
dropd();
function handledroupdown(event) {
  const select = event.target;
  if (select.name === "from") {
    f1 = select.value;
    const flag1 = document.querySelector(".img1");
    flag1.src = `https://flagsapi.com/${countryList[f1]}/flat/64.png`;
  } else if (select.name === "to") {
    f2 = select.value;
    const flag2 = document.querySelector(".img2");
    flag2.src = `https://flagsapi.com/${countryList[f2]}/flat/64.png`;
  }
}
dropdowns.forEach((select) => {
  select.addEventListener("change", handledroupdown);
});
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  const container = document.querySelector(".container");
  container.classList.add("containerho");
  setTimeout(()=>{
  container.classList.remove("containerho");
  },1000)
  let amount = document.querySelector(".amount input");
  let amoval = amount.value;
  if (amoval === "") {
    amoval = 0;
  }
  let url = `https://2024-03-06.currency-api.pages.dev/v1/currencies/${from_cur.value.toLowerCase()}.json`;
  let res = await fetch(url);
  let data = await res.json();
  let conval = data[from_cur.value.toLowerCase()][to_cur.value.toLowerCase()];
  let total_amt = amoval * conval;
  setTimeout(()=>{
  msg.innerText = `${amoval} ${from_cur.value} = ${total_amt.toFixed(2)} ${
    to_cur.value
  }`;
  },500)
});
