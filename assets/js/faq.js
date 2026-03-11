const faqItems = document.querySelectorAll(".campaign-faq-item");

faqItems.forEach((item) => {
  const questionButton = item.querySelector(".campaign-faq-question");
  const answer = item.querySelector(".campaign-faq-answer");

  if (!questionButton || !answer) return;

  questionButton.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    questionButton.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0";
    }
  });
});
