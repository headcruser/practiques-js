const d = document,
    n = navigator;
export default function webCam(video,btnStop) {
    const $video = d.getElementById(video),
          $buttonStop = d.getElementById(btnStop);
    

    const stopStreamedVideo = function(videoElem) {
        if (videoElem.srcObject === null) {
            return;
        }

        const stream = videoElem.srcObject;
        const tracks = stream.getTracks();
      
        tracks.forEach(function(track) {
          track.stop();
        });
      
        videoElem.srcObject = null;
    }

    if (!n.mediaDevices.getUserMedia) {
        $video.insertAdjacentHTML('beforebegin','<p>Tu navegador no tiene soporte para camara web</p>');
        return ;        
    }


    d.addEventListener('click',function(e){
        if(e.target === $buttonStop){
            stopStreamedVideo($video);
        }
    })

    n.mediaDevices
    .getUserMedia({
        video: true, 
        audio: true
    })
    .then(strem => {
        $video.srcObject = strem;
        $video.play();
    })
    .catch(error => {
        $video.insertAdjacentHTML('beforebegin',`<p>Ocurrio un error <mark>${error}</mark></p>`);
    })
}

