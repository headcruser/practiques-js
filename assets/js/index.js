import {digitalClock,alarm} from "./practicas/reloj.js";
import hamburger from "./practicas/menu_hamburgesa.js";
import { shortcuts,moveBall } from "./practicas/teclado.js";


const d = document;

d.addEventListener("DOMContentLoaded",function(e){
    digitalClock({
        reloj: d.getElementById('reloj'),
        btnActivarReloj: d.getElementById('btn-activar-reloj'),
        btnDesactivarReloj: d.getElementById('btn-desactivar-reloj')
    })

    alarm({
        srcFile:'./assets/mp3/alarma.mp3',
        btnActivarAlarma: d.getElementById('btn-activar-alarma'),
        btnDesactivarAlarma: d.getElementById('btn-desactivar-alarma')
    })

    hamburger('.panel-btn','.panel','.menu a')
});

d.addEventListener('keydown',function(e){
    shortcuts(e);
    moveBall(e,'.ball','.stage');
});