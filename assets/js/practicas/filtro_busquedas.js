const d = document;

export default function searchFilters(input,selector){
    const $input = d.getElementById(input);        

    d.addEventListener('keyup',function(e){
        if(e.target === $input){

            
            if(e.key === 'Escape'){
                e.target.value = '';
            }

            d.querySelectorAll(selector).forEach(function(element){
                element.textContent.toLowerCase().includes(e.target.value)
                 ?element.classList.remove('filter')
                 :element.classList.add('filter'); 
            });
        }
    })
}