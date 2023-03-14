"use strict";

//taking all panels from html
const panels = document.querySelectorAll(".panel");


//Adding active animation on panel click
panels.forEach (panel => {
    panel.addEventListener("click", () => {
        removeClasslist();
        panel.classList.add('active');
    })
})

//Removing previosly clicked panel animation
function removeClasslist () {
    panels.forEach((panel) => {
            panel.classList.remove('active');
    })
}