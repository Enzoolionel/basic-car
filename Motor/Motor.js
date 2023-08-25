const Valvula = require('./Valvula.js')
const Piston = require('./Piston.js')


class Motor{
    constructor(nafta, carburador){
        this.encendido = false;
        this.averiado = false;
        this.km = 0;
        this.carburador = carburador;

        this.nafta = nafta;
        this.setIntervalID = null;
    }

    encender(){
        if(!this.encendido){
            console.log('Encendiendo motor');
            this.encendido = true;
            // this.funcionamiento()
            this.setIntervalID = setInterval( () => this.consumirNafta() , 1000);
        }
    }

    apagar(){
        console.log('Apagando motor')
        this.encendido = false;
        clearInterval(this.setIntervalID);
    }


    // funcionamiento(){
    //     const valvulaAd = new Valvula('admision');
    //     const valvulaEs = new Valvula('escape');
    //     const piston = new Piston(200)


    // }

    consumirNafta(){
        if(this.nafta > 0){
            if(this.carburador.acelerando){
                this.nafta -= this.carburador.consumo;
                console.log(`Estas acelerando tu nafta esta bajando mas rapido ${this.nafta}`)
            }else{
                this.nafta -= this.carburador.consumo;
                console.log(`queda ${this.nafta} de nafta`)
            }
        }else if(this.nafta === 0){
            console.log(`te quedaste sin nafta ${0}`)
            this.apagar();
        }
        
    }
}

module.exports = Motor;
