const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");

function headerScroll() {
  const headerBackgroundColor = "#0a1f29";
  if (window.scrollY > 50) {
    header.style.backgroundColor = headerBackgroundColor;
    header.style.transition = "0.3s ease-in-out";
    document.getElementById("nav-span").style.color = "white";
  } else if (window.scrollY < 50) {
    header.style.backgroundColor = "";
    document.getElementById("nav-span").style.color = "";
  }
}

window.addEventListener("scroll", headerScroll);

hamburger.addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("show");
});

function graduate() {
  const underGraduateBtn = document.getElementById("undergraduate-btn");
  const postGraduateBtn = document.getElementById("postgraduate-btn");

  const graduteBtn = [underGraduateBtn, postGraduateBtn];

  graduteBtn.forEach((btn) => {
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
