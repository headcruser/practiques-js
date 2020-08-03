const d = document;

export default function getElmentRandom(button, selector,notification) {
    const $notification = d.getElementById(notification),
        $button = d.getElementById(button);

    
    const getItem = (selector) => {
        const $elements = d.querySelectorAll(selector);

        let random = Math.floor(Math.random() * $elements.length);
                
        return $elements[random]
    };

    d.addEventListener('click',function(e) {
        if ($button === e.target){
            let item = getItem(selector)

            $notification.innerText = `El elemento seleccionado es ${item.innerText}`;
        }
    })
}