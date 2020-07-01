import {digitalClock,alarm} from "./practicas/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded",function(e){
    digitalClock({
        reloj: d.getElementById('reloj'),
        btnActivarReloj: d.getElementById('btn-activar-reloj'),
        btnDesactivarReloj: d.getElementById('btn-desactivar-reloj'),
        btnActivarAlarma: d.getElementById('btn-activar-alarma'),
        btnDesactivarAlarma: d.getElementById('btn-desactivar-alarma')
    })
});