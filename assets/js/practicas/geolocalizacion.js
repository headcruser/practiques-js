const d = document,
    n = navigator;

export default function getGeolocation(element) {
    const $container = d.getElementById(element);

    if (!"geolocation" in navigator) {
        $container.innerHTML = `<p>La geolocalizacion no esta disponible para tu navegador</p>`;
        return;
    } 
    
    const options = {
        enableHightAccuracy:true,
        timeout:5000,
        maximumAge:0
    };

    const success = position => {
        let coords = position.coords;

        $container.innerHTML = `
            <p>Tu posicion actual es:</p>
            <div><b>Latitud:</b> <span>${coords.latitude}</span></div>
            <div><b>Logitud:</b> <span>${coords.longitude}</span></div>
            <div><b>Precisión:</b> <span>${coords.accuracy} Mts</span></div>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blanck" rel="noopener">Ver en google Maps</a>
        `
    };

    const error = error => {
        $container.innerHTML = `<p><mark>Error: ${error.code}: ${error.message}</mark></p>`
        console.log(error);
    };

    n.geolocation.getCurrentPosition(success,error,options)

}