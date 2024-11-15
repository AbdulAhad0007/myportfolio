const darkModeToggle2 = document.getElementById("darkModeToggle2");
darkModeToggle2.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
window.onload = () => {
  document.getElementById("myImage").classList.add("visible");
};

const fadeElements = document.querySelectorAll(".fade-in");
function handleScroll() {
  fadeElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", handleScroll);
handleScroll();
window.onload = function () {
  const text = "Abdul Ahad";
  const speed = 50;
  let i = 0;
  const element = document.getElementById("autoText");

  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
};
document.querySelector(".upr-link").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
  const skillParas = document.querySelectorAll(".skill-para");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  skillParas.forEach((para) => {
    observer.observe(para);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".all");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
