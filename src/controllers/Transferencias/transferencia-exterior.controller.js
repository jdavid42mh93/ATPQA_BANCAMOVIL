import { transferenciaAlExteriorSelectores, 
    cuentasBeneficiariasOpcionSelectores, 
    motivoEconomicoOpcionSelectores, 
    gastoExteriorOpcionSelectores, 
    constTransferenciasAlExterior } from "../../constants/transferencia/transferenciaAlExterior";
import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import { UIAutomatorSelectores } from "../../constants/common";
import { editEntry } from "../../helpers/fileEditor.helper";
import { datosGenerales } from "../../constants/common";
import CommonsTransferencias from "../../page-objects/android/navigation/Transferencias/CommonsTransferencias";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";

// Seccion de transferencias al exterior
class TransferenciaExterior {
// Funciones para obtener los selectores
    get getSeleccionarBeneficiarioSelector() {
        return $(transferenciaAlExteriorSelectores.cuentaBeneficiariaExterior);
    }

    get getMontoSelector() {
        return $(transferenciaAlExteriorSelectores.Monto);
    }

    get getReferenciaSelector() {
        return $(transferenciaAlExteriorSelectores.referencia);
    }

    get getGastoExteriorSelector(){
        return $(transferenciaAlExteriorSelectores.gastosExterior); 
    }
    
    async ingresarMonto(){
        await this.getMontoSelector.click();
        await this.getMontoSelector.addValue(datosGenerales.monto);
        await driver.hideKeyboard();
    }

// Funcion para seleccionar una cuenta beneficiaria
    async seleccionarCuentaBeneficiaria(cuentaBeneficiaria){
        await $(cuentasBeneficiariasOpcionSelectores.cuentaBeneficiariaOpcion(cuentaBeneficiaria)).waitForDisplayed();
        await $(cuentasBeneficiariasOpcionSelectores.cuentaBeneficiariaOpcion(cuentaBeneficiaria)).click();
    }

// Funcion para seleccionar un motivo economico
    async seleccionarMotivoEconomico(motivoEconomico){
        await $(motivoEconomicoOpcionSelectores.motivoEconomicoOpcion(motivoEconomico)).waitForDisplayed();
        await $(motivoEconomicoOpcionSelectores.motivoEconomicoOpcion(motivoEconomico)).click();
    }

// Funcion para seleccionar una opcion de gastos del exterior
    async seleccionarGastoExterior(gastoExterior){
        await $(gastoExteriorOpcionSelectores.gastoExteriorOpcion(gastoExterior)).waitForDisplayed();
        await $(gastoExteriorOpcionSelectores.gastoExteriorOpcion(gastoExterior)).click();
    }

// Funcion para completar los datos de transferencia exterior
    async transferenciaAlExteriorForm(elemento){
        try{
            // Seleccionar cuenta beneficiaria
            await this.getSeleccionarBeneficiarioSelector.waitForDisplayed({timeout:30000});
            await this.getSeleccionarBeneficiarioSelector.click();

            // Seleccionar cuenta beneficiaria opcion
            await this.seleccionarCuentaBeneficiaria(elemento.numero_cuenta_beneficiario)

            await $(UIAutomatorSelectores.scrollTextIntoView(constTransferenciasAlExterior.MotivoEconomico)).click();   // Scroll hasta encontrar Motivo Economico
                        
            // Obtener motivo economico
            await this.seleccionarMotivoEconomico(elemento.motivo_economico);
            
            // Ingresar monto
            await this.ingresarMonto()
            await $(UIAutomatorSelectores.scrollToEnd); //Scroll hasta el final
            
            // Seleccionar opcion de gasto exterior
            await this.getGastoExteriorSelector.click();
            await this.seleccionarGastoExterior(elemento.gastos_del_exterior);
            
            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
            await CommonActions.clickBtnContinuar();

            // Click en boton Finalizar
            await CommonActions.clickBtnFinalizar();

            // Editar registro en archivo data.txt
            editEntry(files.data,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error en ingresar datos en transferencias al exterior', error);
        }
    }
}

export default new TransferenciaExterior ();