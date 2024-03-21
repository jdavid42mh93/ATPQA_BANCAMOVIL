import { editEntry } from "../../helpers/fileEditor.helper";
import { files, dataConditions, dataInstructions, dataStatus } from "../../constants/_data_generation";
import { pagosMisTarjetasSelectores, tarjetas } from "../../constants/pagos/pagosMisTarjetas";
import { buttons, buttonsSelectores, datosGenerales, mensajes } from "../../constants/common";
import CommonActions from "../../page-objects/android/common-actions/CommonActions";

// Seccion de pagos de tarjetas propias del usuario
class PagosMisTarjetas {
// Funciones para obtener los selectores de pagos de tarjetas propias del usuario
    get getSeleccionarTarjetaSelector() {
        return $(pagosMisTarjetasSelectores.tarjeta)
    }

    get getMontoSelector() {
        return $(pagosMisTarjetasSelectores.monto)
    }

    async ingresarMonto(){
        await this.getMontoSelector.doubleClick();
        await this.getMontoSelector.addValue(datosGenerales.monto);
        await driver.hideKeyboard();
    }

    async seleccionarNumeroTarjeta(numeroTarjeta){
        await $(tarjetas.tarjetaOpcion(numeroTarjeta)).waitForDisplayed();
        await $(tarjetas.tarjetaOpcion(numeroTarjeta)).click();
    }
// Funcion para ingresr los datos del pago en el formulario
    async pagosMisTarjetasForm(elemento){
        try{
            // Seleccionar cuenta debito
            await CommonActions.getCuentaDebitoSelector.waitForDisplayed({timeout:35000});
            await CommonActions.getCuentaDebitoSelector.click();
            // Seleccionar cuenta debito opcion
            await CommonActions.seleccionarCuentaDebito(elemento.cuenta_debito);
            
            // Seleccionar la tarjeta a pagar
            await this.getSeleccionarTarjetaSelector.waitForDisplayed({timeout:30000});
            await this.getSeleccionarTarjetaSelector.click();
            // Seleccionar opcion de tarjeta a pagar
            await this.seleccionarNumeroTarjeta(elemento.numero_tarjeta);

            // Ingresar Monto
            await this.ingresarMonto();

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
            console.error('Error en ingresar datos en pagos de mis tarjetas', error);
        }
    }
}

export default new PagosMisTarjetas ();