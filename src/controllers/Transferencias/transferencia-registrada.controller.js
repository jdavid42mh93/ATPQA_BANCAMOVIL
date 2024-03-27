import { files, dataConditions, dataInstructions, dataStatus} from "../../constants/_data_generation";
import { UIAutomatorSelectores, datosGenerales } from "../../constants/common";
import { transferenciaRegistradasSelectores } from "../../constants/transferencia/transferenciaRegistradas";
import { labels } from "../../constants/transferencia/transferenciaSelectores";
import { editEntry } from "../../helpers/fileEditor.helper";
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

    async seleccionarCuentaBeneficiaria(cuentaBeneficiaria) {
        await $(UIAutomatorSelectores.scrollTextIntoView(cuentaBeneficiaria));   // scroll hasta encontrar la cuenta beneficiaria
        await CommonActions.selectTextOpcion(cuentaBeneficiaria);
    }

// Funcion para completar los datos de transferencia en cuentas registradas
    async transferenciaRegistradaForm(elemento){
        try{
            // Seleccionar cuenta debito
            await CommonActions.getCuentaDebitoSelector.waitForDisplayed({timeout:30000})
            await CommonActions.getCuentaDebitoSelector.click();
            // Seleccionar cuenta debito opcion
            await CommonActions.seleccionarCuentaDebito(elemento.cuenta_debito);
            
            // Seleccionar cuenta beneficiaria
            await this.getSeleccionarBeneficiarioSelector.waitForDisplayed({timeout:30000});
            await this.getSeleccionarBeneficiarioSelector.click();
            // Seleccionar cuenta beneficiaria opcion
            await this.seleccionarCuentaBeneficiaria(elemento.numero_cuenta_beneficiario);

            await $(UIAutomatorSelectores.scrollTextIntoView(labels.Monto));   // scroll hasta encontrar la palabra Monto
            
            // Ingresar Monto y Descripcion
            await this.ingresarDescripcion();
            await this.ingresarMonto();
            
            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
                
            // Click en boton Finalizar
            await CommonActions.clickBtnFinalizar();

            // Editar registro en archivo transferencias.txt
            editEntry(files.transferencias,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error en ingresar datos en transferencias registradas', error);
        }
    }
}

export default new TransferenciaRegistrada ();