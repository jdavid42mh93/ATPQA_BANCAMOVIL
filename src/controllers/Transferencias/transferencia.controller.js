import { transferenciaSelectores } from "../../constants/transferencia/transferenciaSelectores";

// Seccion de Opciones de Transferencias
class TransferenciaOpciones{
// Funciones para obtener los selectores
    get getTransferenciaEntreMisCuentasSelector() {
        return $(transferenciaSelectores.entreMisCuentas);
    }

    get getTransferenciaRegistradasSelector() {
        return $(transferenciaSelectores.registradas);
    }

    get getTransferenciaEventualesSelector() {
        return $(transferenciaSelectores.eventuales);
    }

    get getTransferenciaAlExteriorSelector() {
        return $(transferenciaSelectores.alExterior);
    }
    
// Funciones para navegar entre las distintas opciones de transferencias
    async transferenciaEntreMisCuentasSeccion(){
        await this.getTransferenciaEntreMisCuentasSelector.click();
    }

    async transferenciaRegistradasSeccion(){
        await this.getTransferenciaRegistradasSelector.waitUntil(async () => {
            return ((await $(transferenciaSelectores.registradas)).isDisplayed());
        });
        await this.getTransferenciaRegistradasSelector.click();
    }

    async transferenciaEventualesSeccion(){
        await this.getTransferenciaEventualesSelector.click();
    }

    async transferenciaAlExteriorSeccion(){
        await this.getTransferenciaAlExteriorSelector.waitUntil(async function () {
            return ((await $(transferenciaSelectores.alExterior)).isDisplayed())
        })
        await this.getTransferenciaAlExteriorSelector.click();
    }
}

export default new TransferenciaOpciones();
