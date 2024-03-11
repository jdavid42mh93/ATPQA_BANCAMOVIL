import { transferenciaEntreMisCuentasSelectores } from "../../constants/transferencia/transferenciaEntreMisCuentas";
import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes, dataInstructions, dataStatus } from "../../constants/_data_generation";
import transferenciaController from "./transferencia.controller";
import CommonsTransferencias from "../../page-objects/android/navigation/Transferencias/CommonsTransferencias";

// Seccion de pagos de tarjetas registradas del usuario
class PagosTarjetasRegistradas {
// Funciones para obtener los selectores de pagos de tarjetas registradas

// Funcion para ingresr los datos de la transferencia en el formulario
    async pagosTarjetasRegistradasForm(data){
        try{
            let elemento;
            for (let i=0; i < data.length; i++){
                elemento = data[i];
            }
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
            
            editEntry(files.data,[dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.EntreMisCuentas), dataConditions.statusIs(dataStatus.pending), dataInstructions.case(elemento.case)],[dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error en ingresar datos en transferencias entre mis cuentas', error);
        }
    }
}

export default new PagosTarjetasRegistradas ();