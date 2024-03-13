import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import CommonsTransferencias from "../../page-objects/android/navigation/Transferencias/CommonsTransferencias";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";

// Seccion de pagos de tarjetas eventuales del usuario
class PagosTarjetasEventuales {
// Funciones para obtener los selectores de pagos de tarjetas eventuales

// Funcion para ingresr los datos de la transferencia en el formulario
    async pagosTarjetasEventualesForm(elemento){
        try{
            // Seleccionando la cuenta de debito
            await this.getTransferenciaCuentaDebitoSelector.waitForDisplayed({timeout:25000});
            await this.getTransferenciaCuentaDebitoSelector.click();
            await this.seleccionarCuentaDebito(elemento.cuenta_debito);

            // Seleccionando la cuenta beneficiaria
            await this.getCuentaBeneficiariaSelector.waitForDisplayed();
            await this.getCuentaBeneficiariaSelector.click();
            await this.seleccionarCuentaBeneficiaria(elemento.numero_cuenta_beneficiario)

            // Ingresando Descripcion y Monto
            CommonsTransferencias.ingresarDescripcion();
            CommonsTransferencias.ingresarMonto();

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
            console.error('Error en ingresar datos en pagos de tarjetas eventuales', error);
        }
    }
}

export default new PagosTarjetasEventuales ();