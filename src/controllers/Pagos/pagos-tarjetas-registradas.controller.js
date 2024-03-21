import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";
import { pagosTarjetasRegistradasSelectores } from "../../constants/pagos/pagosTarjetasRegistradas";
import { buttons, buttonsSelectores, datosGenerales, mensajes } from "../../constants/common";

// Seccion de pagos de tarjetas registradas del usuario
class PagosTarjetasRegistradas {
// Funciones para obtener los selectores de pagos de tarjetas registradas
    get getBeneficiarioSelector(){
        return $(pagosTarjetasRegistradasSelectores.beneficiario);
    }

    get getMontoSelector(){
        return $(pagosTarjetasRegistradasSelectores.montoAPagar);
    }

    get getDescripcionSelector(){
        return $(pagosTarjetasRegistradasSelectores.descripcion);
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

    async seleccionarBeneficiario(beneficiario) {
        await $(pagosTarjetasRegistradasSelectores.beneficiarioOpcion(beneficiario)).waitForDisplayed();
        await $(pagosTarjetasRegistradasSelectores.beneficiarioOpcion(beneficiario)).click();
    }

// Funcion para ingresr los datos de la transferencia en el formulario
    async pagosTarjetasRegistradasForm(elemento){
        try{
            // Seleccionar cuenta de debito
            await CommonActions.getCuentaDebitoSelector.waitForDisplayed({timeout:30000});
            await CommonActions.getCuentaDebitoSelector.click();
            // Seleccionar cuenta de debito opcion
            await CommonActions.seleccionarCuentaDebito(elemento.cuenta_debito);

            // Ingresar Descripcion y Monto
            await this.ingresarMonto();
            await this.ingresarDescripcion();
            
            // Seleccionar Beneficiario
            await this.getBeneficiarioSelector.waitForDisplayed({timeout:30000});
            await this.getBeneficiarioSelector.click();
            // Seleccionar Beneficiario opcion
            await this.seleccionarBeneficiario(elemento.numero_tarjeta);
            
            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();
            // Click en boton Continuar
            await CommonActions.clickBtnContinuar();

            if(CommonActions.mensajeError(mensajes.transaccionNoProcesada)){
                await $(buttonsSelectores.button(buttons.Ok)).click();
                // Editar registro en archivo data.txt
                editEntry(files.pagos,    
                    [dataConditions.caseIs(elemento.case)],
                    [dataInstructions.assignStatus(dataStatus.canceled)]);
            } else {
                // Click en boton Finalizar
                await CommonActions.clickBtnFinalizar();

                // Editar registro en archivo data.txt
                editEntry(files.pagos,    
                    [dataConditions.caseIs(elemento.case)],
                    [dataInstructions.assignStatus(dataStatus.active)]);
            }
        }catch(error){
            console.error('Error en ingresar datos en pagos de tarjetas registradas', error);
        }
    }
}

export default new PagosTarjetasRegistradas ();