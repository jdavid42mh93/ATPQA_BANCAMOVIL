import { transferenciaEntreMisCuentasSelectores } from "../../constants/transferencia/transferenciaEntreMisCuentas";
import { mensajes } from "../../constants/transferencia/transferenciaSelectores";
import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import CommonsTransferencias from "../../page-objects/android/navigation/Transferencias/CommonsTransferencias";
import { buttons, buttonsSelectores } from "../../constants/common";

// Seccion de transferencias entre cuentas propias del usuario
class TransferenciaEntreMisCuentas {
// Funciones para obtener los selectores de transferencias entre mis cuentas
    get getCuentaDebitoSelector() {
        return $(transferenciaEntreMisCuentasSelectores.cuentaDebito);
    }

    get getCuentaBeneficiariaSelector(){
        return $(transferenciaEntreMisCuentasSelectores.cuentaBeneficiaria);
    }

// Funciones para seleccionar cuenta de debito y cuenta beneficiaria
    async seleccionarCuentaDebito(cuentaDebito){
        await $(transferenciaEntreMisCuentasSelectores.cuentaDebitoOpcion(cuentaDebito)).waitForDisplayed();
        await $(transferenciaEntreMisCuentasSelectores.cuentaDebitoOpcion(cuentaDebito)).click();
    }

    async seleccionarCuentaBeneficiaria(cuentaBeneficiaria){
        await $(transferenciaEntreMisCuentasSelectores.cuentaBeneficiariaOpcion(cuentaBeneficiaria)).waitForDisplayed();
        await $(transferenciaEntreMisCuentasSelectores.cuentaBeneficiariaOpcion(cuentaBeneficiaria)).click();
    }

// Funcion para ingresr los datos de la transferencia en el formulario
    async transferenciaEntreMisCuentasForm(elemento){
        try{
            // Seleccionar la cuenta de debito
            await this.getCuentaDebitoSelector.waitForDisplayed({timeout:30000});
            await this.getCuentaDebitoSelector.click();
            await this.seleccionarCuentaDebito(elemento.cuenta_debito);

            // Seleccionar la cuenta beneficiaria
            await this.getCuentaBeneficiariaSelector.waitForDisplayed({timeout:30000});
            await this.getCuentaBeneficiariaSelector.click();
            await this.seleccionarCuentaBeneficiaria(elemento.numero_cuenta_beneficiario)

            // Ingresar Descripcion y Monto
            CommonsTransferencias.ingresarDescripcion();
            CommonsTransferencias.ingresarMonto();

            if (elemento.cuenta_debito === elemento.numero_cuenta_beneficiario){
                // Click en boton Continuar
                await CommonsTransferencias.clickBtnContinuar();

                // Visualizar mensaje de error
                await CommonsTransferencias.mensajeError(mensajes.mensajeError);
                await $(buttonsSelectores.button(buttons.Ok)).click();

                // Editar registro en archivo data.txt
                editEntry(files.data,    
                    [dataConditions.caseIs(elemento.case)],
                    [dataInstructions.assignStatus(dataStatus.canceled)]);
            } else {
                // Click en boton Continuar
                await CommonsTransferencias.clickBtnContinuar();
                await CommonsTransferencias.clickBtnContinuar();

                // Click en boton Finalizar
                await CommonsTransferencias.clickBtnFinalizar();

                // Editar registro en archivo data.txt
                editEntry(files.data,    
                    [dataConditions.caseIs(elemento.case)],
                    [dataInstructions.assignStatus(dataStatus.active)]);
            }
            
        }catch(error){
            console.error('Error en ingresar datos en transferencias entre mis cuentas', error);
        }
    }
}

export default new TransferenciaEntreMisCuentas ();