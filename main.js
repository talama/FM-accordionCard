window.addEventListener("load", () => {
  const buttons = document.querySelectorAll(
    "button[aria-expanded][aria-controls]"
  );
  buttons.forEach((btn) => {
    if (btn.getAttribute("aria-expanded") === "true") {
      const content = document.getElementById(
        btn.getAttribute("aria-controls")
      );
      content.style.display = "block";
    }
    setUp(btn);
  });
});

function setUp(btn) {
  btn.addEventListener("click", () => {
    const content = document.getElementById(btn.getAttribute("aria-controls"));
    if (btn.getAttribute("aria-expanded") === "false") {
      content.style.display = "block";
      btn.setAttribute("aria-expanded", "true");
    } else {
      content.style.display = "none";
      btn.setAttribute("aria-expanded", false);
    }
  });
}
