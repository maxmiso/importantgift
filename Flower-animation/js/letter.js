(() => {
  const pullTab = document.getElementById("pullTab");
  const envelopeBtn = document.getElementById("envelopeBtn");
  const letterPaper = document.getElementById("letterPaper");

  if (!pullTab || !envelopeBtn || !letterPaper) {
    return;
  }

  pullTab.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("letter-open");
    pullTab.setAttribute("aria-expanded", String(isOpen));

    if (!isOpen) {
      envelopeBtn.classList.remove("letter-drawer__envelope--opened");
      letterPaper.classList.remove("letter-drawer__paper--visible");
    }
  });

  envelopeBtn.addEventListener("click", () => {
    if (!document.body.classList.contains("letter-open")) {
      return;
    }

    envelopeBtn.classList.add("letter-drawer__envelope--opened");
    letterPaper.classList.add("letter-drawer__paper--visible");
  });
})();
