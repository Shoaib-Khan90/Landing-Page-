const img2 = document.querySelector(".img2");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      // reset animation
      img2.style.animation = "none";

      // force restart (important trick)
      void img2.offsetHeight;

      // re-apply same CSS animation
      img2.style.animation = "landing 1.5s ease-out forwards";
    }
  });
}, {
  threshold: 0.5
});

observer.observe(img2);