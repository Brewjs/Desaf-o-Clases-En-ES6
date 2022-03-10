export default class Cliente {

    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre() {
        return this._nombre
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    calcularImpuesto(montoBrutoAnual, deducciones) {
        return ((montoBrutoAnual - deducciones) * 21 / 100);
    }
}
