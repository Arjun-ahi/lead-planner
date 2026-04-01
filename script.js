const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll to top on click
scrollBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// scroll to top end

// counter
// const counterEl = document.querySelector('.counter');
// let counterNumber = 0;
// let started = false;

// const startCounter = () => {
//   if (started) return;
//   started = true;

//   const updateCounter = setInterval(() => {
//     counterNumber++;
//     counterEl.textContent = counterNumber + "%";

//     if (counterNumber === 89) {
//       clearInterval(updateCounter);
//     }
//   }, 12);
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       startCounter();
//     }
//   });
// }, { threshold: 0.5 });

// observer.observe(counterEl);


// counter
const counterEl = document.querySelector('.counter');
let counterNumber = 0;

const startCounter = () => {
  // Logic remains the same, but without the 'started' check
  const updateCounter = setInterval(() => {
    counterNumber++;
    counterEl.textContent = counterNumber + "%";

    if (counterNumber === 89) {
      clearInterval(updateCounter);
    }
  }, 12);
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounter();
      // Stop observing the element so the counter never runs again
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(counterEl);
// counter end

// counter2
const counterE2 = document.querySelector('.counter2');
let counterNum = 0;
let start = false;

const startCount = () => {
  if (start) return;
  start = true;

  const updateCounter = setInterval(() => {
    counterNum++;
    counterE2.textContent = counterNum + "+";

    if (counterNum === 100) {
      clearInterval(updateCounter);
    }
  }, 12);
};

const observ = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCount();
    }
  });
}, { threshold: 0.5 });

observ.observe(counterE2);
// counter2 end