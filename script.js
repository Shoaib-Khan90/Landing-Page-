const img = document.querySelector(".img2");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      img.classList.add("animate");
      observer.unobserve(img);
    }
  });
});

observer.observe(img);
