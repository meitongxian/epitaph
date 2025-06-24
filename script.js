// RESIZE TO WINDOW

let windowHeight = window.innerHeight;

let excessHeight = document.querySelector(".header").offsetHeight + document.getElementById("name").offsetHeight + document.getElementById("epitaph").offsetHeight + 2.5;

document.querySelector(".designer-preview").style.height = "calc(" + windowHeight + "px - " + excessHeight + "px - 2*var(--margin))";

document.querySelector(".buttons-wrapper").style.height = windowHeight + "px";

window.addEventListener('resize', () => {
  let windowHeight = window.innerHeight;
  document.querySelector(".buttons-wrapper").style.height = windowHeight + "px";
  document.querySelector(".designer-preview").style.height = "calc(" + windowHeight + "px - " + excessHeight + "px - 2*var(--margin))";
});


// LANDING PAGE

let landing = document.querySelector(".landing");

landing.addEventListener("click", () => {
    landing.classList.toggle("landing_hide");
});

// INPUT TO TOMBSTONE

let nameInput = document.getElementById("name");
let nameOutput = document.getElementById("name-output");

nameInput.addEventListener('input', () => {
  nameOutput.textContent = nameInput.value;
});

let epitaphInput = document.getElementById("epitaph");
let epitaphOutput = document.getElementById("epitaph-output");

epitaphInput.addEventListener('input', () => {
  epitaphOutput.textContent = epitaphInput.value;
});


// SELECT TOMBSTONE OPTION

let optionA = document.querySelector(".option-a");

optionA.addEventListener('click', () => {
    document.querySelector(".tombstone-wrapper").innerHTML = '<img src="img/A.svg" alt="A classic rounded top." width="100%">';
});

let optionB = document.querySelector(".option-b");

optionB.addEventListener('click', () => {
    document.querySelector(".tombstone-wrapper").innerHTML = '<img src="img/B.svg" alt="An authoritarian prism." width="100%">';
});

let optionC = document.querySelector(".option-c");

optionC.addEventListener('click', () => {
    document.querySelector(".tombstone-wrapper").innerHTML = '<img src="img/C.svg" alt="An ornamental heart shape." width="100%">';
});

let optionD = document.querySelector(".option-d");

optionD.addEventListener('click', () => {
    document.querySelector(".tombstone-wrapper").innerHTML = '<img src="img/D.svg" alt="An oval top headstone." width="100%">';
});

let optionE = document.querySelector(".option-e");

optionE.addEventListener('click', () => {
    document.querySelector(".tombstone-wrapper").innerHTML = '<img src="img/E.svg" alt="A rockstar\'s rock." width="100%">';
});

let optionF = document.querySelector(".option-f");

optionF.addEventListener('click', () => {
    document.querySelector(".tombstone-wrapper").innerHTML = '<img src="img/F.svg" alt="A dreamer\'s cloud" width="100%">';
});

// FONT SELECTOR

var changeFont = function (font) { 
    document.querySelector(".epitaph-wrapper").style.fontFamily 
                = font.value; 
} 

// SAVE BUTTON

let saveButton = document.querySelector(".save");

saveButton.addEventListener('click', () => {
    window.print();
});