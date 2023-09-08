class Tanque{
    constructor(){
        this.capacidad = 50;
        this.nafta = 0;

    }

    cargarNafta(cantidad){
        return new Promise( (res, req) => {
            if(this.nafta + cantidad <= this.capacidad){
                console.log(`Cargando ${cantidad} de nafta!`)
                this.nafta += cantidad;
                res()
            }else{
                console.log(`No se puede cargar esa cantidad`)
                req(new Error('tanque vacio'))
            }

        })
    }
}

module.exports = Tanque;