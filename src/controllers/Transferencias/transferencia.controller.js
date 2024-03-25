import { transferenciaOpcion, transferenciaSelectores } from "../../constants/transferencia/transferenciaSelectores";

const timeOut = 20000;
// Seccion de Opciones de Transferencias
class TransferenciaOpciones{
// Funciones para obtener los selectores
    get getTransferenciaEntreMisCuentasSelector() {
        return $(transferenciaSelectores.transferenciaOpcion(transferenciaOpcion.entreMisCuentas));
    }

    get getTransferenciaRegistradasSelector() {
        return $(transferenciaSelectores.transferenciaOpcion(transferenciaOpcion.registradas));
    }

    get getTransferenciaEventualesSelector() {
        return $(transferenciaSelectores.transferenciaOpcion(transferenciaOpcion.eventuales));
    }

    get getTransferenciaAlExteriorSelector() {
        return $(transferenciaSelectores.transferenciaOpcion(transferenciaOpcion.alExterior));
    }
    
    get getTransferenciaOtrasCuentasSelector(){
        return $(transferenciaSelectores.transferenciaOpcion(transferenciaOpcion.otrasCuentas));
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
