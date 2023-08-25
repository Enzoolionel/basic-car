
class Tanque{
    constructor(){
        this.capacidad = 50;
        this.nafta = 0;

    }

    cargarNafta(cantidad){
        if(this.nafta + cantidad <= this.capacidad){
            this.nafta += cantidad;
            console.log(`se cargo ${cantidad} de nafta`)
        }else{
            console.log(`No se puede cargar ${cantidad} ya que tiene ${this.nafta} y su cantidad es ${this.capacidad}`)
        }
    }
}

module.exports = Tanque;