import { datosGenerales } from "../../../../constants/common";
import { pagosSelectors } from "../../../../constants/pagos/pagosSelectores";
import CommonActions from "../../common-actions/CommonActions";

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
        await CommonActions.selectCheckedOpcion(grupoServicio);
    }

    async seleccionarServicio(servicio){
        await CommonActions.selectCheckedOpcion(servicio);
    }

    async seleccionarTipoPago(tipoPago){
        await CommonActions.selectCheckedOpcion(tipoPago);
    }

    async seleccionarNumeroTarjeta(numeroTarjeta){
        await CommonActions.selectCheckedOpcion(numeroTarjeta);
    }

    async seleccionarFormaPago(formaPago){
        await CommonActions.selectCheckedOpcion(formaPago);
    }

    async ingresarCVV(){
        await this.getCVVSelector.waitForDisplayed();
        await this.getCVVSelector.click();
        await this.getCVVSelector.addValue(datosGenerales.cvv);
        await driver.hideKeyboard();
    }
}

export default new CommonsPagos();