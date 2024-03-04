import { transferenciaSelectores } from "../../../../constants/transferencia/transferenciaSelectores";
import { datosGenerales, buttonsSelectores } from "../../../../constants/common";

// Seccion de Pagos que contiene los disntintos tipos de transferencias
class CommonsTransferencias{
// Funciones para obtener los selectores de descripcion y monto
    get getTransferenciaMontoSelector() {
        return $(transferenciaSelectores.monto);
    }

    get getTransferenciaDescripcionSelector() {
        return $(transferenciaSelectores.descripcion);
    }

    get getBtnContinuarSelector(){
        return $(buttonsSelectores.continuar);
    }

    get getMensajeConfirmacionSelector() {
        return $(transferenciaSelectores.mensajeConfirmacion)
    }

// Funciones para ingresra monto y descripcion en el formulario
    async ingresarMonto(){
        await this.getTransferenciaMontoSelector.click();
        await this.getTransferenciaMontoSelector.addValue(datosGenerales.monto);
        await driver.hideKeyboard();
    }

    async ingresarDescripcion(){
        await this.getTransferenciaDescripcionSelector.click();
        await this.getTransferenciaDescripcionSelector.addValue(datosGenerales.descripcion);
        await driver.hideKeyboard();
    }
// Funcion para validar mensaje de confirmacion
    async validarConfirmacionOK() {
        await this.getMensajeConfirmacionSelector.waitForDisplayed();
        await expect(this.getMensajeConfirmacionSelector).toHaveText(expect.stringContaining('Tu transacción se realizó con éxito'))
    }
}

export default new CommonsTransferencias();
