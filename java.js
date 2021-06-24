//to get the actual date from copyright
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//toggle the navbar
const togglebtn = document.querySelector(".btn");
const navlinks = document.querySelector(".links");

togglebtn.addEventListener("click", function () {
  navlinks.classList.toggle("tog");
});

//try this method later
//const navlinksHeight = navlinks.getBoundingClientRect().height;
// console.log(navlinksHeight);

const links = document.querySelector(".links");
const arrow = document.querySelector(".arrowtop");

window.addEventListener("scroll", function () {
  const scrollHeight = this.window.scrollY;
  const navHeight = links.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    links.classList.add("fixed-nav");
  } else {
    links.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    arrow.classList.add("show");
  } else {
    arrow.classList.remove("show");
  }
});

const tog = document.querySelector(".tog");

const scrollLink = document.querySelectorAll(".scroll-links");

scrollLink.forEach(function (dam) {
  dam.addEventListener("click", function (e) {
    e.preventDefault();
    //this has the id of #home #bout etc
    const id = e.currentTarget.getAttribute("href").slice(1);
    //now we will get the id earlier mention which is now in the const ID
    const element = document.getElementById(id);
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
