const img2 = document.querySelector(".img2");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      img2.style.animation = "landing 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards";

      observer.unobserver(img2);
    }
  });
}, {
  threshold: 0.6
});

observer.observe(img2);

const img3 = document.querySelector(".img3");

const observer3 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      img3.style.animation = "landing3 1.8s cubic-bezier(0.25, 1, 0.5, 1) forwards";

      observer.unobserve(img3); // sirf 1 dafa
    }
  });
}, {
  threshold: 0.6
});

observer3.observe(img3);