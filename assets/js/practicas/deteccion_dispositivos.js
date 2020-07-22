const d = document,
n = navigator,
ua = n.userAgent;
export default function userDeviceInfo(element){
    const $container = d.getElementById(element),
        isMobile = {
            android: ()=> ua.match(/android/i),
            ios: ()=> ua.match(/iphone|ipad|ipod/i),
            windows: ()=> ua.match(/windows phone/i),
            any:function(){
                return this.android() || this.ios() ||this.windows();
            }
        },
        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any:function(){
                return this.linux() || this.mac() ||this.windows();
            }
        },
        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/opera|opera mini/i),
            opera: () => ua.match(/msie|iemobile/i),
            ie: () => ua.match(/windows nt/i),
            edge: () => ua.match(/edge/i),
            any:function(){
                return this.chrome()||this.safari()||this.firefox()||this.opera()||this.ie() || this.edge()
            }
        };

    $container.innerHTML = `
        <ul>
            <li><b>User Agent</b> ${ua}</li>
            <li><b>Plataforma</b> ${isMobile.any()? isMobile.any():isDesktop.any()}</li>
            <li><b>Navegador </b>${isBrowser.any()}</li>
        </ul>
    `;

    if(isBrowser.chrome()){
        $container.innerHTML += `<p>Este contenido solo se ve en chrome</p>`;
    }
}