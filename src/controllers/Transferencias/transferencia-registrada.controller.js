import { files, dataConditions, dataTypes, dataSubtypes } from "../../constants/_data_generation";
import { UIAutomatorSelectores } from "../../constants/common";
import { searchEntry } from "../../helpers/fileEditor.helper";
import transferenciaController from "./transferencia.controller";
import { transferenciaRegistradasSelectores, cuentaBeneficiariaOpcion, cuentaDebitoOpcion } from "../../constants/transferencia/transferenciaRegistradas";
import { constTransferencias } from "../../constants/transferencia/transferenciaSelectores";
import { datosGenerales } from "../../constants/common";
import CommonsTransferencias from "../../page-objects/android/navigation/Transferencias/CommonsTransferencias";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";

// Seccion de transferencias cuentas registradas
class TransferenciaRegistrada {
// Funciones para obtener los selectores
    get getSeleccionarCuentaDebitoSelector() {
        return $(transferenciaRegistradasSelectores.cuentaDebito);
    }

    get getSeleccionarBeneficiarioSelector() {
        return $(transferenciaRegistradasSelectores.cuentaBeneficiaria);
    }

    get getDescripcionSelector(){
        return $(transferenciaRegistradasSelectores.descripcion);
    }

    get getMontoSelector(){
        return $(transferenciaRegistradasSelectores.monto);
    }

    async ingresarDescripcion(){
        await this.getDescripcionSelector.click();
        await this.getDescripcionSelector.addValue(datosGenerales.descripcion);
        await driver.hideKeyboard();
    }

    async ingresarMonto(){
        await this.getMontoSelector.click();
        await this.getMontoSelector.addValue(datosGenerales.monto);
        await driver.hideKeyboard();
    }

    async selectionarCuentaDebito(opcion){
        switch (opcion) {
            case "110609286-CUENTA CORRIENTE":
                await $(cuentaDebitoOpcion.cuentaCorriente).waitForDisplayed();
                await $(cuentaDebitoOpcion.cuentaCorriente).click();
                break;
            case "118043573-CUENTA DE AHORROS":
                await $(cuentaDebitoOpcion.cuentaAhorros1).waitForDisplayed();
                await $(cuentaDebitoOpcion.cuentaAhorros1).click();
                break;
            default:
                break;
        }
    }

    async selectionarCuentaBeneficiaria(opcion){
        switch (opcion) {
            case "CONTIFICO":
                await $(cuentaBeneficiariaOpcion.contifico).waitForDisplayed();
                await $(cuentaBeneficiariaOpcion.contifico).click();
                break;
            default:
                break;
        }
    }

// Funcion para completar los datos de transferencia en cuentas registradas
    async transferenciaRegistradaForm(){
        try{
            const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.Registradas),]);
            let elemento;
            await transferenciaController.transferenciaRegistradasSeccion();
            for (let i=0; i < data.length; i++){
                elemento = data[i];
            }
            // Seleccionar cuenta debito
            await this.getSeleccionarCuentaDebitoSelector.waitForDisplayed({timeout:26000, timeoutMsg:`El elemento no esta visisble despues de 26 segundos`})
            await this.getSeleccionarCuentaDebitoSelector.click();
            await this.selectionarCuentaDebito(elemento.cuenta_debito);
            // Seleccionar cuenta beneficiaria
            await this.getSeleccionarBeneficiarioSelector.waitForDisplayed({timeout:20000, timeoutMsg:`El elemento no esta visisble despues de 20 segundos`});
            await this.getSeleccionarBeneficiarioSelector.click();
            await this.selectionarCuentaBeneficiaria(elemento.numero_cuenta_beneficiario);

            await $(UIAutomatorSelectores.scrollTextIntoView(constTransferencias.Monto));   // scroll hasta encontrar la palabra Monto
            // Ingresar Monto y Descripcion
            this.ingresarDescripcion();
            this.ingresarMonto();
            // Click en boton Continuar
            await CommonsTransferencias.clickBtnContinuar();
            // Click en boton Finalizar
            await CommonsTransferencias.clickBtnFinalizar();
        }catch(error){
            console.error('Error en ingresar datos en transferencias al exterior', error);
        }
    }
}

export default new TransferenciaRegistrada ();