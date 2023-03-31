const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () =>{
  if (lastScrollY > 2000){
    nav.classList.add('nav-hidden');
  } else {
    nav.classList.remove('nav-hidden');
  }
   lastScrollY = window.scrollY;
});

const aside = document.querySelector(".advertising-aside");
let prevScrollY = window.scrollY;

window.addEventListener('scroll', () =>{
  if (prevScrollY > 1300){
    aside.classList.add('aside-hidden');
  } else {
    aside.classList.remove('aside-hidden');
  }
  prevScrollY = window.scrollY;
});

const star = document.querySelector(".star");
star.addEventListener("click", ()=>{
  if(star.style.color = "#708090cc"){
    star.style.color = "#ffcd1f"
  }else{
    star.style.color = "#708090cc"
  };
});

const star2 = document.querySelector(".star2");
star2.addEventListener("click", ()=>{
  if(star2.style.color = "#708090cc"){
    star2.style.color = "#ffcd1f"
  }else{
    star2.style.color = "#708090cc"
  };
});

const closeBtn = document.querySelector(".close-ad");
const closeBtn2 = document.querySelector(".close-ads");
const closeBtn3 = document.querySelector(".close-banner-ad");
const topAd = document.querySelector(".ad-top");
const bottomAd = document.querySelector(".ad-bottom");
const adBackground = document.querySelector(".ad-container");
const adBackground2 = document.querySelector(".ad-container2");
const adBackground3 = document.querySelector(".ad");

closeBtn.addEventListener("click", () => {
  adBackground.classList.add('closed');
  adBackground.classList.remove('ad-container');
});

closeBtn2.addEventListener("click", () => {
  adBackground2.classList.add('closed');
  adBackground2.classList.remove('ad-container2');
});

closeBtn3.addEventListener("click", () => {
  adBackground3.classList.add('closed');
  adBackground3.classList.remove('ad');
});

let cardFront = document.querySelector(".flashcard-front");
let cardBack = document.querySelector(".flashcard-back");

cardFront.addEventListener("click", () =>{
  cardBack.style.display = "block";
  cardFront.style.display = "none";
});

cardBack.addEventListener("click", () =>{
  cardFront.style.display = "block";
  cardBack.style.display = "none";
});


const addCardBtn = document.querySelector(".add");
addCardBtn.addEventListener("click", addNewFlashcard);

const termList = document.querySelector(".terms");

function addNewFlashcard(){
  const userInputTerm = document.querySelector(".new-term");
  const userInputDef = document.querySelector(".new-definition");
  
  
  const newFlash = document.createElement("div");
  newFlash.classList.add("term-card");
  termList.append(newFlash);

  const termName = document.createElement("h3");
  termName.innerText = userInputTerm.value;
  termName.classList.add("term");
  newFlash.append(termName);

  const defName = document.createElement("h3");
  defName.innerText = userInputDef.value;
  defName.classList.add("term-def-area");
  newFlash.append(defName);

  const cardBtnArea = document.createElement("div");
  cardBtnArea.classList.add("card-btns");
  newFlash.append(cardBtnArea);

  const edBtn = document.createElement("button");
  edBtn.classList.add("edit");
  edBtn.innerText  = "Edit";
  cardBtnArea.append(edBtn);

  edBtn.addEventListener("click", () => {
    edBtn.classList.remove("edit");
    edBtn.classList.add("closed");
    const saveBtn = document.createElement("button");
    saveBtn.classList.add("save");
    saveBtn.innerText = "Save";
    cardBtnArea.append(saveBtn);
    defName.classList.remove("term-def-area");
    defName.classList.add("closed");
    const editDef = document.createElement("INPUT");
    editDef.classList.add("term-def-area2");
    newFlash.append(editDef);
    editDef.setAttribute("type", "text");
    editDef.classList.add("term-def-area2");

    saveBtn.addEventListener("click", () => {
      const newDef = document.createElement("h3");
      newDef.innerText = editDef.value;
      newDef.classList.add("term-def-area");
      newFlash.append(newDef);
      editDef.classList.add("closed");
      editDef.classList.remove("term-def-area2");
      saveBtn.classList.remove("save");
      saveBtn.innerText = "Edit";
      saveBtn.classList.add("edit");

    });

  });



  const delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.innerText  = "X";
  cardBtnArea.append(delBtn);

  delBtn.addEventListener("click", () => {
    newFlash.classList.add('closed');
    newFlash.classList.remove('term-card');
  });
  
  userInputDef.value = "New Definition";
  userInputTerm.value = "New Term";

};

const saveListBtn = document.querySelector(".save-list-btn");

saveListBtn.addEventListener("click", () =>{
  localStorage.setItem("termList", termList);
  localStorage.getItem("termList").h3;
  console.log(localStorage);
});
