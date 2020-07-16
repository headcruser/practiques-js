// SHORTCUTS
const d = document,
    ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

    const icons = {
        moon: "🌙",
        sun: "☀️",
    };

    const theme = {
        dark: function () {
            $selectors.forEach(function (element) {
                element.classList.add(classDark);
            });
            
            $themeBtn.textContent = icons.sun;

            ls.setItem("theme", "dark");
        },
        light: function () {
            $selectors.forEach(function (element) {
                element.classList.remove(classDark);
            });

            $themeBtn.textContent = icons.moon;
            
            ls.setItem("theme", "light");
        },
    };

    d.addEventListener("click", function (e) {
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === icons.moon) {
                theme.dark();
               
            } else {
                theme.light();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", function (e) {
        if (ls.getItem("theme") === null) {
            ls.setItem("theme", "light");
        }

        if (ls.getItem("theme") === "light") {
            theme.light();
        }

        if (ls.getItem("theme") === "dark") {
            theme.dark();
        }
    });
}
