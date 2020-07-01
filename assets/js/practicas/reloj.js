const d = document;

export function digitalClock(selectors){
    let clockTempo;

    d.addEventListener('click',function(e){
        let buttonClicked = e.target;

        if(buttonClicked === selectors.btnActivarReloj){

            clockTempo = setInterval(function(e){
                let clockHour = new Date().toLocaleTimeString();
                selectors.reloj.innerHTML = `<h3>${clockHour}</h3>`;
            },1000);

            selectors.btnActivarReloj.disabled = true;
        }

        if(buttonClicked === selectors.btnDesactivarReloj){
            clearInterval(clockTempo);
            selectors.reloj.innerHTML = null;
            selectors.btnActivarReloj.disabled = false 
        }
        
    });
}

export function alarm(){
    
}