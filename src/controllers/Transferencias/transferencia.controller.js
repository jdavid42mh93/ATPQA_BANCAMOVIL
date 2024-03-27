import { commonsSelectores } from "../../constants/common";
import { transferenciaOpcion } from "../../constants/transferencia/transferenciaSelectores";

const timeOut = 20000;
// Seccion de Opciones de Transferencias
class TransferenciaOpciones{
// Funciones para obtener los selectores
    get getTransferenciaEntreMisCuentasSelector() {
        return $(commonsSelectores.textOpcion(transferenciaOpcion.entreMisCuentas));
    }

    get getTransferenciaRegistradasSelector() {
        return $(commonsSelectores.textOpcion(transferenciaOpcion.registradas));
    }

    get getTransferenciaEventualesSelector() {
        return $(commonsSelectores.textOpcion(transferenciaOpcion.eventuales));
    }

    get getTransferenciaAlExteriorSelector() {
        return $(commonsSelectores.textOpcion(transferenciaOpcion.alExterior));
    }
    
    get getTransferenciaOtrasCuentasSelector(){
        return $(commonsSelectores.textOpcion(transferenciaOpcion.otrasCuentas));
    }
// Funciones para navegar entre las distintas opciones de transferencias
    async transferenciaEntreMisCuentasSeccion(){
        await this.getTransferenciaEntreMisCuentasSelector.waitUntil(async () => {
            return (await this.getTransferenciaEntreMisCuentasSelector.isDisplayed());
        }, { 
            timeout:timeOut
        });
        await this.getTransferenciaEntreMisCuentasSelector.click();
    }

    async transferenciaRegistradasSeccion(){
        await this.getTransferenciaRegistradasSelector.waitUntil(async () => {
            return (await this.getTransferenciaRegistradasSelector).isDisplayed();
        },{ 
            timeout:timeOut
        });
        await this.getTransferenciaRegistradasSelector.click();
    }

    async transferenciaEventualesSeccion(){
        await this.getTransferenciaEventualesSelector.waitUntil(async () => {
            return (await this.getTransferenciaEventualesSelector).isDisplayed();
        },{ 
            timeout:timeOut
        });
        await this.getTransferenciaEventualesSelector.click();
    }

    async transferenciaAlExteriorSeccion(){
        await this.getTransferenciaAlExteriorSelector.waitUntil(async () => {
            return (await this.getTransferenciaAlExteriorSelector).isDisplayed()
        },{ 
            timeout:timeOut
        });
        await this.getTransferenciaAlExteriorSelector.click();
    }

    async transferenciaOtrasCuentasSeccion(){
        await this.getTransferenciaOtrasCuentasSelector.waitUntil(async () => {
            return (await this.getTransferenciaOtrasCuentasSelector).isDisplayed()
        },{ 
            timeout:timeOut
        });
        await this.getTransferenciaOtrasCuentasSelector.click();
    }
}

export default new TransferenciaOpciones();
