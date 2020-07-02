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

export function alarm(data){
    let alarmTempo;
    const $alarm = d.createElement('audio');
    $alarm.src = data.srcFile;


    d.addEventListener('click',function(e) {
        let buttonClicked = e.target;

        if(buttonClicked === data.btnActivarAlarma){
            alarmTempo = setTimeout(function(e){
                $alarm.play();
            },2000);

            data.btnActivarAlarma.disabled = true;
        }

        if(buttonClicked === data.btnDesactivarAlarma){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            data.btnActivarAlarma.disabled = false;
        }
    })
}