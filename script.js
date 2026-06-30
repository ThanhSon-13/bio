const themeToggle = document.getElementById("themeToggle");
const copyButton = document.getElementById("copyButton");
const toast = document.getElementById("toast");
const cursorGlow = document.getElementById("cursorGlow");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  if (themeToggle) themeToggle.textContent = "DARK";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeToggle.textContent = isLight ? "DARK" : "LIGHT";
  });
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Đã sao chép link");
    } catch (error) {
      showToast("Không sao chép được");
    }
  });
}

function showToast(text) {
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

window.addEventListener("mousemove", (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});
