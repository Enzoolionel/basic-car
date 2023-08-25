class Carburador{
    constructor(cc, consumo){
        this.cc = cc;
        this.consumo = consumo;
        this.acelerando = false;
        this.aire = 0;
    }

    acelerar(){
        this.acelerando = true;
        this.consumo ++;
        this.aire = 1;
    }

    desAcelerar(){
        this.consumo = consumo;
        this.acelerando = false;
        this.aire = 0;
    }
}

module.exports = Carburador;