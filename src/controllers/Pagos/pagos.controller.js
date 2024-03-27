import { commonsSelectores } from "../../constants/common";
import { pagosOpciones } from "../../constants/pagos/pagosSelectores";

// Seccion de Opciones de Pagos
class PagosOpciones{
// Funciones para obtener los selectores
    get getPagosServiciosRegistradosSelector() {
        return $(commonsSelectores.textOpcion(pagosOpciones.serviciosRegistrados));
    }

    get getPagosServiciosEventualesSelector() {
        return $(commonsSelectores.textOpcion(pagosOpciones.serviciosEventuales));
    }

    get getPagosMisTarjetasSelector() {
        return $(commonsSelectores.textOpcion(pagosOpciones.misTarjetas));
    }

    get getPagosTarjetasRegistradasSelector() {
        return $(commonsSelectores.textOpcion(pagosOpciones.tarjetasRegistradas));
    }

    get getPagosTarjetasEventualesSelector() {
        return $(commonsSelectores.textOpcion(pagosOpciones.tarjetasEventuales));
    }
    
// Funciones para navegar entre las distintas opciones de pagos
    async pagosServiciosRegistradosSeccion(){
        await this.getPagosServiciosRegistradosSelector.waitUntil(async () => {
            return (await this.getPagosServiciosRegistradosSelector.isDisplayed());
        });
        await this.getPagosServiciosRegistradosSelector.click();
    }

    async pagosServiciosEventualesSeccion(){
        await this.getPagosServiciosEventualesSelector.waitUntil(async () => {
            return (await this.getPagosServiciosEventualesSelector.isDisplayed());
        });
        await this.getPagosServiciosEventualesSelector.click();
    }

    async pagosMisTarjetasSeccion(){
        await this.getPagosMisTarjetasSelector.waitUntil(async () => {
            return (await this.getPagosMisTarjetasSelector.isDisplayed());
        });
        await this.getPagosMisTarjetasSelector.click();
    }

    async pagosTarjetasRegistradasSeccion(){
        await this.getPagosTarjetasRegistradasSelector.waitUntil(async () => {
            return (await this.getPagosTarjetasRegistradasSelector.isDisplayed());
        })
        await this.getPagosTarjetasRegistradasSelector.click();
    }

    async pagosTarjetasEventualesSeccion(){
        await this.getPagosTarjetasEventualesSelector.waitUntil(async () => {
            return (await this.getPagosTarjetasEventualesSelector.isDisplayed());
        })
        await this.getPagosTarjetasEventualesSelector.click();
    }
}

export default new PagosOpciones();
