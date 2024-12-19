const modeToggle = document.getElementById("modeToggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        modeToggle.checked = true;
    }
}

modeToggle.addEventListener("change", () => {
    const newTheme = modeToggle.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});
