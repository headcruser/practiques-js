const d = document,
    w = window;

export default function responsiveMedia(data) {
    
    data.forEach(item => {
        let breakpoint = w.matchMedia(item.mq);

        let responsive = function(e) {
            if(e.matches) {
                d.getElementById(item.element).innerHTML = item.mobileDesktop;
            }else {
                d.getElementById(item.element).innerHTML = item.mobileContent;
            }
        }
        breakpoint.addListener(responsive);

        responsive(breakpoint)
    });
}
