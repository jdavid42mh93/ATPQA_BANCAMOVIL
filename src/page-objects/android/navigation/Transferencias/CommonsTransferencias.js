import { transferenciaSelectores } from "../../../../constants/transferencia/transferenciaSelectores";
import { datosGenerales } from "../../../../constants/common";
import CommonActions from "../../common-actions/CommonActions";

// Seccion de Pagos que contiene los disntintos tipos de transferencias
class CommonsTransferencias{
// Funciones para obtener los selectores de descripcion y monto
    get getTransferenciaMontoSelector() {
        return $(transferenciaSelectores.monto);
    }

    get getTransferenciaDescripcionSelector() {
        return $(transferenciaSelectores.descripcion);
    }

    get getMensajeConfirmacionSelector() {
        return $(transferenciaSelectores.mensajeConfirmacion)
    }

// Funciones para ingresra monto y descripcion en el formulario
    async ingresarDescripcion(){
        await this.getTransferenciaDescripcionSelector.click();
        await this.getTransferenciaDescripcionSelector.addValue(datosGenerales.descripcion);
        await driver.hideKeyboard();
    }

    async ingresarMonto(){
        await this.getTransferenciaMontoSelector.click();
        await this.getTransferenciaMontoSelector.addValue(datosGenerales.monto);
        await driver.hideKeyboard();
    }

// Funcion para obtener el selector de mensajes de error
    async mensajeError(mensajeError){
        await $(transferenciaSelectores.mensaje(mensajeError)).waitForDisplayed({timeout:20000});
    }

// Funcion para validar mensaje de confirmacion
    async validarConfirmacionOK() {
        await this.getMensajeConfirmacionSelector.waitForDisplayed();
        await expect(this.getMensajeConfirmacionSelector).toHaveText(expect.stringContaining('Tu transacción se realizó con éxito'))
    }

// Funcion para dar clik en el boton Continuar
    async clickBtnContinuar() {
        // Seleccionar boton de continuar
        await CommonActions.getBtnContinuarSelector.waitForDisplayed({timeout: 20000});
        await CommonActions.getBtnContinuarSelector.click();
    }

// Funcion para dar click en el boton Finalizar
    async clickBtnFinalizar(){
        await CommonActions.getBtnFinalizarSelector.waitUntil(async () => {
            return (await CommonActions.getBtnFinalizarSelector).isDisplayed();
            },{
                 timeout: 30000
            });
        await this.validarConfirmacionOK();
        await CommonActions.getBtnFinalizarSelector.click();
    }
}

export default new CommonsTransferencias();
