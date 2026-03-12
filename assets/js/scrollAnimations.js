document.addEventListener("DOMContentLoaded", function () {
  const revealClasses = [
    "reveal-fade-up",
    "reveal-fade-left",
    "reveal-fade-right",
    "reveal-zoom",
    "reveal-flip",
    "reveal-slide-down",
  ];

  const selector = revealClasses.map((c) => "." + c).join(", ");
  const elements = document.querySelectorAll(selector);

  // Staggered delays for FAQ items and cards
  const staggerParents = [
    {
      selector: ".campaign-faq-list",
      childClass: "reveal-fade-up",
      baseDelay: 0,
    },
    { selector: ".cardContainer", childClass: "reveal-zoom", baseDelay: 0 },
  ];

  staggerParents.forEach(({ selector: parentSel, baseDelay }) => {
    const parent = document.querySelector(parentSel);
    if (!parent) return;
    Array.from(parent.children).forEach((child, i) => {
      child.style.transitionDelay = baseDelay + i * 0.12 + "s";
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
});
