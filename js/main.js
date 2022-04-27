// Global variable
let theeSpecies = ["Yupqa", "O`rta", "Qalin"];
let smArr = ["25sm", "30sm", "35sm"]; 
let Top = ["Pomidor", "Tuzlangan bodring", "Kurka go'shti", "Qo'ziqorin", "Zaytun", "Qazi"]; 
let addedTop = []; 
let twoArr = ["Achchiq", "Sosiskali"];
let addTwoArr = [];


let elForm = document.querySelector(".form");
let elSelectBreadThickness = document.querySelector(".select"); 
let elRadioBox = elForm.querySelector(".radio"); 
let elCheckboxesFirst = document.querySelector(".js-list");
let elJsList = document.querySelector(".js-list-adds"); 

// radios button 

let elOutputGod = document.querySelector(".js-bread-type");
let elOutputs = document.querySelector(".js-bread-size"); 
let elOutputTopProducts = document.querySelector(".step__list"); 
let elOutput = document.querySelector(".choose-list"); 

elOutputGod.textContent = theeSpecies[0]; 

//RESULTS LIST

for (let i = 0; i < theeSpecies.length; i++) {
  let newOptionItem = document.createElement("option");
  newOptionItem.value = newOptionItem.textContent = theeSpecies[i];
  newOptionItem.selected = (i === 0) ? true : false; 

  elSelectBreadThickness.append(newOptionItem);
}

// select OPTION

for (let i = 0; i < smArr.length; i++) {
  let wrapperDiv = document.createElement("div"); 
  wrapperDiv.classList.add("form-check");
  // radio input
  let radioItem = document.createElement("input");
  radioItem.classList.add("btn-check"); 
  radioItem.type = "radio";
  radioItem.name = "Bread-size";
  radioItem.id = `radio-${i}`; 
  radioItem.value = smArr[i]; 

  if (i === 0) {
    wrapperDiv.classList.add("p-0");
    radioItem.checked = true; 
  }
// select ADD
  let newLabel = document.createElement("label"); 
  newLabel.classList.add("btn", "btn-outline-dark", "rounded-pill");
  newLabel.setAttribute("for", `radio-${i}`);
  newLabel.textContent = smArr[i];

  wrapperDiv.append(radioItem);
  wrapperDiv.append(newLabel); 

  elRadioBox.append(wrapperDiv); 

  radioItem.addEventListener("change", function () {
    elOutputs.textContent = this.value;
  });
}

// select over

for (let i = 0; i < Top.length; i++) {
  let wrapperDiv = document.createElement("div"); 
  wrapperDiv.classList.add("form-check", "col-6"); 

  let checkItem = document.createElement("input"); 
  checkItem.classList.add("form-check-input"); 
  checkItem.type = "checkbox"; 
  checkItem.name = Top[i]; 
  checkItem.id = `check-top-${i}`;
  checkItem.value = Top[i]; 

  //checkbox Click value on the right side

  let newLabel = document.createElement("label");
  newLabel.classList.add("form-check-label"); 
  newLabel.setAttribute("for", `check-top-${i}`);
  newLabel.textContent = Top[i];

  wrapperDiv.append(checkItem); 
  wrapperDiv.append(newLabel); 
//is added on the right side
  elCheckboxesFirst.append(wrapperDiv); 

  checkItem.addEventListener("change", function () {
    let currentValue = this.value; 
    let index = addedTop.indexOf(currentValue);
    if (index > -1) {
      addedTop.splice(index, 1); 
    } else {
      addedTop.push(currentValue);
    }
    refreshAddedTopProducts();
  });
}
//two different types checkbox
for (let i = 0; i < twoArr.length; i++) {
  let wrapperDiv = document.createElement("div"); 
  wrapperDiv.classList.add("form-check", "col-6"); 

  let checkItem = document.createElement("input"); 
  checkItem.classList.add("form-check-input"); 
  checkItem.type = "checkbox"; 
  checkItem.name = twoArr[i]; 
  checkItem.id = `check-adds-${i}`;
  checkItem.value = twoArr[i];

  let newLabel = document.createElement("label");
  newLabel.classList.add("form-check-label"); 
  newLabel.setAttribute("for", `check-adds-${i}`); 
  newLabel.textContent = twoArr[i]; 

  wrapperDiv.append(checkItem); 
  wrapperDiv.append(newLabel); 

  elJsList.append(wrapperDiv); 

  checkItem.addEventListener("change", function () {
    let currentValue = this.value; 
    let index = addTwoArr.indexOf(currentValue);
    if (index > -1) {
      addTwoArr.splice(index, 1);
    }
    else {
      addTwoArr.push(currentValue);
    }
    refreshAddedAddsProducts(); 
  });
}
//two different types checkbox left is added
elSelectBreadThickness.addEventListener("change", function () {
  elOutputGod.textContent = this.value;
});


let refreshAddedTopProducts = function () {
  elOutputTopProducts.innerHTML = ""; 
  for (let i = 0; i < addedTop.length; i++) {
    let itemLi = document.createElement("li"); 
    itemLi.textContent = `- ${addedTop[i]}`; 
    elOutputTopProducts.append(itemLi); 
  }
}

let refreshAddedAddsProducts = function () {
  elOutput.innerHTML = ""; 
  for (let i = 0; i < addTwoArr.length; i++) {
    let itemLi = document.createElement("li"); 
    itemLi.textContent = `- ${addTwoArr[i]}`; 
    elOutput.append(itemLi); 
  }
}