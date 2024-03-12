import { transferenciaAlExteriorSelectores, cuentasBeneficiariasSelectores, motivoEconomicoOpcionSelectores, motivoEconomicoOpcion, constTransferenciasAlExterior, gastoExteriorOpcion } from "../../constants/transferencia/transferenciaAlExterior";
import { files, dataConditions, dataTypes, dataSubtypes } from "../../constants/_data_generation";
import { UIAutomatorSelectores } from "../../constants/common";
import { searchEntry } from "../../helpers/fileEditor.helper";
import transferenciaController from "./transferencia.controller";
import { datosGenerales } from "../../constants/common";
import CommonsTransferencias from "../../page-objects/android/navigation/Transferencias/CommonsTransferencias";

// Seccion de transferencias al exterior
class TransferenciaExterior {
// Funciones para obtener los selectores
    get getSeleccionarBeneficiarioSelector() {
        return $(transferenciaAlExteriorSelectores.cuentaBeneficiariaExterior);
    }

    get getCuentaBeneficiariaSelector() {
        return $(cuentasBeneficiariasSelectores.THIRDB);
    }

    get getMontoSelector() {
        return $(transferenciaAlExteriorSelectores.monto);
    }

    get getReferenciaSelector() {
        return $(transferenciaAlExteriorSelectores.referencia);
    }

    get getGastoExteriorSelector(){
        return $(transferenciaAlExteriorSelectores.gastosExterior); 
    }

    get getGastoExteriorOpcionSelector(){
        return $(gastoExteriorOpcion["N-OUR"]);
    }

    async ingresarMonto(){
        await this.getMontoSelector.addValue(datosGenerales.monto);
        await driver.hideKeyboard();
    }

    async getMotivoEconomicoOpcion(opcion){
        switch (opcion) {
            case motivoEconomicoOpcion["105-IMPORTACIONES"]:
                $(motivoEconomicoOpcionSelectores["105_importaciones"]).click();
                break;
            case motivoEconomicoOpcion["110-ANTICIPOPORIMPORTACIONES"]:
                $(motivoEconomicoOpcionSelectores["110_anticipoImportaciones"]).click();
                break;
            case motivoEconomicoOpcion["201-SERVICIOSDETRANSPORTEMARITIMO(RUTASINTERNACIONALES)"]:
                $(motivoEconomicoOpcionSelectores["201_servTranspMaritimoRI"]).click();
                break;
            default:
                break;
        }
    }

// Funcion para completar los datos de transferencia exterior
    async transferenciaAlExteriorForm(){
        try{
            const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.AlExterior),]);
            let elemento;
            await transferenciaController.transferenciaAlExteriorSeccion();
            for (let i=0; i < data.length; i++){
                elemento = data[i];
            }
            // Seleccionar cuenta beneficiaria
            await this.getSeleccionarBeneficiarioSelector.waitForDisplayed({timeout:26000, timeoutMsg:`El elemento no esta visisble despues de 26 segundos`});
            await this.getSeleccionarBeneficiarioSelector.click();
            // Seleccionar cuenta beneficiaria opcion
            await this.getCuentaBeneficiariaSelector.waitForDisplayed({timeout:10000, timeoutMsg:`El elemento no esta visisble despues de 10 segundos`});
            await this.getCuentaBeneficiariaSelector.click();

            await $(UIAutomatorSelectores.scrollTextIntoView(constTransferenciasAlExterior.MotivoEconomico)).click();
            // Obtener motivo economico
            await this.getMotivoEconomicoOpcion(elemento.motivo_economico);
            // Ingresar monto
            await $(UIAutomatorSelectores.scrollTextIntoView(constTransferenciasAlExterior.Monto)).click();
            await this.ingresarMonto()
            await $(UIAutomatorSelectores.scrollToEnd); //Scroll hasta el final
            // Seleccionar opcion de gasto exterior
            await this.getGastoExteriorSelector.click();
            await this.getGastoExteriorOpcionSelector.click();
            // Click en boton Continuar
            await CommonsTransferencias.clickBtnContinuar();
            // Click en boton Finalizar
            await CommonsTransferencias.clickBtnFinalizar();
        }catch(error){
            console.error('Error en ingresar datos en transferencias al exterior', error);
        }
    }
}

export default new TransferenciaExterior ();