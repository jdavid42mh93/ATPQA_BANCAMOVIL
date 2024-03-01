import { files, dataConditions, dataTypes, dataSubtypes } from "../../constants/_data_generation";
import { UIAutomatorSelectores } from "../../constants/common";
import { searchEntry } from "../../helpers/fileEditor.helper";
import transferenciaController from "./transferencia.controller";
import { transferenciaRegistradasSelectores, cuentaBeneficiariaOpcion } from "../../constants/transferencia/transferenciaRegistradas";
import { constTransferencias } from "../../constants/transferencia/transferenciaSelectores";
import { datosGenerales } from "../../constants/common";
import CommonsTransferencias from "../../page-objects/android/navigation/Transferencias/CommonsTransferencias";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";

// Seccion de transferencias al exterior
class TransferenciaRegistrada {
// Funciones para obtener los selectores
    get getSeleccionarBeneficiarioSelector() {
        return $(transferenciaRegistradasSelectores.cuentaBeneficiaria);
    }

    get getCuentaBeneficiariaOpcionSelector() {
        return $(cuentaBeneficiariaOpcion.contifico);
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

// Funcion para completar los datos de transferencia exterior
    async transferenciaRegistradarForm(){
        try{
            const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.Registradas),]);
            let elemento;
            await transferenciaController.transferenciaRegistradasSeccion();
            // Selecciona cuenta beneficiaria
            await this.getSeleccionarBeneficiarioSelector.waitForDisplayed({timeout:26000, timeoutMsg:`El elemento no esta visisble despues de 26 segundos`});
            await this.getSeleccionarBeneficiarioSelector.click();
            for (let i=0; i < data.length; i++){
                elemento = data[i];
            };
            await this.selectionarCuentaBeneficiaria(elemento.numero_cuenta_beneficiario);
            await $(UIAutomatorSelectores.scrollTextIntoView(constTransferencias.Monto));   // scroll hasta encontrar la palabra Monto
            // Ingresa Monto y Descripcion
            this.ingresarDescripcion();
            this.ingresarMonto();
            // Click en boton Continuar
            await CommonsTransferencias.getBtnContinuarSelector.waitForDisplayed();
            await CommonsTransferencias.getBtnContinuarSelector.click();
            // Click en boton Continuar
            await CommonsTransferencias.getBtnContinuarSelector.waitForDisplayed();
            await CommonsTransferencias.getBtnContinuarSelector.click();
            // Click en boton Finalizar
            await CommonActions.getBtnFinalizarSelector.waitUntil(async () => {
                return (await CommonActions.getBtnFinalizarSelector).isDisplayed();
            },{
                timeout: 20000
            });
            await CommonActions.getBtnFinalizarSelector.click();
        }catch(error){
            console.error('Error en ingresar datos en transferencias al exterior', error);
        }
    }
}

export default new TransferenciaRegistrada ();