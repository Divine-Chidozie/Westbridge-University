const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("show");
});

document.getElementById("register-btn").onclick = function () {
  console.log("Proceed to the Registration form to register your account!");
};

const applyButton = document.getElementById("apply-btn");

applyButton.onclick = (e) => {
  e.preventDefault();
  console.log(
    "Kindly click on the next page to apply for an programme of your choice.."
  );
};

function handleCourse() {
  console.log("Search all courses here...");
}

const readMoreOne = document.getElementById("read-more-one");
const readMoreTwo = document.getElementById("read-more-two");
const readMoreThree = document.getElementById("read-more-three");

readMoreOne.onclick = function (e) {
  e.preventDefault();
  console.log("2025 undergraduate admission opens... read here");
};
readMoreTwo.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("New university library expension completed... read here");
});

readMoreThree.onclick = (e) => {
  e.preventDefault();
  console.log("Student innovation workshop 2025... read here");
};

document.getElementById("apply-here").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(
    "Application for 2025 academic seesion are currently open.. click to apply here"
  );
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("read-more-btn").onclick = function (e) {
    e.preventDefault();
    console.log(
      "Learn tips on making new friends, joining fan clubs and balancing studies in campus... Read more"
    );
  };
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("campus-day-btn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(
      "Explore our campus and rexperience student life at first hand... Read more articles here"
    );
  });
});
