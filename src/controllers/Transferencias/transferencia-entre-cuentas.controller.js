import { transferenciaEntreMisCuentasSelectores } from "../../constants/transferencia/transferenciaEntreMisCuentas";
import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import CommonsTransferencias from "../../page-objects/android/navigation/Transferencias/CommonsTransferencias";
import { buttons, buttonsSelectores, mensajes } from "../../constants/common";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";

// Seccion de transferencias entre cuentas propias del usuario
class TransferenciaEntreMisCuentas {
// Funciones para obtener los selectores de transferencias entre mis cuentas
    get getCuentaBeneficiariaSelector(){
        return $(transferenciaEntreMisCuentasSelectores.cuentaBeneficiaria);
    }

// Funciones para seleccionar cuenta de debito y cuenta beneficiaria
    async seleccionarCuentaBeneficiaria(cuentaBeneficiaria){
        await CommonActions.selectCheckedOpcion(cuentaBeneficiaria)
    }

// Funcion para ingresr los datos de la transferencia en el formulario
    async transferenciaEntreMisCuentasForm(elemento){
        try{
            // Seleccionar cuenta de debito
            await CommonActions.getCuentaDebitoSelector.waitForDisplayed({timeout:30000});
            await CommonActions.getCuentaDebitoSelector.click();
            // Seleccionar cuenta de debito opcion
            await CommonActions.seleccionarCuentaDebito(elemento.cuenta_debito);

            // Seleccionar la cuenta beneficiaria
            await this.getCuentaBeneficiariaSelector.waitForDisplayed({timeout:30000});
            await this.getCuentaBeneficiariaSelector.click();
            // Seleccionar la cuenta beneficiaria opcion
            await this.seleccionarCuentaBeneficiaria(elemento.numero_cuenta_beneficiario)

            // Ingresar Descripcion y Monto
            CommonsTransferencias.ingresarDescripcion();
            CommonsTransferencias.ingresarMonto();

            if (elemento.cuenta_debito === elemento.numero_cuenta_beneficiario){
                // Click en boton Continuar
                await CommonActions.clickBtnContinuar();

                // Visualizar mensaje de error
                await CommonActions.mensajeError(mensajes.mensajeError);
                await $(buttonsSelectores.button(buttons.Ok)).click();

                // Editar registro en archivo data.txt
                editEntry(files.transferencias,    
                    [dataConditions.caseIs(elemento.case)],
                    [dataInstructions.assignStatus(dataStatus.canceled)]);
            } else {
                // Click en boton Continuar
                await CommonActions.clickBtnContinuar();
                await CommonActions.clickBtnContinuar();

                // Click en boton Finalizar
                await CommonActions.clickBtnFinalizar();

                // Editar registro en archivo transferencias.txt
                editEntry(files.transferencias,    
                    [dataConditions.caseIs(elemento.case)],
                    [dataInstructions.assignStatus(dataStatus.active)]);
            }
            
        }catch(error){
            console.error('Error en ingresar datos en transferencias entre mis cuentas', error);
        }
    }
}

export default new TransferenciaEntreMisCuentas ();