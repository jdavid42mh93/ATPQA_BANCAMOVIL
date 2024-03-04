import { transferenciaEntreMisCuentasSelectores } from "../../constants/transferencia/transferenciaEntreMisCuentas";
import { searchEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataTypes, dataSubtypes } from "../../constants/_data_generation";
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
    async seleccionarCuentaDebito(cuentaDebitoOpcion){
        console.log("Funcion seleccionar Cuenta Debito", cuentaDebitoOpcion);
        await this.getTransferenciaCuentaDebitoSelector.waitForDisplayed({timeout:25000});
        await this.getTransferenciaCuentaDebitoSelector.click();
        switch (cuentaDebitoOpcion) {
            case "110609286-CUENTA CORRIENTE":
                console.log("opcion correcta cuenta debito");
                await $(transferenciaEntreMisCuentasSelectores.cuentaCorriente).waitForDisplayed();
                await $(transferenciaEntreMisCuentasSelectores.cuentaCorriente).click();
                break;
            case "118043573-CUENTA DE AHORROS":
                console.log("opcion incorrecta cuenta debito")
                $(transferenciaEntreMisCuentasSelectores.cuentaAhorros1).click();
                break;
            case "630709065-CUENTA DE AHORROS":
                $(transferenciaEntreMisCuentasSelectores.cuentaAhorros2).click();
                break;
            default:
                break;
        }
    }

// Funcion para ingresr los datos de la transferencia en el formulario
    async seleccionarCuentaBeneficiaria(cuentaBeneficiariaOpcion){
        await this.getCuentaBeneficiariaSelector.waitForDisplayed({timeout:15000});
        await this.getCuentaBeneficiariaSelector.click();
        switch (cuentaBeneficiariaOpcion) {
            case "110609286-CUENTA CORRIENTE":
                $(transferenciaEntreMisCuentasSelectores.cuentaCorrienteDest).click();
                break;
            case "118043573-CUENTA DE AHORROS":
                console.log("opcion correcta cuenta beneficiaria")
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorrosDest1).waitForDisplayed();
                await $(transferenciaEntreMisCuentasSelectores.cuentaAhorrosDest1).click();
                break;
            case "420818482-CUENTA DE AHORRO PROGRAMADO":
                $(transferenciaEntreMisCuentasSelectores.cuentaAhorroProgDest).click();
                break;
            case "630709065-CUENTA DE AHORROS":
                $(transferenciaEntreMisCuentasSelectores.cuentaAhorrosDest2).click()
                break;
            default:
                break;
        }
    }

// Funcion para ingresr los datos de la transferencia en el formulario
    async transferenciaEntreMisCuentasForm(){
        try{
            const data = searchEntry(files.data, [dataConditions.typeIs(dataTypes.transferencias),dataConditions.subtypeIs(dataSubtypes.EntreMisCuentas),]);
            console.log("Data =====>", data);
            await transferenciaController.transferenciaEntreMisCuentasSeccion();

            // Seleccionando la cuenta de debito
            await this.getTransferenciaCuentaDebitoSelector.waitForDisplayed({timeout:25000});
            await this.getTransferenciaCuentaDebitoSelector.click();
            await this.getCuentaDebitoOpcionSelector.click();

            // Seleccionando la cuenta beneficiaria
            await this.getCuentaBeneficiariaSelector.waitForDisplayed({timeout:15000});
            await this.getCuentaBeneficiariaSelector.click();
            await this.getCuentaBeneficiariaOpcionSelector.click();

            // Ingresando Descripcion y Monto
            CommonsTransferencias.ingresarDescripcion();
            await driver.pause(2000);
            CommonsTransferencias.ingresarMonto();
            await driver.pause(2000);

            // Seleccionando boton de continuar
            await CommonActions.getBtnContinuarSelector.waitForDisplayed({timeout: 20000});
            await CommonActions.getBtnContinuarSelector.click();
            await CommonActions.getBtnContinuarSelector.waitForDisplayed({timeout: 20000});
            await CommonActions.getBtnContinuarSelector.click();
            await CommonActions.getBtnFinalizarSelector.waitForDisplayed({timeout: 20000});
            await CommonActions.getBtnFinalizarSelector.click();
        }catch(error){
            console.error('Error en ingresar datos en transferencias entre mis cuentas', error);
        }
    }
}

export default new TransferenciaEntreMisCuentas ();