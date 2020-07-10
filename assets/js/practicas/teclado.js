const d = document;

const MOVIMENTS = {
    LEFT:37,
    UP:38,
    RIGHT:39,
    DOWN:40,
}
Object.freeze(MOVIMENTS);


let x = 0,y = 0;

export function moveBall(e,ballSelector,sceneBall){
    const $ball = d.querySelector(ballSelector),
        $stage = d.querySelector(sceneBall),
        limitBall = $ball.getBoundingClientRect(),
        limitStage = $stage.getBoundingClientRect();


    switch (e.keyCode) {
        case MOVIMENTS.UP: 
            e.preventDefault();
            if (limitBall.top > limitStage.top) {
                y--;  
            }
        break;

        case MOVIMENTS.DOWN:   
            e.preventDefault();
            if (limitBall.bottom < limitStage.bottom) {
                y++;
            } 
        break;
    
        case MOVIMENTS.LEFT:  
            e.preventDefault();  
            if (limitBall.left > limitStage.left) {
                x--;
            }
        break;

        case MOVIMENTS.RIGHT:    
            e.preventDefault();
            if (limitBall.right < limitStage.right) {
                x++;
            } 
        break;
    }

    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
    
}

export function shortcuts(e){
    if(e.key === 'a' && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }

    if(e.key === 'c' && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado ");
    }

    if(e.key === 'p' && e.altKey){
        prompt("Haz lanzado un input con el teclado ");
    }

}