import { transferenciaSelectores } from "../../constants/transferencia/transferenciaSelectores";

// Seccion de Opciones de Transferencias
class TransferenciaOpciones{
// Funciones para obtener los selectores
    get getTransferenciaMisCuentas() {
        return $(transferenciaSelectores.misCuentas);
    };

    get getTransferenciaRegistradas() {
        return $(transferenciaSelectores.registradas);
    };

    get getTransferenciaEventuales() {
        return $(transferenciaSelectores.eventuales);
    };

    get getTransferenciaAlExterior() {
        return $(transferenciaSelectores.extranjero);
    };
    
// Funciones para interaccion con el selector
    async transferenciaMisCuentasSeccion(){
        await this.getTransferenciaMisCuentas.click();
    };

    async transferenciaRegistradasSeccion(){
        await this.getTransferenciaRegistradas.click();
    };

    async transferenciaEventualesSeccion(){
        await this.getTransferenciaEventuales.click();
    };

    async transferenciaAlExteriorSeccion(){
        await this.getTransferenciaAlExterior.click();
    };
};

export default new TransferenciaOpciones();
