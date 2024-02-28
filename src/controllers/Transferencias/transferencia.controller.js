import { transferenciaSelectores } from "../../constants/transferencia/transferenciaSelectores";

// Seccion de Opciones de Transferencias
class TransferenciaOpciones{
// Funciones para obtener los selectores
    get getTransferenciaEntreMisCuentasSelector() {
        return $(transferenciaSelectores.entreMisCuentas);
    };

    get getTransferenciaRegistradasSelector() {
        return $(transferenciaSelectores.registradas);
    };

    get getTransferenciaEventualesSelector() {
        return $(transferenciaSelectores.eventuales);
    };

    get getTransferenciaAlExteriorSelector() {
        return $(transferenciaSelectores.extranjero);
    };
    
// Funciones para interaccion con el selector
    async transferenciaEntreMisCuentasSeccion(){
        await this.getTransferenciaEntreMisCuentasSelector.click();
    };

    async transferenciaRegistradasSeccion(){
        await this.getTransferenciaRegistradas.click();
    };

    async transferenciaEventualesSeccion(){
        await this.getTransferenciaEventuales.click();
    };

    async transferenciaAlExteriorSeccion(){
        await this.getTransferenciaAlExteriorSelector.waitUntil(async function () {
            return ((await $(transferenciaSelectores.alExterior)).isDisplayed())
        }, {
            timeout: 5000,
            timeoutMsg: 'Error en visualizar boton Transferencias Al Exterior'
        })
        await this.getTransferenciaAlExteriorSelector.click();
    };
};

export default new TransferenciaOpciones();
