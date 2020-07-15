const d = document,
    w = window;

export default function scrollTopBottom(selector){
    const $scrollBtn = d.querySelector(selector);
    
    w.addEventListener("scroll",function(e){
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        
        if(scrollTop > 600){
            $scrollBtn.classList.remove('hidden')
        }else {
            $scrollBtn.classList.add('hidden')
        }
    });

    d.addEventListener('click',function(e){
        if( e.target.matches(selector)) {
            w.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}