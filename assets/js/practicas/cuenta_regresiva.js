const d = document;

export default function contdown(element,limitDate,finalMessage){
    const $contdown = d.getElementById(element),
    contdownDate = new Date(limitDate).getTime();

    let contdownTempo = setInterval(function(){
        let now = new Date().getTime();
        let limitTime = contdownDate - now;

        let diference = {
            factorDay: (1000 * 60 * 60 * 24),
            factorHour: (1000 * 60 * 60),
            factorMinute: (1000 * 60),
            factorSecond:(1000),
            days: function(){
                return Math.floor(limitTime / this.factorDay)
            } ,
            hours: function(){
                return ("0" + Math.floor((limitTime % this.factorDay) / this.factorHour)).slice(-2)
            },
            minutes: function(){
                return ("0" + Math.floor((limitTime % this.factorHour) / this.factorMinute)).slice(-2)
            },
            seconds:function(){
                return ("0" + Math.floor((limitTime % this.factorMinute) / this.factorSecond)).slice(-2)
            }
        };

        $contdown.innerHTML = `<h3>Faltan: Dias:${diference.days()} Horas:${diference.hours()}  Minutos: ${diference.minutes()} Segundos: ${diference.seconds()}</h3>`


        if (limitTime< 0) {
            clearInterval(contdownTempo);
            $contdown.innerHTML = `<h3>${finalMessage}</h3>`
        }
    },1000);
}