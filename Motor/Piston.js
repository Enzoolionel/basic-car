class Piston{
    constructor(cc){
        this.cc = cc;
        this.posicion = 1;
    }

    moverPiston(){
        this.posicion = this.posicion === 1 ? 0 : 1;
    }
}

module.exports = Piston;