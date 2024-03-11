import { transferenciaEntreMisCuentasSelectores } from "../../constants/transferencia/transferenciaEntreMisCuentas";
import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes, dataInstructions, dataStatus } from "../../constants/_data_generation";
import transferenciaController from "./transferencia.controller";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";
import CommonsTransferencias from "../../page-objects/android/navigation/Transferencias/CommonsTransferencias";

// Seccion de transferencias entre cuentas propias del usuario
class TransferenciaEntreMisCuentas {
// Funciones para obtener los selectores de transferencias entre mis cuentas
    get getTransferenciaCuentaDebitoSelector() {
        return $(transferenciaEntreMisCuentasSelectores.CuentaDebito);
    }

    get getCuentaDebitoOpcionSelector(){
        return $(transferenciaEntreMisCuentasSelectores.cuentaCorriente);
    }

    get getCuentaBeneficiariaSelector(){
        return $(transferenciaEntreMisCuentasSelectores.cuentaBeneficiaria);
    }

    get getCuentaBeneficiariaOpcionSelector(){
        return $(transferenciaEntreMisCuentasSelectores.cuentaAhorrosDest1);
    }

// Funciones para seleccionar cuenta de debito y cuenta beneficiaria
    async seleccionarCuentaDebito(opcion){
        switch (opcion) {
            case "110609286-CUENTA CORRIENTE":
                await $(transferenciaEntreMisCuentasSelectores.cuentaCorriente).waitForDisplayed();
                await $(transferenciaEntreMisCuentasSelectores.cuentaCorriente).click();
                break;
            case "118043573-CUENTA DE AHORROS":
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorros1).waitForDisplayed();
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorros1).click();
                break;
            case "630709065-CUENTA DE AHORROS":
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorros2).waitForDisplayed();
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorros2).click();
                break;
            default:
                break;
        }
    }

// Funcion para ingresr los datos de la transferencia en el formulario
    async seleccionarCuentaBeneficiaria(opcion){
        switch (opcion) {
            case "110609286-CUENTA CORRIENTE":
                $(transferenciaEntreMisCuentasSelectores.cuentaCorrienteDest).click();
                break;
            case "118043573-CUENTA DE AHORROS":
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorrosDest1).waitForDisplayed();
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorrosDest1).click();
                break;
            case "420818482-CUENTA DE AHORRO PROGRAMADO":
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorroProgDest).waitForDisplayed();
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorroProgDest).click();
                break;
            case "630709065-CUENTA DE AHORROS":
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorrosDest2).waitForDisplayed();
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorrosDest2).click()
                break;
            default:
                break;
        }
    }

// Funcion para ingresr los datos de la transferencia en el formulario
    async transferenciaEntreMisCuentasForm(data){
        try{
            let elemento;
            await transferenciaController.transferenciaEntreMisCuentasSeccion();
            for (let i=0; i < data.length; i++){
                elemento = data[i];
            }
            // Seleccionando la cuenta de debito
            await this.getTransferenciaCuentaDebitoSelector.waitForDisplayed({timeout:25000});
            await this.getTransferenciaCuentaDebitoSelector.click();
            await this.seleccionarCuentaDebito(elemento.cuenta_debito);

            // Seleccionando la cuenta beneficiaria
            await this.getCuentaBeneficiariaSelector.waitForDisplayed({timeout:25000});
            await this.getCuentaBeneficiariaSelector.click();
            await this.seleccionarCuentaBeneficiaria(elemento.numero_cuenta_beneficiario)

            // Ingresando Descripcion y Monto
            CommonsTransferencias.ingresarDescripcion();
            CommonsTransferencias.ingresarMonto();

            // Click en boton Continuar
            await CommonsTransferencias.clickBtnContinuar();

            // Click en boton Finalizar
            await CommonsTransferencias.clickBtnFinalizar();
            // console.log("Conditions =====>", [dataConditions.caseIs(elemento.case)])
            // console.log("Edit =====> ", [dataInstructions.assignStatus(dataStatus.active)])
            editEntry(files.data,    
                [dataConditions.caseIs(elemento.case)],
                [dataInstructions.assignStatus(dataStatus.active)]);
        }catch(error){
            console.error('Error en ingresar datos en transferencias entre mis cuentas', error);
        }
    }
}

export default new TransferenciaEntreMisCuentas ();