window.addEventListener("load", () => {
  const buttons = document.querySelectorAll(
    "button[aria-expanded][aria-controls]"
  );
  buttons.forEach((btn) => setUp(btn));
});

function setUp(btn) {
  btn.addEventListener("click", () => {
    const btnId = btn.getAttribute("aria-controls");
    const content = document.getElementById(btnId);
    if (btn.getAttribute("aria-expanded") === "false") {
      content.style.display = "block";
      btn.setAttribute("aria-expanded", "true");
    } else {
      content.style.display = "none";
      btn.setAttribute("aria-expanded", false);
    }
  });
}
