const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");

// Changing Top Nav-bar Color on Scroll
const navItems = [
  document.getElementById("admission"),
  document.getElementById("training"),
  document.getElementById("research"),
  document.getElementById("collaborations"),
  document.getElementById("campus-life"),
];

// Hamburger Span Item
const hamburgerSpanItem = [
  document.getElementById("hamburger-first-span"),
  document.getElementById("hamburger-second-span"),
  document.getElementById("hamburger-third-span"),
];

function headerScroll() {
  const headerBackgroundColor = "#0a1f29";
  const navigationColor = "white";

  if (window.scrollY > 50) {
    header.style.backgroundColor = headerBackgroundColor;
    header.style.transition = "0.3s ease-in-out";
    document.getElementById("nav-span").style.color = navigationColor;
    // hamburger.style.backgroundColor = "white";

    // Navitem Color Change
    navItems.forEach((item) => {
      if (item) item.style.color = "white";
    });

    // Hamburger Background-Color Change
    hamburgerSpanItem.forEach((spanItem) => {
      if (spanItem) spanItem.style.backgroundColor = "white";
    });
  } else {
    header.style.backgroundColor = "";
    document.getElementById("nav-span").style.color = "";
    navItems.forEach((item) => {
      if (item) item.style.color = "black";
    });

    // Hamburger Background-Color Removal
    hamburgerSpanItem.forEach((spanItem) => {
      if (spanItem) spanItem.style.backgroundColor = "";
    });
  }
}
window.addEventListener("scroll", headerScroll);

// Mobile Menu
hamburger.addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("show");
});

// Undergradute and PostGraduate Button
function graduate() {
  const underGraduateBtn = document.getElementById("undergraduate-btn");
  const postGraduateBtn = document.getElementById("postgraduate-btn");

  const graduateBtn = [underGraduateBtn, postGraduateBtn];

  graduateBtn.forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Procced to choose your programme");
    });
  });
}

graduate();

function handleCourse() {
  console.log("Search all our Courses here...");
}
