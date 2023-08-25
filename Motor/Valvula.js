class Valvula{
    constructor(tipo){
        this.tipo = tipo;
        this.posicion = 0;
    }

    moverValvula(){
        this.posicion = this.posicion === 1 ? 0 : 1;
    }
}

module.exports = Valvula;