"use strict";
const navIcon = document.querySelector(".nav-icon");
const navigation = document.querySelector(".nav");
const closeIcon = document.querySelector('.close-container')

navIcon.addEventListener("click", () => {
  navigation.classList.toggle("hidden");
});

closeIcon.addEventListener('click', () => {
    navigation.classList.add("hidden");

})