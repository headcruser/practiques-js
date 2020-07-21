const d = document;

export default function responsiveTest(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener('submit',function(e){
        if(e.target === $form){
            e.preventDefault();
            
            tester = window.open($form.direccion.value,'tester',
                `innerWidth=${$form.ancho},innerHeight=${$form.alto}`);
        }
    });

    d.addEventListener('click',function(e){
        if(e.target === $form.cerrar){
            tester.close();
        }
    });
}