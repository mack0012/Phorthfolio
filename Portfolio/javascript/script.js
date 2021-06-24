// $('.navToggle').click(function () {
//     $('#NavLinks').toggleClass('Show-NavLinks');
// });

// const navToggle = document.getElementsByClassName('navToggle')[0]
// const NavLinks = document.getElementsByClassName('NavLinks')[0]

// navToggle.addEventListener('click', () => {
//     NavLinks.classList.toggle('Show-NavLinks')
// })

const navToggle = document.querySelector(".navToggle");
const NavLinks = document.querySelector(".NavLinks");
navToggle.addEventListener("click", function () {
    NavLinks.classList.toggle("Show");
});