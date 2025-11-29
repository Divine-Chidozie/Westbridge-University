const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("show");
});

function graduate() {
  const underGraduateBtn = document.getElementById("undergraduate-btn");
  const postGraduateBtn = document.getElementById("postgraduate-btn");

  const graduteBtn = [underGraduateBtn, postGraduateBtn];

  graduteBtn.map((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Explore our Courses");
    });
  });
}

graduate();

function handleCourse() {
  console.log("Search all our Courses here...");
}
