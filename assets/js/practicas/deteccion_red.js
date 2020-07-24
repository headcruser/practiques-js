const d = document,
    w = window,
    n = navigator;

export default function networkStatus(){
    const isOnline = ()=>{
        const $div = d.createElement('div');

        if(n.onLine){
            $div.textContent = 'Conexion Establecida';
            $div.classList.add('online')
            $div.classList.remove('offline')
        }else{
            $div.textContent = 'Conexion perdida';
            $div.classList.add('offline');
            $div.classList.remove('online');
        }

        d.body.insertAdjacentElement('afterbegin',$div);

        setTimeout(()=>{
            d.body.removeChild($div);
        },2000);
    };

    window.addEventListener('online',function(e){
        isOnline();
    });

    window.addEventListener('offline',function(e){
        isOnline();
    })
}