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


const img10 = document.querySelector(".img11");
const img4 = document.querySelector(".img3");
const features = document.querySelectorAll(".feature");

const observers = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      // 🔥 bottle start position
      const rectStart = img4.getBoundingClientRect();
      const rectEnd = img10.getBoundingClientRect();

      const x = rectStart.left - rectEnd.left;
      const y = rectStart.top - rectEnd.top;

      img10.style.transition = "none";
      img10.style.transform = `translate(${x}px, ${y}px) scale(0.5)`;

      requestAnimationFrame(() => {
        img10.style.transition = "transform 1.5s ease";
        img10.style.transform = "translate(0,0) scale(1)";
      });

      // 🔥 SIDE MOVE (features)
      features.forEach((el, index) => {
        if (index % 2 === 0) {
          el.classList.add("move-left");
        } else {
          el.classList.add("move-right");
        }
      });
    }

    else {
      // 🔥 RESET (jab scroll wapas upar jao)

      features.forEach(el => {
        el.classList.remove("move-left", "move-right");
      });
    }

  });
}, { threshold: 0.5 });

observers.observe(img10);
