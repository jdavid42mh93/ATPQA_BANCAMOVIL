import { transferenciaAlExteriorSelectores, labels} from "../../constants/transferencia/transferenciaAlExterior";
import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import { UIAutomatorSelectores } from "../../constants/common";
import { editEntry } from "../../helpers/fileEditor.helper";
import { datosGenerales } from "../../constants/common";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";

// Seccion de transferencias al exterior
class TransferenciaExterior {
// Funciones para obtener los selectores
    get getBeneficiarioSelector() {
        return $(transferenciaAlExteriorSelectores.beneficiario);
    }

    get getMontoSelector() {
        return $(transferenciaAlExteriorSelectores.monto);
    }

    get getGastoExteriorSelector(){
        return $(transferenciaAlExteriorSelectores.gastosExterior); 
    }
    
    async ingresarMonto(){
        await this.getMontoSelector.doubleClick();
        await this.getMontoSelector.addValue(datosGenerales.monto);
        await driver.hideKeyboard();
    }

// Funcion para seleccionar una cuenta beneficiaria
    async seleccionarCuentaBeneficiaria(cuentaBeneficiaria){
        await CommonActions.selectTextOpcion(cuentaBeneficiaria);
    }

// Funcion para seleccionar un motivo economico
    async seleccionarMotivoEconomico(motivoEconomico){
        await CommonActions.selectCheckedOpcion(motivoEconomico);
    }

// Funcion para seleccionar una opcion de gastos del exterior
    async seleccionarGastoExterior(gastoExterior){
        await CommonActions.selectCheckedOpcion(gastoExterior);
    }

// Funcion para completar los datos de transferencia exterior
    async transferenciaAlExteriorForm(elemento){
        try{
            // Seleccionar cuenta beneficiaria
            await this.getBeneficiarioSelector.waitForDisplayed({timeout:30000});
            await this.getBeneficiarioSelector.click();
            // Seleccionar cuenta beneficiaria opcion
            await this.seleccionarCuentaBeneficiaria(elemento.numero_cuenta_beneficiario)

            await $(UIAutomatorSelectores.scrollTextIntoView(labels.MotivoEconomico)).click();   // Scroll hasta encontrar Motivo Economico
                        
            // Obtener motivo economico
            await this.seleccionarMotivoEconomico(elemento.motivo_economico);
            
            // Ingresar monto
            await $(UIAutomatorSelectores.scrollToEnd); //Scroll hasta el final
            await this.ingresarMonto()
            
            // Seleccionar opcion de gasto exterior
            await this.getGastoExteriorSelector.doubleClick();
            await this.seleccionarGastoExterior(elemento.gastos_del_exterior);
            
            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
            // Click en boton Continuar
            // await CommonActions.clickBtnContinuar();

            // Ingresar codigo de verificacion
            // await CommonActions.ingresarCodigoVerificacion();

            // Click en boton CONTINUAR
            // await CommonActions.clickBtnCONTINUAR();

            // Click en boton Finalizar
            // await CommonActions.clickBtnFinalizar();
            // // Click en boton Cerrar
            // await CommonActions.clickBtnCerrar();

            // Editar registro en archivo transferencias.txt
            editEntry(files.transferencias,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error en ingresar datos en transferencias al exterior', error);
        }
    }
}

export default new TransferenciaExterior ();