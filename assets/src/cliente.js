export default class Cliente {

    constructor(nombre, impuesto) {
        this._nombre = nombre
        this._impuesto = impuesto
    }

    get nombre() {
        return this.nombre
    }
    set nombre(nombre) {
        this._nombre = nombre
    }
    get impuesto(){
        return this._impuesto
    }
    set impuesto(impuesto){
        this._impuesto = impuesto
    }

}