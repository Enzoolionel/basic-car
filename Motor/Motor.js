const Valvula = require('./Valvula.js')
const Piston = require('./Piston.js')

class Motor{
    constructor(nafta, carburador){
        this.encendido = false;
        this.averiado = false;
        this.km = 0;
        this.carburador = carburador;
        this.valvulaAd = new Valvula('admision');
        this.valvulaEs = new Valvula('escape');
        this.piston = new Piston(200);

        this.nafta = nafta;
        this.setIntervalID = null;
    }

    encender(){
        if(!this.encendido){
            console.log('Encendiendo motor');
            this.encendido = true;
            this.setIntervalID = setInterval( () => this.iniciarMotor() , 1000);
        }
    }

    apagar(){
        console.log('Apagando motor')
        this.encendido = false;
        clearInterval(this.setIntervalID);
    }


    cicloCuatroTiempos(){
        if(this.encendido){
            this.valvulaAd.posicion = 1;
            console.log("valvula ad abierta")
            console.log("nafta entrando a la camara del cilindro")
            console.log("cambiando ciclo")
            this.valvulaAd.posicion = 1;
            console.log("valvula ad cerrada")
            this.piston.posicion = 1;
            console.log("piston comprimiendo")
            console.log("motor explotando")
            this.piston.posicion = 0;
            console.log("piston bajando")
            this.valvulaEs.posicion = 1;
            console.log("valvula de escape abierta")
            console.log("aire saliendo")
            this.valvulaEs.posicion = 0;
            console.log("valvula de escape cerrada")
        }
    }

    consumirNafta(){
        if(this.nafta > 0){
            if(this.carburador.acelerando){
                this.nafta -= this.carburador.consumo;
                console.log(`Estas acelerando tu nafta esta bajando mas rapido ${this.nafta}`)
                if(this.nafta <= 0){
                    console.log(`te quedaste sin nafta ${0}`)
                    return this.apagar()
                }
            }else{
                this.nafta -= this.carburador.consumo;
                console.log(`queda ${this.nafta} de nafta`)
                if(this.nafta <= 0){
                    console.log(`te quedaste sin nafta ${0}`)
                    return this.apagar()
                }
            }
        }else if(this.nafta <= 0){
            console.log(`te quedaste sin nafta ${0}`)
            this.apagar();
        }
    }

    iniciarMotor(){
        while(this.encendido && this.nafta > 0){
            try {
                this.cicloCuatroTiempos();
                this.consumirNafta();
            } catch ( err ) {
                if(err.message === 'tanque vacio'){
                    console.log("no hay nafta")
                    this.apagar()
                }else{  
                    console.log(`error desconocido ${err}`)
                }
            }
        }
    }


}

module.exports = Motor;
