class Webservice{
    host : string = 'localhost' ; // 190.52.169.112 - shoppingcero.com
    port : string = ':8000'; // ejemplo :7000
    path : string = 'api/v1'; // - test/shoppingcero/public/api/v1
    imagePath : string = '';

    constructor(){
    }

    hostWithPort(){
        return  `http://${this.host}${this.port}`;
    }

    webservicePath(){
        return  `http://${this.host}${this.port}/${this.path}`;
    }

    getImagePath(){
        return  `http://${this.host}${this.port}/${this.imagePath}/`;
    }

}


export let ws = new Webservice();
export let imageWsPath = ws.getImagePath();
