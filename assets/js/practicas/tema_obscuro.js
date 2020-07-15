const d = document;
export default function darkTheme(btn,classDark){
    const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

    let moon="🌙" , sun="☀️";

    d.addEventListener('click',function(e){
        if(e.target.matches(btn)){
            if ($themeBtn.textContent === moon){
                $selectors.forEach(function(element){
                    element.classList.add(classDark);
                });
                $themeBtn.textContent = sun;
            } else {
                $selectors.forEach(function(element){
                    element.classList.remove(classDark);
                });
                $themeBtn.textContent = moon;
            }
        }

    })
}