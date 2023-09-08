class Carburador{
    constructor(cc, consumo){
        this.cc = cc;
        this.consumo = consumo;
        this.acelerando = false;

    }

    acelerar(){
        this.acelerando = true;
        this.consumo = this.cc / 100;
        console.log("acelerando")
    }

    desAcelerar(){
        this.consumo --;
        this.acelerando = false;
        console.log("desacelerando")
    }
}

module.exports = Carburador;