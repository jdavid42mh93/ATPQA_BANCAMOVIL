import { datosGenerales } from "../../../../constants/common";
import { pagosSelectors } from "../../../../constants/pagos/pagosSelectores";

// Seccion de Pagos que contiene funciones comunes
class CommonsPagos{
// Funciones para obtener los selectores de pagos
    get getGruposServicioSelector(){
        return $(pagosSelectors.gruposServicio);
    }

    get getServicioSelector(){
        return $(pagosSelectors.servicio);
    }

    get getTipoPagoSelector(){
        return $(pagosSelectors.tipoPago);
    }

    get getCuentaDebitoSelector(){
        return $(pagosSelectors.cuentaDebito);
    }

    get getTarjetaSelector(){
        return $(pagosSelectors.tarjeta);
    }

    get getCVVSelector(){
        return $(pagosSelectors.cvv);
    }

    get getFormaPagoSelector(){
        return $(pagosSelectors.formaPago);
    }

    async seleccionarGrupoServicio(grupoServicio){
        await $(pagosSelectors.grupoServicioOpcion(grupoServicio)).waitForDisplayed();
        await $(pagosSelectors.grupoServicioOpcion(grupoServicio)).click();
    }

    async seleccionarServicio(servicio){
        await $(pagosSelectors.servicioOpcion(servicio)).waitForDisplayed();
        await $(pagosSelectors.servicioOpcion(servicio)).click();
    }

    async seleccionarTipoPago(tipoPago){
        await $(pagosSelectors.tipoPagoOpcion(tipoPago)).waitForDisplayed();
        await $(pagosSelectors.tipoPagoOpcion(tipoPago)).click();
    }

    async seleccionarCuentaDebito(cuentaDebito){
        await $(pagosSelectors.cuentaDebitoOpcion(cuentaDebito)).waitForDisplayed();
        await $(pagosSelectors.cuentaDebitoOpcion(cuentaDebito)).click();
    }

    async seleccionarNumeroTarjeta(numeroTarjeta){
        await $(pagosSelectors.tarjetaOpcion(numeroTarjeta)).waitForDisplayed();
        await $(pagosSelectors.tarjetaOpcion(numeroTarjeta)).click();
    }

    async seleccionarFormaPago(formaPago){
        await $(pagosSelectors.formaPagoOpcion(formaPago)).waitForDisplayed();
        await $(pagosSelectors.formaPagoOpcion(formaPago)).click();
    }

    async ingresarCVV(){
        await this.getCVVSelector.waitForDisplayed();
        await this.getCVVSelector.click();
        await this.getCVVSelector.addValue(datosGenerales.cvv);
        await driver.hideKeyboard();
    }
}

export default new CommonsPagos();