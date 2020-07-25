import {digitalClock,alarm} from "./practicas/reloj.js";
import hamburger from "./practicas/menu_hamburgesa.js";
import { shortcuts,moveBall } from "./practicas/teclado.js";
import contdown from "./practicas/cuenta_regresiva.js";
import scrollTopBottom from "./practicas/boton_scroll.js";
import darkTheme from "./practicas/tema_obscuro.js";
import responsiveMedia from "./practicas/objeto_response.js";
import responsiveTest from "./practicas/prueba_responsive.js";
import userDeviceInfo from "./practicas/deteccion_dispositivos.js";
import networkStatus from "./practicas/deteccion_red.js";
import webCam from "./practicas/detecion_webcam.js";
import getGeolocation from "./practicas/geolocalizacion.js";


const d = document;

darkTheme('.dark-theme-btn','dark-mode');
networkStatus();

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

    contdown('contdown','Dec 06,2020 21:41','Feliz Cumpleaños 😉');

    scrollTopBottom('.scroll-top-btn');

    responsiveMedia([
        {
            element:'content-video',
            mq:'(min-width:1024px)',
            mobileContent:`<a href="https://youtu.be/hXIHPOV2yl8" target="_blank">Video musical</a>`,
            mobileDesktop: `<iframe width="560" height="315" src="https://www.youtube.com/embed/hXIHPOV2yl8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        {
            element:'content-map',
            mq:'(min-width:1024px)',
            mobileContent:`<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4902517346977!2d-96.13641278578572!3d19.173778053875814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3414635fce555%3A0x2a090a734148433d!2sFondo%20de%20bikini!5e0!3m2!1ses-419!2smx!4v1594949690989!5m2!1ses-419!2smx" target="_blank">Video musical</a>`,
            mobileDesktop: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4902517346977!2d-96.13641278578572!3d19.173778053875814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3414635fce555%3A0x2a090a734148433d!2sFondo%20de%20bikini!5e0!3m2!1ses-419!2smx!4v1594949690989!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
        },
    ]);

    responsiveTest('responsive-tester');

    userDeviceInfo('user-device');

    webCam('webcam','btn-stop-webcam');
    getGeolocation('geolocation');

});

d.addEventListener('keydown',function(e){
    shortcuts(e);
    moveBall(e,'.ball','.stage');
});